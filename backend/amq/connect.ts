import amqplib from "amqplib";
import { QUEUE } from "./QUEUE";

export const connect = async () => {
  amqplib.connect("amqp://admin:admin@rabbitmq", (err: any, conn: any) => {
    console.log("Connection result");
    if (err) {
      throw err;
    } else {
      console.log("amq connected");
    }

    conn.consume(QUEUE.CREATE_EVENT, (msg: any) => {
      console.log("Create event here");
    });
  });
};
