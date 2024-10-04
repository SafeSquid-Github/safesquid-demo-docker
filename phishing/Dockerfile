FROM python:3.10-alpine

COPY ./infoman /app/infoman

WORKDIR /app/iciciibank
COPY ./iciciibank/requirements.txt /app/iciciibank
RUN pip install -r requirements.txt
COPY ./iciciibank .

COPY start.sh /app
RUN chmod +x /app/start.sh

EXPOSE 4000 5000

CMD ["sh", "/app/start.sh"]