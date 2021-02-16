FROM node:12.18
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 8081
CMD ["npm", "run", "build"]
CMD ["npm", "run", "production"]
