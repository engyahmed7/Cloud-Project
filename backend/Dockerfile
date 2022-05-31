# syntax=docker/dockerfile:1

FROM node:alpine

WORKDIR /usr/app
COPY . /usr/app
RUN npm install 

EXPOSE 3001
CMD [ "node", "server.js" ]