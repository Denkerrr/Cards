import {_draggable} from "../../../../helpers/draggable.js";
import {request} from "../../../../helpers/request.js";

export class MunchkinBufferZone {
    #_element;

    GAME_ID = new Date().getTime();


    constructor(GAME_ID) {
        this.GAME_ID = GAME_ID;
        this.create();
    }


    create() {
        this._element = document.createElement('div');
        this._element.className = 'munchkin-desk__buffer';

        this._element.addEventListener('dragstart', (e) => e.preventDefault());
        this._element.addEventListener('dragend', (e) => e.preventDefault());
        this._element.addEventListener('dragover', (e) => e.preventDefault());
        this._element.addEventListener('drop', (e) => this.dropItem(e));

        return this.element;
    }

    dropItem(e) {
        const cardId = e.dataTransfer.getData('text');
        request(
            'POST',
            'api/game/' + this.GAME_ID + '/setTurn',
            JSON.stringify({cardId})
        );
        console.log('set cardId', cardId, this.GAME_ID);
    };

    get element() {
        return this._element;
    }

}
