import { mouse, left, right, up, down } from "@nut-tree/nut-js";


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


