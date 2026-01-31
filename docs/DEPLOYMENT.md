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
                              │ polls every 30-120s     │
                              ▼                         ▼
                        ┌──────────────────┐     ┌─────────────────┐
                        │  Auto-restart    │     │  SSL/HTTPS      │
                        │  on new commits  │     │  (pre-shared)   │
                        └──────────────────┘     └─────────────────┘
```

**Namespace:** Both dev and prod environments run in the `default` namespace with `-dev` and `-prod` suffixes for resource names.

## URLs

| Environment | URL | Branch |
|-------------|-----|--------|
| Production | https://site-prod.apki.dev | `main` |
| Production (alias) | https://hs.apki.dev | `main` |
| Development | https://site-dev.apki.dev | `main` |

## Deployment Strategy

Both environments track the `main` branch but with different poll intervals:

```
main branch ─┬──► health-samurai-web-dev (30s poll)
             │    - Development/staging environment
             │    - Fast iteration, immediate feedback
             │
             └──► health-samurai-web-prod (120s poll)
                  - Production environment
                  - 3 replicas for high availability
```

### Deploy Code

Code deploys automatically when pushed to GitHub:

```bash
git add .
git commit -m "Your changes"
git push
```

The containers detect changes within 30-120 seconds and auto-restart.

## GCP Resources

| Resource | Name | Project |
|----------|------|---------|
| GKE Cluster | `hs-cluster` | `atomic-ehr` |
| Region | `us-central1` | |
| Static IP | `health-samurai-ip` | `35.186.242.241` |
| SSL Certificate | `health-samurai-ssl` | Pre-shared |
| Container Registry | `gcr.io/atomic-ehr/health-samurai-web` | |

## Kubernetes Configuration

### Directory Structure

```
k8s/
├── base/                    # Shared resources
│   ├── kustomization.yaml
│   ├── deployment.yaml      # Web app deployment
│   ├── service.yaml         # Web app ClusterIP service
│   ├── configmap.yaml       # GIT_REPO, GIT_BRANCH, POLL_INTERVAL, PORT
│   ├── postgres-statefulset.yaml  # ParadeDB StatefulSet
│   ├── postgres-service.yaml      # Postgres ClusterIP service
│   └── postgres-secret.yaml       # Postgres credentials template
├── overlays/
│   ├── dev/
│   │   └── kustomization.yaml     # nameSuffix: "-dev", replicas: 1
│   └── prod/
│       └── kustomization.yaml     # nameSuffix: "-prod", replicas: 3
└── ingress.yaml             # GCP Load Balancer ingress (applied separately)
```

### Resources Created

| Resource | Dev | Prod |
|----------|-----|------|
| Deployment | `health-samurai-web-dev` | `health-samurai-web-prod` |
| Service | `health-samurai-web-dev` | `health-samurai-web-prod` |
| ConfigMap | `health-samurai-config-dev` | `health-samurai-config-prod` |
| StatefulSet | `postgres-dev` | `postgres-prod` |
| Service | `postgres-dev` | `postgres-prod` |
| Secret | `postgres-secret-dev` | `postgres-secret-prod` |
| PVC | `postgres-data-postgres-dev-0` | `postgres-data-postgres-prod-0` |

### Environment Differences

| Setting | Dev | Prod |
|---------|-----|------|
| Replicas | 1 | 3 |
| Poll Interval | 30s | 120s |
| DATABASE_URL | `postgres://...@postgres-dev:5432/...` | `postgres://...@postgres-prod:5432/...` |

### Deploy with Kustomize

```bash
# Preview generated manifests
kubectl kustomize k8s/overlays/dev
kubectl kustomize k8s/overlays/prod

# Apply to cluster
kubectl apply -k k8s/overlays/dev
kubectl apply -k k8s/overlays/prod

# Apply ingress (only needed once)
kubectl apply -f k8s/ingress.yaml
```

### Ingress Configuration

The ingress uses GCP's native load balancer with a pre-shared SSL certificate:

```yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: health-samurai-ingress
  annotations:
    kubernetes.io/ingress.global-static-ip-name: health-samurai-ip
    ingress.gcp.kubernetes.io/pre-shared-cert: health-samurai-ssl
spec:
  rules:
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

PostgreSQL is deployed using [ParadeDB](https://paradedb.com/) (Postgres with vector/search extensions) as a StatefulSet.

### Connection Details

| Environment | DATABASE_URL |
|-------------|--------------|
| Dev | `postgres://healthsamurai:healthsamurai@postgres-dev:5432/healthsamurai` |
| Prod | `postgres://healthsamurai:healthsamurai@postgres-prod:5432/healthsamurai` |

### Connect to Database

```bash
# Dev
kubectl exec -it -n default postgres-dev-0 -- psql -U healthsamurai

# Prod
kubectl exec -it -n default postgres-prod-0 -- psql -U healthsamurai
```

### Database Migrations

Migrations run automatically when the server starts. Manual commands if needed:

```bash
# Check status
kubectl exec -n default deployment/health-samurai-web-dev -- bun run migrate:status

# Run migrations
kubectl exec -n default deployment/health-samurai-web-dev -- bun run migrate:up

# Rollback
kubectl exec -n default deployment/health-samurai-web-dev -- bun run migrate:down
```

### Backup & Restore

```bash
# Backup (dev)
kubectl exec -n default postgres-dev-0 -- \
  pg_dump -U healthsamurai healthsamurai > backup-dev-$(date +%Y%m%d).sql

# Restore (dev)
kubectl exec -i -n default postgres-dev-0 -- \
  psql -U healthsamurai healthsamurai < backup-dev-20260131.sql
```

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

Google OAuth credentials are stored in the `health-samurai-secrets` secret:

| Secret Key | Description |
|------------|-------------|
| `GOOGLE_CLIENT_ID` | OAuth Client ID |
| `GOOGLE_CLIENT_SECRET` | OAuth Client Secret |
| `GOOGLE_REDIRECT_URI` | Callback URL for environment |
| `GOOGLE_ALLOWED_DOMAIN` | `health-samurai.io` |

**View secrets:**
```bash
kubectl get secret health-samurai-secrets -n default -o jsonpath='{.data}' | jq 'keys'
```

**Update secrets:**
```bash
kubectl delete secret health-samurai-secrets -n default
kubectl create secret generic health-samurai-secrets \
  --namespace=default \
  --from-literal=GOOGLE_CLIENT_ID=<client-id> \
  --from-literal=GOOGLE_CLIENT_SECRET=<client-secret> \
  --from-literal=GOOGLE_REDIRECT_URI=https://site-dev.apki.dev/auth/google/callback \
  --from-literal=GOOGLE_ALLOWED_DOMAIN=health-samurai.io

# Restart deployments to pick up changes
kubectl rollout restart deployment/health-samurai-web-dev deployment/health-samurai-web-prod -n default
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

## Docker Image

### Build and Push

```bash
# Configure Docker for GCR
gcloud auth configure-docker gcr.io

# Build for amd64 (required for GKE)
docker buildx build --platform linux/amd64 -t gcr.io/atomic-ehr/health-samurai-web:latest --push .
```

### Container Behavior

1. Container starts and clones the repository
2. Runs `bun install` to install dependencies
3. Builds Tailwind CSS
4. Runs database migrations
5. Starts the Bun server
6. Polls GitHub for new commits
7. If new commits detected: pulls changes, rebuilds CSS, restarts server

## Common Operations

### Connect to Cluster

```bash
gcloud container clusters get-credentials hs-cluster \
  --region=us-central1 \
  --project=atomic-ehr
```

### Check Status

```bash
# All resources
kubectl get pods,svc,deploy,statefulset -n default | grep -E "(health-samurai|postgres|NAME)"

# Pod logs
kubectl logs -n default deployment/health-samurai-web-dev --tail=50
kubectl logs -n default deployment/health-samurai-web-prod --tail=50

# Ingress status
kubectl describe ingress health-samurai-ingress -n default
```

### Force Restart

```bash
# Restart deployments (pulls latest code)
kubectl rollout restart deployment/health-samurai-web-dev deployment/health-samurai-web-prod -n default

# Restart postgres (rarely needed)
kubectl rollout restart statefulset/postgres-dev statefulset/postgres-prod -n default
```

### View Backend Health

The ingress annotation shows backend health:
```bash
kubectl get ingress health-samurai-ingress -n default -o jsonpath='{.metadata.annotations.ingress\.kubernetes\.io/backends}'
```

## DNS Configuration

DNS is managed in GCP Cloud DNS (zone: `apki-dev`).

| Record | Type | Value |
|--------|------|-------|
| `hs.apki.dev` | A | `35.186.242.241` |
| `site-prod.apki.dev` | A | `35.186.242.241` |
| `site-dev.apki.dev` | A | `35.186.242.241` |

## Troubleshooting

### Site returns 502

1. Check if deployments are healthy:
   ```bash
   kubectl get pods -n default | grep health-samurai
   ```

2. Check pod logs for errors:
   ```bash
   kubectl logs -n default deployment/health-samurai-web-dev --tail=100
   ```

3. Check ingress backend health:
   ```bash
   kubectl describe ingress health-samurai-ingress -n default | grep -A5 "Annotations"
   ```

4. Verify DATABASE_URL is set (common issue):
   ```bash
   kubectl get secret postgres-secret-dev -n default -o jsonpath='{.data.DATABASE_URL}' | base64 -d
   ```

### Database Connection Issues

1. Check postgres pod is running:
   ```bash
   kubectl get pods -n default | grep postgres
   ```

2. Test database connectivity:
   ```bash
   kubectl exec -n default postgres-dev-0 -- pg_isready -U healthsamurai
   ```

3. Check service endpoints:
   ```bash
   kubectl get endpoints -n default postgres-dev
   ```

### Migrations Failing

1. Check migration status in logs:
   ```bash
   kubectl logs -n default deployment/health-samurai-web-dev | grep -i migration
   ```

2. Manually run migrations:
   ```bash
   kubectl exec -n default deployment/health-samurai-web-dev -- bun run migrate:status
   kubectl exec -n default deployment/health-samurai-web-dev -- bun run migrate:up
   ```

### OAuth Not Working

1. Verify secrets are set:
   ```bash
   kubectl get secret health-samurai-secrets -n default -o jsonpath='{.data.GOOGLE_CLIENT_ID}' | base64 -d
   ```

2. Check redirect URI matches Google Console configuration

3. Check logs for OAuth errors:
   ```bash
   kubectl logs -n default deployment/health-samurai-web-dev | grep -i oauth
   ```

## Instant Deploy with GitHub Webhook

For instant deployments (< 2 seconds), configure a GitHub webhook:

### 1. Generate a secure secret

```bash
openssl rand -hex 32
```

### 2. Update Kubernetes secret

```bash
kubectl patch secret health-samurai-secrets -n default \
  --type='json' \
  -p='[{"op": "add", "path": "/data/webhook-secret", "value": "'$(echo -n "YOUR_SECRET" | base64)'"}]'

kubectl rollout restart deployment/health-samurai-web-dev deployment/health-samurai-web-prod -n default
```

### 3. Configure GitHub Webhook

1. Go to: `https://github.com/HealthSamurai/health-samurai-io-bun/settings/hooks`
2. Click "Add webhook"
3. Settings:
   - **Payload URL**: `https://site-dev.apki.dev/api/webhook/github`
   - **Content type**: `application/json`
   - **Secret**: Your generated secret
   - **Events**: Just the `push` event
4. Click "Add webhook"

Now pushes to GitHub will trigger instant reloads!
