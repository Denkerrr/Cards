import {MunchkinPlayerDesk} from "./munchkin-player-desk.js";
import {MunchkinBufferZone} from "./munchkin-buffer-zone.js";
import {request} from "../../../../helpers/request.js";

//TODO remove after getting munchkin id
const MUNCHKIN_ID = '1wJeQpduUeLNP7cMi7hZ';

export class MunchkinDesk {

    game = {
        player: {
            cards: Array.from(Array(10)).map((x, i) => ({
                id: 1,
                name: 'Attack #' + (i + 1),
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

    _element = document.getElementById('div');
    #_opponentDesk;
    #_playerDesk;
    #_bufferZone;

    constructor() {
    }

    getHtml() {
        this._element = document.createElement('div');
        this.element.className = 'munchkin-desk';

        this.addElements();
        return this.element;
    }

    get element() {
        return this._element;
    }

    addElements() {
        Promise.all([
            request('GET', 'api/games/' + MUNCHKIN_ID + '/deck'),
            request('POST', 'api/game/create')
        ])
            .then(([deck, GAME_ID]) => {
                debugger;
                this.game.opponent.cards = this.game.player.cards = deck.cards;

                this._opponentDesk = new MunchkinPlayerDesk(this.game.opponent, true);
                this._playerDesk = new MunchkinPlayerDesk(this.game.opponent);
                this._bufferZone = new MunchkinBufferZone(GAME_ID);

                this.element.appendChild(this._opponentDesk.element);
                this.element.appendChild(document.createElement('div'));
                this.element.appendChild(this._bufferZone.element);
                this.element.appendChild(document.createElement('div'));
                this.element.appendChild(this._playerDesk.element);
            })
    }
}
