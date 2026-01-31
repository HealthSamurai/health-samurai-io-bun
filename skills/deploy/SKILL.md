---
name: deploy
description: Deploy Health Samurai website to GKE. Use for deploying to dev/prod, checking status, viewing logs, and managing Kubernetes resources.
metadata:
  author: niquola
  version: "1.0"
compatibility: Requires kubectl configured for GKE cluster and gcloud CLI
---

# Deploy - Health Samurai Kubernetes Deployment

Deploy and manage the Health Samurai website on GKE Autopilot.

## Quick Commands

```bash
# Deploy to dev
kubectl apply -k k8s/overlays/dev

# Deploy to prod
kubectl apply -k k8s/overlays/prod

# Deploy to production (merge main → prod)
git checkout prod && git merge main && git push && git checkout main

# Check deployment status
kubectl get pods -n health-samurai-dev
kubectl get pods -n health-samurai-prod

# View logs
kubectl logs -n health-samurai-dev -l app=health-samurai-web -f
kubectl logs -n health-samurai-prod -l app=health-samurai-web -f

# Restart deployment (trigger new rollout)
kubectl rollout restart deployment/dev-health-samurai-web -n health-samurai-dev
kubectl rollout restart deployment/prod-health-samurai-web -n health-samurai-prod
```

## Environments

| Environment | URL | Namespace | Branch | Replicas |
|-------------|-----|-----------|--------|----------|
| Development | https://site-dev.apki.dev | health-samurai-dev | main | 1 |
| Production | https://site-prod.apki.dev | health-samurai-prod | main | 3 |

## Deployment Methods

### 1. Instant Deploy via GitHub Webhook (Automatic)

Push to GitHub triggers instant deployment:
- Webhook endpoint: `/api/webhook/github`
- Server pulls changes and restarts in ~2 seconds
- Secret stored in K8s: `kubectl get secret health-samurai-secrets`

### 2. Fallback Polling (Automatic)

If webhook fails, containers poll for changes:
- Dev: every 30 seconds
- Prod: every 120 seconds

### 3. Manual Kubernetes Deploy

```bash
# Preview generated manifests
kubectl kustomize k8s/overlays/dev
kubectl kustomize k8s/overlays/prod

# Apply changes
kubectl apply -k k8s/overlays/dev
kubectl apply -k k8s/overlays/prod

# Delete deployment
kubectl delete -k k8s/overlays/dev
kubectl delete -k k8s/overlays/prod
```

## Kubernetes Directory Structure

```
k8s/
├── base/                    # Shared resources
│   ├── kustomization.yaml
│   ├── deployment.yaml      # 1 replica, health probes, resource limits
│   ├── service.yaml         # ClusterIP on port 80 → 4444
│   └── configmap.yaml       # GIT_REPO, GIT_BRANCH, POLL_INTERVAL, PORT
└── overlays/
    ├── dev/                 # Development environment
    │   ├── kustomization.yaml
    │   └── ingress.yaml     # TLS ingress for site-dev.apki.dev
    └── prod/                # Production environment
        ├── kustomization.yaml
        └── ingress.yaml     # TLS ingress for site-prod.apki.dev
```

## Container Image

Update image in `k8s/overlays/prod/kustomization.yaml`:

```yaml
images:
  - name: health-samurai-web
    newName: gcr.io/atomic-ehr/health-samurai-web
    newTag: latest
```

### Build and Push Image

```bash
# Authenticate to GCR
gcloud auth configure-docker gcr.io

# Build and push
docker build -t gcr.io/atomic-ehr/health-samurai-web:latest .
docker push gcr.io/atomic-ehr/health-samurai-web:latest
```

## Docker Entrypoint

The `docker-entrypoint.sh` script handles:
1. Clone/pull the git repository
2. Install dependencies (`bun install`)
3. Build Tailwind CSS (`bun run css:build`)
4. Start the server
5. Poll for git changes and restart on updates

## Database (PostgreSQL)

PostgreSQL deployed as StatefulSet with persistent storage:

| Environment | Service | DATABASE_URL |
|-------------|---------|--------------|
| Dev | `dev-postgres:5432` | `postgres://healthsamurai:healthsamurai@dev-postgres:5432/healthsamurai` |
| Prod | `prod-postgres:5432` | `postgres://healthsamurai:healthsamurai@prod-postgres:5432/healthsamurai` |

### Database Commands

```bash
# Connect to database
kubectl exec -it -n health-samurai-dev dev-postgres-0 -- psql -U healthsamurai
kubectl exec -it -n health-samurai-prod prod-postgres-0 -- psql -U healthsamurai

# Check migration status
kubectl exec -n health-samurai-dev deployment/dev-health-samurai-web -- bun run migrate:status
kubectl exec -n health-samurai-prod deployment/prod-health-samurai-web -- bun run migrate:status

# Run migrations manually (usually automatic on startup)
kubectl exec -n health-samurai-dev deployment/dev-health-samurai-web -- bun run migrate:up
```

## Secrets

OAuth and other credentials stored in `health-samurai-secrets`:

```bash
# View secret keys
kubectl get secret health-samurai-secrets -n health-samurai-dev -o jsonpath='{.data}' | jq 'keys'

# View specific secret value (base64 decoded)
kubectl get secret health-samurai-secrets -n health-samurai-dev -o jsonpath='{.data.GOOGLE_CLIENT_SECRET}' | base64 -d
```

Required secrets:
- `GOOGLE_CLIENT_ID`
- `GOOGLE_CLIENT_SECRET`
- `WEBHOOK_SECRET`
- `ZULIP_BOT_EMAIL`
- `ZULIP_API_KEY`

## Troubleshooting

### Check Pod Status

```bash
# List pods
kubectl get pods -n health-samurai-dev -o wide

# Describe pod (events, conditions)
kubectl describe pod -n health-samurai-dev -l app=health-samurai-web

# Check resource usage
kubectl top pods -n health-samurai-dev
```

### View Logs

```bash
# Follow logs
kubectl logs -n health-samurai-dev -l app=health-samurai-web -f

# Previous container logs (after crash)
kubectl logs -n health-samurai-dev -l app=health-samurai-web --previous

# All containers in pod
kubectl logs -n health-samurai-dev <pod-name> --all-containers
```

### Debug Running Container

```bash
# Exec into container
kubectl exec -it -n health-samurai-dev deployment/dev-health-samurai-web -- sh

# Run command
kubectl exec -n health-samurai-dev deployment/dev-health-samurai-web -- bun run routes
```

### Rollback

```bash
# View rollout history
kubectl rollout history deployment/dev-health-samurai-web -n health-samurai-dev

# Rollback to previous version
kubectl rollout undo deployment/dev-health-samurai-web -n health-samurai-dev

# Rollback to specific revision
kubectl rollout undo deployment/dev-health-samurai-web -n health-samurai-dev --to-revision=2
```

### Force Restart

```bash
# Restart all pods
kubectl rollout restart deployment/dev-health-samurai-web -n health-samurai-dev

# Delete specific pod (will be recreated)
kubectl delete pod -n health-samurai-dev <pod-name>
```

## Instructions

When user asks to deploy:

1. **To dev** - Changes auto-deploy on push to `main`. Or manually: `kubectl apply -k k8s/overlays/dev`
2. **To prod** - Run: `git checkout prod && git merge main && git push && git checkout main`
3. **Check status** - `kubectl get pods -n health-samurai-<env>`
4. **View logs** - `kubectl logs -n health-samurai-<env> -l app=health-samurai-web -f`
5. **Restart** - `kubectl rollout restart deployment/<env>-health-samurai-web -n health-samurai-<env>`

Common issues:
- **CrashLoopBackOff** - Check logs for startup errors
- **ImagePullBackOff** - Check image name/tag and GCR permissions
- **Pending** - Check resource requests vs cluster capacity
