FROM node:12.18
WORKDIR /app
ENV VUE_APP_RECAPTCHA_SITE_KEY=$VUE_APP_RECAPTCHA_SITE_KEY
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 8081
CMD ["npm", "run", "production"]
