FROM node:20-alpine AS build
WORKDIR /usr/src
COPY package*.json ./
RUN ["npm", "install"]
COPY . .
RUN ["npm", "run", "build"]



