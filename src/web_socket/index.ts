import { WebSocketServer, createWebSocketStream } from "ws";
import { movementCommand } from './../controllers';

export const startWebsocket = (HTTP_PORT: number) => {
  const PORT = HTTP_PORT || 8080;
  const wss = new WebSocketServer({ port: PORT });
  wss.on("connection", (ws, req) => {
    console.log(`Client connected`);
    const duplex = createWebSocketStream(ws, { encoding: 'utf8', decodeStrings: false });
    duplex.on('data', async (data) => {
            const command = movementCommand(data.toString());
            console.log(`${command}`);
            duplex.write(`${command}`);
    });
  });

  process.on("SIGINT", () => {
    wss.close();
    console.log("WebSocketServer is stopped");
  });
};
