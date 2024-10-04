FROM node:14-alpine

WORKDIR /app/bankease
COPY ./bankease/package*.json /app/bankease
RUN npm install --production
COPY ./bankease .

WORKDIR /app/hiking
COPY ./hiking/package*.json /app/hiking
RUN npm install --production
COPY ./hiking .

COPY ./twitter /app/twitter

COPY start.sh /app
RUN chmod +x /app/start.sh

EXPOSE 3000 4000 5000

CMD ["sh", "/app/start.sh"]