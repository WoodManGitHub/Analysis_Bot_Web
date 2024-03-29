FROM node:12.18 as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY ./ .
RUN cp cfg/settings.js.example cfg/settings.js
RUN npm run build

FROM nginx:stable as production-stage
RUN mkdir /app
COPY --from=build-stage /app/dist /app
COPY nginx.conf /etc/nginx/nginx.conf