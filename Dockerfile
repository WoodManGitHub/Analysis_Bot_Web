FROM node:12.18
WORKDIR /app
COPY package*.json ./
RUN npm install
CMD ["npm", "run", "build"]
COPY . .
EXPOSE 8081
CMD ["npm", "run", "production"]
