import {
  mousemoveUp,
  mousemoveDown,
  mousemoveLeft,
  mousemoveRight,
} from "../commands";
let command: string, x: number;
export const movementCommand = (data: any) => {
  [command, x] = data.split(" ");
  return `${command} {${x} px}`;
};

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
};
