FROM node:12.18
WORKDIR /app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install --silent && mv node_modules ../
COPY . .
RUN npm run build
ENV NODE_ENV=production
EXPOSE 8081
CMD ["npm", "run", "serve"]
