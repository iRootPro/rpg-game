import './index.scss';
import ClientGame from './client/ClientGame';

window.addEventListener('load', () => {
  ClientGame.init({ tagId: 'game' });
});
// import RootWalker from './assets/Male-3-Walk.png';
// import terrainAtlas from './assets/terrain.png'
// import worldCfg from './configs/world.json'
// import sprites from './configs/sprites'
//
// const canvas = document.getElementById('game');
// const ctx = canvas.getContext('2d');
// const {width, height} = ctx.canvas;
// const spriteW = 48;
// const spriteH = 48;
// const shots = 3;
// const step = 10;
// let cycle = 0;
// let pY = height / 2 - spriteH / 2;
// let pX = width / 2 - spriteW / 2;
// let pressedKey = null;
// let direction = 0;
//
//
// const keyDownHandler = (e) => {
//     if (e.key === 'Down' || e.key === 'ArrowDown') {
//         pressedKey = 'Down';
//     } else if (e.key === 'Up' || e.key === 'ArrowUp') {
//         pressedKey = 'Up';
//     } else if (e.key === 'Right' || e.key === 'ArrowRight') {
//         pressedKey = 'Right';
//     } else if (e.key === 'Left' || e.key === 'ArrowLeft') {
//         pressedKey = 'Left';
//     }
// };
//
// const keyUpHandler = (e) => {
//     if (e.key === 'Down'
//         || e.key === 'ArrowDown'
//         || e.key === 'Up'
//         || e.key === 'ArrowUp'
//         || e.key === 'Right'
//         || e.key === 'ArrowRight'
//         || e.key === 'Left'
//         || e.key === 'ArrowLeft'
//     ) {
//         pressedKey = null;
//     }
// };
//
// document.addEventListener('keydown', keyDownHandler);
// document.addEventListener('keyup', keyUpHandler);
//
// const terrain = document.createElement('img')
// terrain.src = terrainAtlas
// terrain.addEventListener('load', () => {
//     const {map} = worldCfg
//     map.forEach((cfgRow, y) => {
//         cfgRow.forEach((cfgCell, x) => {
//             const [sX, sY, sW, sH] = sprites.terrain[cfgCell[0]].frames[0]
//             ctx.drawImage(terrain, sX, sY, sW, sH, x * spriteW, y * spriteW, spriteW, spriteH)
//         })
//     })
// })
//
// const walk = (timestamp) => {
//     switch (pressedKey) {
//         case 'Down': {
//             pY += step;
//             cycle = (cycle + 1) % shots;
//             direction = 0;
//             break;
//         }
//         case 'Up': {
//             pY -= step;
//             cycle = (cycle + 1) % shots;
//             direction = spriteW * 3;
//             break;
//         }
//         case 'Right': {
//             pX += step;
//             cycle = (cycle + 1) % shots;
//             direction = spriteW * 2;
//             break;
//         }
//         case 'Left': {
//             pX -= step;
//             cycle = (cycle + 1) % shots;
//             direction = spriteW;
//             break;
//         }
//     }
//     ctx.clearRect(0, 0, width, height);
//     ctx.drawImage(img, cycle * spriteW, direction, spriteW, spriteH, pX, pY, spriteW, spriteH);
//     window.requestAnimationFrame(walk)
// }
//
//
// const img = document.createElement('img');
// img.src = RootWalker;
// img.addEventListener('load', () => {
//     window.requestAnimationFrame(walk)
// });
