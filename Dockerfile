# Nginx image ka use karenge
FROM nginx:alpine

# Apne code ko Nginx ke default directory mein copy karo
COPY . /usr/share/nginx/html/

# Port 80 open karo
EXPOSE 80