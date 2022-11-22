FROM node:18.12.1

WORKDIR /app

COPY . /app/.


RUN npm i
RUN npm run build


CMD ["npm", "run", "start:prod"]
