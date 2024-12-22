#STAGE 1
FROM node:23.4.0
WORKDIR /user/src/app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run start
