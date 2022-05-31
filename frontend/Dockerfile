# syntax=docker/dockerfile:1
FROM ubuntu


RUN mkdir /home/Test \      
            cd /home/Test 

WORKDIR /home/Test
FROM node:alpine

# COPY package.json ./
# COPY package-lock.json ./
COPY . .
RUN npm i
CMD ["npm", "run", "start"]