FROM node:18 AS builder
WORKDIR /app
RUN npm i -g pnpm
COPY . .
RUN pnpm install
RUN pnpm build

FROM nginx:1.22-alpine

COPY --from=builder /app/dist/* /usr/share/nginx/html
COPY --from=builder /app/nginx.conf /etc/nginx/nginx.conf
