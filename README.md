# Example-Project — Nginx + ModSecurity (OWASP CRS) in Docker

This repo demonstrates a **WAF reverse proxy** using the official OWASP **modsecurity-crs** container in front of a tiny Node.js app.

## Architecture
```
client -> [waf: owasp/modsecurity-crs:nginx] -> [web-server: Node.js demo]
```

- WAF listens on **localhost:8080** and proxies to the app on **web-server:3000** (internal network).
- CRS runs with **BLOCKING_PARANOIA=2** and will block common payloads like SQL injection or XSS.

## Quickstart
```bash
docker compose up --build -d

curl -i http://localhost:8080/healthz
curl -i 'http://localhost:8080/search?q=apple'
# Try some attack strings (expect 403):
curl -i "http://localhost:8080/search?q=' OR 1=1 --"
curl -i "http://localhost:8080/search?q=<script>alert(1)</script>"
```

## Customization
- Edit **waf-nginx-crs/nginx/default.conf.template** to tweak Nginx behavior.
- Add CRS tuning files under `/etc/modsecurity.d/owasp-crs/rules/` (see Dockerfile comments).

## Clean up
```bash
docker compose down -v
```
