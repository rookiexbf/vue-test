FROM node
WORKDIR /app
COPY ./ .
RUN npm install
RUN npm run build

FROM nginx
COPY --from=0 /app/dist /usr/share/nginx/html
COPY --from=0 /app/nginx.conf /etc/nginx/conf.d/default.conf