import { httpServer } from "./src/http_server";
import { mouse } from "@nut-tree/nut-js";
import { startWebsocket } from "./src/web_socket";

const HTTP_PORT = 8181;

console.log(`Start static http server on the ${HTTP_PORT} port!`);
httpServer.listen(HTTP_PORT);
startWebsocket(HTTP_PORT);