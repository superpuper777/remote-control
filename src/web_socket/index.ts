import { WebSocketServer } from 'ws';

export const startWebsocket = (HTTP_PORT: number) => {
        const PORT = HTTP_PORT || 8080;
        console.log('WebSocketServer is running on port', PORT); 
};


