FROM node:12

RUN mkdir /app

WORKDIR /app

COPY package*.json /app/

RUN npm install

COPY . /app

ENV NODE_ENV QA
ENV PORT 3000

CMD ["npm", "start"]