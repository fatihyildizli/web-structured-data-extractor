FROM node:8.15.0-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --only=production

COPY . .

EXPOSE 5001

ENTRYPOINT [ "node" ]

CMD [ "server.js" ]