FROM owasp/modsecurity-crs:nginx

# The CRS image will render files from /etc/nginx/templates/** on boot.
COPY nginx/default.conf.template /etc/nginx/templates/conf.d/default.conf.template
