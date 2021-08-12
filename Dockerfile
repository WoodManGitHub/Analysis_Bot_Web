FROM node:14-buster-slim as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY ./ .
RUN cp cfg/settings.js.example cfg/settings.js
RUN npm run build

FROM nginx as production-stage
RUN apt update
RUN apt -y upgrade
RUN mkdir /app
COPY --from=build-stage /app/dist /app
COPY nginx.conf /etc/nginx/nginx.conf
