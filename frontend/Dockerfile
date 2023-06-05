FROM node:18
RUN npm i -g pnpm
WORKDIR /usr/src/app
COPY . .
RUN pnpm install
RUN pnpm build --output-path=/tmp/dist

FROM nginx:1.22-alpine
COPY --from=0 /usr/src/app/nginx.conf /etc/nginx/nginx.conf
RUN rm -rf /usr/share/nginx/html/*

COPY --from=0 /tmp/dist/* /usr/share/nginx/html
EXPOSE 80 443
ENTRYPOINT [ "nginx", "-g", "daemon off;" ]
