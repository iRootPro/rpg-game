class ClientWorld {
  constructor(game, engine, levelConfig) {
    Object.assign(this, {
      game,
      engine,
      levelConfig,
      height: levelConfig.map.length,
      width: levelConfig.map[0].width,
    });
  }

  init() {
    const { map } = this.levelConfig;
    map.forEach((cfgRow, y) => {
      cfgRow.forEach((cfgCell, x) => {
        this.engine.renderSpriteFrame({
          sprite: ['terrain', cfgCell[0]],
          frame: 0,
          x: x * 30,
          y: y * 30,
          w: 30,
          h: 30,
        });
      });
    });
  }
}

export default ClientWorld;
