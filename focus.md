# Focus

## How to start the dev server (background)

Use the project script (preferred):

```sh
./server.sh start -h
```

Notes:
- Hot reload is enabled with `-h`.
- Server URL: `http://localhost:4444`
- Logs: `tail -f .server.log`
- Stop safely: `./server.sh stop` (do not use `pkill bun`).

## How to generate Webflow HTML snapshots (via chro / CDP)

Prereqs:
1) Chrome headless running on port 9222
2) chro server running on port 2229

Example (macOS):

```sh
/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome \
  --headless=new --remote-debugging-port=9222 --disable-gpu about:blank

cd /Users/niquola/chromoi
bun src/index.js
```

Health check:

```sh
curl -sS localhost:2229/health
```

Snapshot script (example for `/` and `/fhir-server`):

```sh
save_snapshot() {
  local url="$1"
  local out="$2"
  curl -sS localhost:2229/cdp -d "{\"method\":\"Page.navigate\",\"params\":{\"url\":\"${url}\"}}" >/dev/null
  sleep 4
  curl -sS localhost:2229/cdp -d '{"method":"Runtime.evaluate","params":{"expression":"document.documentElement.outerHTML"}}' \
    | jq -r '.result.value // ""' \
    > "$out"
}

save_snapshot "https://health-samurai.io/" "./webflow/index.html"
save_snapshot "https://health-samurai.io/fhir-server" "./webflow/fhir-server.html"
```

## Translator analysis notes (baseline)

We compared:
- Original: `webflow/fhir-server.html`
- Local render: `http://localhost:4444/fhir-server`

Observed gaps:
- `data-*` attributes are stripped in the translator, which removes Webflow interaction hooks:
  - Missing: `data-w-id`, `data-animation`, `data-easing`, `data-delay`, `data-duration`, etc.
- Many `<script>` tags are dropped (expected by current translator); some may be required for interactive Webflow behavior.
- Inline `<svg>` elements are extracted to files, then replaced with `<img>` tags. This can break CSS targeting/animations that rely on inline SVG structure.
- Head metadata (og/twitter, referrerpolicy, integrity, async/defer) is not preserved in our Layout and does not map 1:1.

Quick stats from the comparison (fhir-server page):
- Original data-* attrs: 134
- Local data-* attrs: 29
- Original scripts: 50
- Local scripts: 2
- Original inline SVGs: 51
- Local inline SVGs: 0

Suggested translator fixes to consider in `scripts/translate-webflow-html-to-tsx.ts`:
1) Preserve `data-*` attributes instead of stripping them (keep most, possibly allowlist if needed).
2) Keep inline SVGs in the JSX output (avoid converting to `<img>`), or provide an option to preserve inline SVG.
3) Optional: include certain `<script>` tags or at least keep ones required for Webflow interactions.
4) Capture and map important head metadata to `Layout` (og, twitter, referrerpolicy, preconnect, integrity, etc.).

## Note on ad‑hoc scripts

Yes — use Bun for ad‑hoc scripts. Prefer `bun -e` or a small `scripts/*.ts` file run with `bun` over Python; for CDP JSON parsing in shell, use `jq`.
