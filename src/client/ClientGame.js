import ClientEngine from './ClientEngine';
import sprites from '../configs/sprites';
import ClientWorld from './ClientWorld';
import levelCfg from '../configs/world.json';
import gameObjects from './../configs/gameObjects.json'

class ClientGame {
    constructor(cfg) {
        Object.assign(this, {cfg, gameObjects, player: null});
        this.engine = this.createEngine();
        this.map = this.createWorld();
        this.initEngine();
    }

    setPlayer(player) {
        this.player = player
    }

    createEngine() {
        return new ClientEngine(document.getElementById(this.cfg.tagId));
    }

    createWorld() {
        return new ClientWorld(this, this.engine, levelCfg);
    }

    initEngine() {
        this.engine
            .loadSprites(sprites)
            .then(() => {
                this.map.init();
                this.engine.on('render', (_, time) => {
                    this.map.render(time)
                });
                this.engine.start();
                this.initKeys();
            });
    }

    initKeys() {
        const options = [
            {evt: 'ArrowLeft', pos: {x: -1, y: 0}},
            {evt: 'ArrowRight', pos: {x: 1, y: 0}},
            {evt: 'ArrowUp', pos: {x: 0, y: -1}},
            {evt: 'ArrowDown', pos: {x: 0, y: 1}},
        ]
        const handlers = options.reduce((acc, handler) => ({
            ...acc,
            [handler.evt]: (keydown) => {
                if (keydown) {
                    this.player.moveByCellCoord(handler.pos.x, handler.pos.y, (cell) => cell.findObjectsByType('grass').length
                    )
                }
            }
        }), {})
        this.engine.input.onKey(handlers)
    }

    static init(cfg) {
        if (!ClientGame.game) {
            ClientGame.game = new ClientGame(cfg);
        }
    }
}

export default ClientGame;
