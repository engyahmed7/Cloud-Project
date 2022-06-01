# syntax=docker/dockerfile:1
FROM ubuntu


<<<<<<< HEAD
RUN mkdir /home/sampleTest \      
           cd /home/sampleTest 

WORKDIR /home/sampleTest
=======
RUN mkdir /home/Test \      
            cd /home/Test 

WORKDIR /home/Test
>>>>>>> 478d5069cae95a28b53bb794fb2a52563e3d574e
FROM node:alpine

# COPY package.json ./
# COPY package-lock.json ./
COPY . .
RUN npm i
CMD ["npm", "run", "start"]