import {MunchkinPlayerDesk} from "./munchkin-player-desk.js";

export class MunchkinDesk {

    game = {
        player: {
            cards: Array.from(Array(10)).map((x, i) => ({
                id: 1,
                name: 'Attack #' + (i+1),
                description: 'Set 1 damage'
            }))
        },
        opponent: {
            cards: Array.from(Array(10)).map((x, i) => ({
                id: 1,
                name: 'Attack',
                description: 'Set 1 damage'
            }))
        },
        monsterPackCount: 70,
        itemsPackCount: 70
    };

    constructor() {
    }

    getHTML() {

        const _desk = document.createElement('div');
        _desk.className = 'munchkin-desk';

        _desk.appendChild(new MunchkinPlayerDesk(this.game.opponent, true).element);
        _desk.appendChild(document.createElement('div'));
        _desk.appendChild(document.createElement('div'));
        _desk.appendChild(document.createElement('div'));
        // _desk.appendChild(new MunchkinMonsterPack().element);
        // _desk.appendChild(new MunchkinActionArea().element);
        // _desk.appendChild(new MunchkinItemsPack().element)
        _desk.appendChild(new MunchkinPlayerDesk(this.game.player).element);

        return _desk;
    }
}
