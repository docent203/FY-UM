FROM node:18.16.0-alpine as builder
EXPOSE 3000
WORKDIR /frontend/frontend
COPY . .
RUN npm install
RUN npm start
