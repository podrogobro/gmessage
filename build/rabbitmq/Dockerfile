FROM rabbitmq:3.8-management-alpine
ENV RABBITMQ_DEFAULT_USER=admin
ENV RABBITMQ_DEFAULT_PASS=admin

RUN chown rabbitmq:rabbitmq /etc/rabbitmq/rabbitmq.conf /etc/rabbitmq/definitions.json
ADD ./definitions.json /etc/rabbitmq/
ADD ./rabbitmq.conf /etc/rabbitmq/