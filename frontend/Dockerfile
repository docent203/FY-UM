FROM node:18.16.0-alpine as builder
WORKDIR /
COPY . .
RUN npm install
RUN npm run build

