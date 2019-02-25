FROM node:latest

RUN mkdir -p /tony-kong
WORKDIR /tony-kong

COPY package.json .
COPY . .

EXPOSE 8044

RUN npm install

CMD ["npm", "start"]
