# Health Samurai Website - Deployment Guide

## Overview

The Health Samurai marketing website is deployed on Google Kubernetes Engine (GKE) with automatic git-based deployments. The container polls GitHub for changes and auto-restarts when new commits are detected.

## Architecture

```
┌─────────────────┐     ┌──────────────────┐     ┌─────────────────┐
│   GitHub Repo   │────▶│  GKE Autopilot   │────▶│  GCE Load       │
│  (source code)  │     │  (Bun container) │     │  Balancer       │
└─────────────────┘     └──────────────────┘     └─────────────────┘
                              │                         │
                              │ polls every 60s         │
                              ▼                         ▼
                        ┌──────────────────┐     ┌─────────────────┐
                        │  Auto-restart    │     │  SSL/HTTPS      │
                        │  on new commits  │     │  (Google-managed)│
                        └──────────────────┘     └─────────────────┘
```

## URLs

| Environment | URL | Branch |
|-------------|-----|--------|
| Production | https://site-prod.apki.dev | `prod` |
| Production (alias) | https://hs.apki.dev | `prod` |
| Development | https://site-dev.apki.dev | `main` |

## Branch Strategy

```
main branch ──────► site-dev.apki.dev (auto-deploy, 30s poll)
                    - Development/staging environment
                    - Fast iteration, immediate feedback

prod branch ──────► site-prod.apki.dev (auto-deploy, 120s poll)
                    - Production environment
                    - Merge main → prod to deploy
```

### Deploy to Production

```bash
# Merge main into prod and push
git checkout prod
git merge main
git push
git checkout main
```

The prod container polls every 120 seconds and auto-restarts on new commits.

## GCP Resources

| Resource | Name | Project |
|----------|------|---------|
| GKE Cluster | `hs-cluster` | `atomic-ehr` |
| Region | `us-central1` | |
| Static IP | `health-samurai-ip` | `35.186.242.241` |
| SSL Certificate | `health-samurai-ssl` | Google-managed |
| Container Registry | `gcr.io/atomic-ehr/health-samurai-bun` | |

## Docker Image

### Build and Push

```bash
# Configure Docker for GCR
gcloud auth configure-docker gcr.io

# Build for amd64 (required for GKE)
docker buildx build --platform linux/amd64 -t gcr.io/atomic-ehr/health-samurai-bun:latest --push .
```

### Environment Variables

| Variable | Default | Description |
|----------|---------|-------------|
| `GIT_REPO` | (required) | GitHub repository URL |
| `GIT_BRANCH` | `main` | Branch to track |
| `POLL_INTERVAL` | `60` | Seconds between git checks |
| `PORT` | `4444` | Server port |

### How It Works

1. Container starts and clones the repository
2. Runs `bun install` to install dependencies
3. Starts the Bun server
4. Polls GitHub every 60 seconds for new commits
5. If new commits detected: pulls changes, reinstalls deps, restarts server
6. Writes `.version.json` with commit hash and date (displayed in footer)

## Kubernetes Resources

### Deployments

Two separate deployments for prod and dev environments:

```yaml
# k8s/prod-deployment.yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: health-samurai-web-prod
spec:
  replicas: 1
  selector:
    matchLabels:
      app: health-samurai-web
      env: prod
  template:
    spec:
      containers:
      - name: web
        image: gcr.io/atomic-ehr/health-samurai-bun:latest
        env:
        - name: GIT_BRANCH
          value: "prod"
        - name: POLL_INTERVAL
          value: "120"
```

```yaml
# k8s/dev-deployment.yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: health-samurai-web-dev
spec:
  replicas: 1
  selector:
    matchLabels:
      app: health-samurai-web
      env: dev
  template:
    spec:
      containers:
      - name: web
        image: gcr.io/atomic-ehr/health-samurai-bun:latest
        env:
        - name: GIT_BRANCH
          value: "main"
        - name: POLL_INTERVAL
          value: "30"
```

### Ingress with SSL

```yaml
# k8s/ingress.yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: health-samurai-ingress
  annotations:
    kubernetes.io/ingress.global-static-ip-name: health-samurai-ip
    ingress.gcp.kubernetes.io/pre-shared-cert: health-samurai-ssl
spec:
  rules:
  # Production (prod branch)
  - host: site-prod.apki.dev
    http:
      paths:
      - path: /
        pathType: Prefix
        backend:
          service:
            name: health-samurai-web-prod
            port:
              number: 80
  - host: hs.apki.dev
    http:
      paths:
      - path: /
        pathType: Prefix
        backend:
          service:
            name: health-samurai-web-prod
            port:
              number: 80
  # Development (main branch)
  - host: site-dev.apki.dev
    http:
      paths:
      - path: /
        pathType: Prefix
        backend:
          service:
            name: health-samurai-web-dev
            port:
              number: 80
```

## PostgreSQL Database

PostgreSQL is deployed using [ParadeDB](https://paradedb.com/) (Postgres with vector/search extensions) as a StatefulSet in each environment.

### Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                    health-samurai-dev                       │
├─────────────────────────────────────────────────────────────┤
│  ┌─────────────────┐         ┌─────────────────────────┐   │
│  │ dev-health-     │         │ dev-postgres            │   │
│  │ samurai-web     │────────▶│ (StatefulSet)           │   │
│  │ (Deployment)    │         │                         │   │
│  └─────────────────┘         │ PVC: 10Gi               │   │
│          │                   └─────────────────────────┘   │
│          │ DATABASE_URL                   │                │
│          │                                │ port 5432      │
│          ▼                                ▼                │
│  postgres://healthsamurai:...@dev-postgres:5432/healthsamurai
└─────────────────────────────────────────────────────────────┘
```

### Kubernetes Resources

| Resource | Dev | Prod |
|----------|-----|------|
| StatefulSet | `dev-postgres` | `prod-postgres` |
| Service | `dev-postgres:5432` | `prod-postgres:5432` |
| Secret | `dev-postgres-secret` | `prod-postgres-secret` |
| PVC | `postgres-data-dev-postgres-0` | `postgres-data-prod-postgres-0` |
| Storage | 10Gi | 10Gi |

### Connection Details

| Environment | DATABASE_URL |
|-------------|--------------|
| Dev | `postgres://healthsamurai:healthsamurai@dev-postgres:5432/healthsamurai` |
| Prod | `postgres://healthsamurai:healthsamurai@prod-postgres:5432/healthsamurai` |

The web application automatically receives `DATABASE_URL` from the `postgres-secret` via `secretRef` in the deployment.

### Files

```
k8s/
├── base/
│   ├── postgres-statefulset.yaml   # ParadeDB StatefulSet with PVC
│   ├── postgres-service.yaml       # ClusterIP service on port 5432
│   └── postgres-secret.yaml        # Credentials and DATABASE_URL
└── overlays/
    ├── dev/
    │   └── postgres-secret-patch.yaml   # DATABASE_URL with dev-postgres host
    └── prod/
        └── postgres-secret-patch.yaml   # DATABASE_URL with prod-postgres host
```

### Deploy

```bash
# Preview generated manifests
kubectl kustomize k8s/overlays/dev
kubectl kustomize k8s/overlays/prod

# Apply to cluster
kubectl apply -k k8s/overlays/dev
kubectl apply -k k8s/overlays/prod
```

### Check Status

```bash
# Check pods
kubectl get pods -n health-samurai-dev -l app=postgres
kubectl get pods -n health-samurai-prod -l app=postgres

# Check PVCs
kubectl get pvc -n health-samurai-dev
kubectl get pvc -n health-samurai-prod

# View logs
kubectl logs -n health-samurai-dev statefulset/dev-postgres
kubectl logs -n health-samurai-prod statefulset/prod-postgres
```

### Connect to Database

```bash
# Dev
kubectl exec -it -n health-samurai-dev dev-postgres-0 -- psql -U healthsamurai

# Prod
kubectl exec -it -n health-samurai-prod prod-postgres-0 -- psql -U healthsamurai
```

### Run Migrations

Migrations are run from the web container which has access to the database:

```bash
# Dev
kubectl exec -it -n health-samurai-dev deployment/dev-health-samurai-web -- bun run migrate:up

# Prod
kubectl exec -it -n health-samurai-prod deployment/prod-health-samurai-web -- bun run migrate:up

# Check migration status
kubectl exec -it -n health-samurai-dev deployment/dev-health-samurai-web -- bun run migrate:status
```

### Backup & Restore

```bash
# Backup (dev)
kubectl exec -n health-samurai-dev dev-postgres-0 -- \
  pg_dump -U healthsamurai healthsamurai > backup-dev-$(date +%Y%m%d).sql

# Restore (dev)
kubectl exec -i -n health-samurai-dev dev-postgres-0 -- \
  psql -U healthsamurai healthsamurai < backup-dev-20260131.sql
```

### Changing Credentials (Production)

For production, you should change the default credentials:

1. Update `k8s/overlays/prod/postgres-secret-patch.yaml`:
   ```yaml
   apiVersion: v1
   kind: Secret
   metadata:
     name: postgres-secret
   stringData:
     POSTGRES_USER: your_secure_user
     POSTGRES_PASSWORD: your_secure_password
     POSTGRES_DB: healthsamurai
     DATABASE_URL: postgres://your_secure_user:your_secure_password@prod-postgres:5432/healthsamurai
   ```

2. Apply and restart:
   ```bash
   kubectl apply -k k8s/overlays/prod
   kubectl rollout restart -n health-samurai-prod statefulset/prod-postgres
   kubectl rollout restart -n health-samurai-prod deployment/prod-health-samurai-web
   ```

### Troubleshooting

**Pod stuck in Pending:**
```bash
# Check PVC status
kubectl describe pvc -n health-samurai-dev postgres-data-dev-postgres-0
# May need to wait for GKE to provision storage
```

**Connection refused from web app:**
```bash
# Verify postgres is ready
kubectl exec -n health-samurai-dev dev-postgres-0 -- pg_isready -U healthsamurai

# Check service endpoints
kubectl get endpoints -n health-samurai-dev dev-postgres
```

**Data persistence:**
- StatefulSet uses PersistentVolumeClaim (10Gi)
- Data persists across pod restarts
- Deleting the StatefulSet does NOT delete the PVC
- To delete data: `kubectl delete pvc -n health-samurai-dev postgres-data-dev-postgres-0`

## Google OAuth Authentication

Google OAuth is configured for `@health-samurai.io` domain authentication.

### OAuth Client

| Setting | Value |
|---------|-------|
| Project | `atomic-ehr` |
| Client Name | `Health Samurai Website` |
| Client ID | `353194995576-anatl78m48o2p16j250sbaob01rgmo92.apps.googleusercontent.com` |
| Allowed Domain | `health-samurai.io` |

**Redirect URIs:**
- `http://localhost:4444/auth/google/callback` (local development)
- `https://site-dev.apki.dev/auth/google/callback` (development)
- `https://site-prod.apki.dev/auth/google/callback` (production)

### Kubernetes Secrets

Google OAuth credentials are stored in the `health-samurai-secrets` secret in each namespace:

| Secret Key | Description |
|------------|-------------|
| `GOOGLE_CLIENT_ID` | OAuth Client ID |
| `GOOGLE_CLIENT_SECRET` | OAuth Client Secret |
| `GOOGLE_REDIRECT_URI` | Callback URL for environment |
| `GOOGLE_ALLOWED_DOMAIN` | `health-samurai.io` |

**View secrets:**
```bash
kubectl get secret health-samurai-secrets -n health-samurai-dev -o jsonpath='{.data}' | jq 'keys'
kubectl get secret health-samurai-secrets -n health-samurai-prod -o jsonpath='{.data}' | jq 'keys'
```

**Update secrets:**
```bash
# Delete and recreate
kubectl delete secret health-samurai-secrets -n health-samurai-dev
kubectl create secret generic health-samurai-secrets \
  --namespace=health-samurai-dev \
  --from-literal=GOOGLE_CLIENT_ID=<client-id> \
  --from-literal=GOOGLE_CLIENT_SECRET=<client-secret> \
  --from-literal=GOOGLE_REDIRECT_URI=https://site-dev.apki.dev/auth/google/callback \
  --from-literal=GOOGLE_ALLOWED_DOMAIN=health-samurai.io

# Restart deployment to pick up changes
kubectl rollout restart deployment/dev-health-samurai-web -n health-samurai-dev
```

### Local Development

Copy `.env.example` to `.env` and fill in the Google OAuth credentials:

```bash
cp .env.example .env
```

```env
GOOGLE_CLIENT_ID=353194995576-anatl78m48o2p16j250sbaob01rgmo92.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=<get from GCP Console or team>
GOOGLE_REDIRECT_URI=http://localhost:4444/auth/google/callback
GOOGLE_ALLOWED_DOMAIN=health-samurai.io
```

### Managing OAuth Client

The OAuth client is managed in Google Cloud Console:
- **Console URL:** https://console.cloud.google.com/apis/credentials?project=atomic-ehr
- To add new redirect URIs or view the client secret, navigate to the OAuth 2.0 Client IDs section

## DNS Configuration

DNS is managed in GCP Cloud DNS (zone: `apki-dev`).

| Record | Type | Value |
|--------|------|-------|
| `hs.apki.dev` | A | `35.186.242.241` |
| `site-prod.apki.dev` | A | `35.186.242.241` |
| `site-dev.apki.dev` | A | `35.186.242.241` |

### Add/Update DNS Records

```bash
# Add new record
gcloud dns record-sets create "subdomain.apki.dev." \
  --zone=apki-dev \
  --type=A \
  --ttl=300 \
  --rrdatas="35.186.242.241" \
  --project=atomic-ehr

# Update existing record
gcloud dns record-sets update "subdomain.apki.dev." \
  --zone=apki-dev \
  --type=A \
  --ttl=300 \
  --rrdatas="NEW_IP" \
  --project=atomic-ehr
```

## SSL/HTTPS

SSL is handled by Google-managed certificates. The `.dev` TLD requires HTTPS (HSTS preloaded in browsers).

### Check Certificate Status

```bash
gcloud compute ssl-certificates describe health-samurai-ssl \
  --global \
  --project=atomic-ehr
```

### Add New Domain to Certificate

```bash
# Delete old cert
gcloud compute ssl-certificates delete health-samurai-ssl --global --project=atomic-ehr

# Create new cert with additional domain
gcloud compute ssl-certificates create health-samurai-ssl \
  --domains=hs.apki.dev,site-prod.apki.dev,site-dev.apki.dev,NEW_DOMAIN.apki.dev \
  --global \
  --project=atomic-ehr
```

Note: Certificate provisioning takes 10-60 minutes.

## Common Operations

### Connect to Cluster

```bash
gcloud container clusters get-credentials hs-cluster \
  --region=us-central1 \
  --project=atomic-ehr
```

### Check Pod Status

```bash
kubectl get pods
kubectl logs deployment/health-samurai-web
```

### Force Restart (pull latest image)

```bash
kubectl rollout restart deployment health-samurai-web
```

### Check Ingress Status

```bash
kubectl describe ingress health-samurai-ingress
```

### View Backend Health

```bash
gcloud compute backend-services get-health \
  k8s1-26a1bcab-default-health-samurai-web-80-1da5f565 \
  --global \
  --project=atomic-ehr
```

## Deploying Code Changes

Code deploys automatically! Just push to GitHub:

```bash
git add .
git commit -m "Your changes"
git push
```

The container will detect changes within 60 seconds and auto-restart.

### Instant Deploy with GitHub Webhook (Recommended)

For instant deployments (< 2 seconds), configure a GitHub webhook:

#### 1. Generate a secure secret

```bash
openssl rand -hex 32
```

#### 2. Create Kubernetes secret

```bash
kubectl create secret generic health-samurai-secrets \
  --from-literal=webhook-secret=YOUR_SECRET_HERE
```

Or apply the secrets file (edit first!):
```bash
# Edit k8s/secrets.yaml with your secret
kubectl apply -f k8s/secrets.yaml
```

#### 3. Configure GitHub Webhook

1. Go to: `https://github.com/HealthSamurai/health-samurai-io-bun/settings/hooks`
2. Click "Add webhook"
3. Settings:
   - **Payload URL**: `https://site-dev.apki.dev/api/webhook/github` (or site-prod for prod)
   - **Content type**: `application/json`
   - **Secret**: Your generated secret
   - **Events**: Just the `push` event
4. Click "Add webhook"

#### 4. Restart deployments to pick up secrets

```bash
kubectl rollout restart deployment health-samurai-web-dev
kubectl rollout restart deployment health-samurai-web-prod
```

Now pushes to GitHub will trigger instant reloads!

### Manual Deploy (if needed)

```bash
# Rebuild and push image (only if Dockerfile changed)
docker buildx build --platform linux/amd64 -t gcr.io/atomic-ehr/health-samurai-bun:latest --push .

# Restart deployment to pull new image
kubectl rollout restart deployment health-samurai-web
```

## Troubleshooting

### Site returns 404

1. Check pod is running: `kubectl get pods`
2. Check pod logs: `kubectl logs deployment/health-samurai-web`
3. Check ingress hosts: `kubectl describe ingress health-samurai-ingress`
4. Check backend health in GCP Console

### Site returns 502

1. Backend health check failing
2. Check pod logs for errors
3. Verify container starts and listens on port 4444

### SSL Certificate not working

1. Check cert status: `gcloud compute ssl-certificates describe health-samurai-ssl --global`
2. Provisioning can take up to 60 minutes
3. Ensure DNS points to the correct IP

### Container not pulling updates

1. Check git connectivity in pod: `kubectl exec -it <pod> -- git fetch`
2. Verify GIT_REPO env variable is correct
3. Check poll interval in logs

## Files

```
├── Dockerfile              # Bun + git Alpine image
├── docker-entrypoint.sh    # Clone/pull/restart logic
├── docker-compose.yml      # Local development (includes postgres)
├── k8s/
│   ├── base/
│   │   ├── kustomization.yaml
│   │   ├── deployment.yaml          # Web app deployment
│   │   ├── service.yaml             # Web app service
│   │   ├── configmap.yaml           # Environment config
│   │   ├── postgres-statefulset.yaml # PostgreSQL StatefulSet
│   │   ├── postgres-service.yaml    # PostgreSQL service
│   │   └── postgres-secret.yaml     # Database credentials
│   └── overlays/
│       ├── dev/
│       │   ├── kustomization.yaml
│       │   ├── ingress.yaml
│       │   └── postgres-secret-patch.yaml  # Dev DATABASE_URL
│       └── prod/
│           ├── kustomization.yaml
│           ├── ingress.yaml
│           └── postgres-secret-patch.yaml  # Prod DATABASE_URL
```

## Useful Commands

```bash
# Check all resources
kubectl get pods,svc,ingress

# Stream logs
kubectl logs -f deployment/health-samurai-web

# Check GKE cluster
gcloud container clusters list --project=atomic-ehr

# Check static IP
gcloud compute addresses list --global --project=atomic-ehr

# Check forwarding rules (HTTP/HTTPS)
gcloud compute forwarding-rules list --global --project=atomic-ehr
```
