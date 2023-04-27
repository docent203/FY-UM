FROM node:18.16.0-alpine as builder
EXPOSE 3000
WORKDIR /frontend/frontend
COPY . .
RUN npm install
RUN CI=false npm run build
#CMD ["npm", "start"]

FROM nginx:stable-alpine
RUN rm -rf /etc/nginx/conf.d/default.conf
COPY  /secretdata/default.conf /etc/nginx/conf.d/default.conf

RUN rm -rf /usr/share/nginx/html/*
COPY --from=builder /frontend/frontend/build /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]