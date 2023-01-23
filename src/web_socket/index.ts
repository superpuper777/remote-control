import { WebSocketServer, createWebSocketStream } from "ws";
import { mouse } from "@nut-tree/nut-js";

export const startWebsocket = (HTTP_PORT: number) => {
  const PORT = HTTP_PORT || 8080;
  const wss = new WebSocketServer({ port: PORT });
  wss.on("connection", (ws, req) => {
    console.log(`Client connected`);
  });

  process.on("SIGINT", () => {
    wss.close();
    console.log("WebSocketServer is stopped");
  });
};
