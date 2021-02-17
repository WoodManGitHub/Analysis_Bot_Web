FROM node:12.18 as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY ./ .
RUN cp config.json.example config.json
RUN npm run build
RUN cp config.json dist/

FROM nginx as production-stage
RUN mkdir /app
COPY --from=build-stage /app/dist /app
COPY nginx.conf /etc/nginx/nginx.conf