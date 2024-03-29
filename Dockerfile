FROM node:20 as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY ./ .
RUN npm run build

FROM nginx:stable as production-stage
RUN mkdir /app
COPY --from=build-stage /app/dist /app
COPY --from=build-stage /app/cfg /app
RUN cp /app/cfg/settings.js.example /app/cfg/settings.js
COPY nginx.conf /etc/nginx/nginx.conf