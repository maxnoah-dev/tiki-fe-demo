FROM node:20

WORKDIR /tiki-fe-demo

COPY package.json .

RUN yarn config set network-timeout 3000000

RUN yarn install

COPY . .

RUN yarn build

EXPOSE 3000

CMD ["yarn", "start"]

# docker build -t img-tiki-fe-demo
# docker run -p 3000:3000 img-tiki-fe-demo