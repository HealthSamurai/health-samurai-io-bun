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

| Environment | URL |
|-------------|-----|
| Production | https://site-prod.apki.dev |
| Development | https://site-dev.apki.dev |
| Alias | https://hs.apki.dev |

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

### Deployment

```yaml
# k8s/deployment.yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: health-samurai-web
spec:
  replicas: 1
  selector:
    matchLabels:
      app: health-samurai-web
  template:
    spec:
      containers:
      - name: web
        image: gcr.io/atomic-ehr/health-samurai-bun:latest
        ports:
        - containerPort: 4444
        env:
        - name: GIT_REPO
          value: "https://github.com/HealthSamurai/health-samurai-io-bun.git"
        - name: GIT_BRANCH
          value: "main"
        - name: POLL_INTERVAL
          value: "60"
        - name: PORT
          value: "4444"
```

### Ingress with SSL

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
  - host: hs.apki.dev
    http:
      paths:
      - path: /
        pathType: Prefix
        backend:
          service:
            name: health-samurai-web
            port:
              number: 80
  - host: site-prod.apki.dev
    http:
      paths:
      - path: /
        pathType: Prefix
        backend:
          service:
            name: health-samurai-web
            port:
              number: 80
  - host: site-dev.apki.dev
    http:
      paths:
      - path: /
        pathType: Prefix
        backend:
          service:
            name: health-samurai-web
            port:
              number: 80
```

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
├── docker-compose.yml      # Local development
├── k8s/
│   ├── deployment.yaml     # Current deployment config
│   ├── base/               # Kustomize base
│   └── overlays/
│       ├── prod/           # Production overlay
│       └── dev/            # Development overlay
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
