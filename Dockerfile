FROM node:12.18
ENV NODE_ENV=production
RUN npm install -g http-server
WORKDIR /app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install --production --silent && mv node_modules ../
COPY . .
RUN npm run build
EXPOSE 8081
CMD ["npm", "run", "serve"]
