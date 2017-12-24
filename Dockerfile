FROM node:carbon

RUN mkdir -p /usr/app
WORKDIR /usr/app
COPY package.json package-lock.json ./
RUN npm i
COPY . /usr/app
EXPOSE 4000
CMD ["npm", "run", "start"]
