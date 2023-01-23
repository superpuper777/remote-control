import { mouse, left, right, up, down } from "@nut-tree/nut-js";

let command: string, x: number;

export const mousemoveUp = (x: any) => {
    (async () => {
      await mouse.move(up(x));
    })();
  };
export const mousemoveRight = (x: any) => {
  (async () => {
    await mouse.move(right(x));
  })();
};

export const mousemoveDown = (x: any) => {
  (async () => {
    await mouse.move(down(x));
  })();
};

export const mousemoveLeft = (x: any) => {
  (async () => {
    await mouse.move(left(x));
  })();
};


export const movementCommand = (data: any) => {   
    [ command,  x ] = data.split(" ");   
    return `${command} {${x} px}`;
}


export const switchCommands = async () => {
    switch (command) {
        case "mouse_up":
            return mousemoveUp(x);
        case "mouse_down":
            return mousemoveDown(x);
        case "mouse_left":
            return mousemoveLeft(x);
        case "mouse_right":
            return mousemoveRight(x);
        default:
            break;
    }
}