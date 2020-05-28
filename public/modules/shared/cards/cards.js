import {Card} from "./card.js";
import {request} from "../../../helpers/request.js";

export class Cards {
    values = [];
    updateFn = () => {};
    _cards = [];
    _element;

    constructor(props, updateFn) {
        this.values = props || [];
        this.updateFn = updateFn;
        this.create();
    }

    create() {
        this._element = document.createElement('div');
        this._element.id = 'games-container';
        this._element.className = 'cards';
        this.values.forEach(x => this.addCard(x));
        return this._element;
    }

    addCard(config) {
        const _cardClass = new Card({...config, _parent: this});
        this._cards = [...this._cards, _cardClass];
        this._element.appendChild(_cardClass.element);
    }

    removeCard(id) {
        request(
            'DELETE',
            `api/cards/remove/${id}`,
        ).then(response => {
            const _cardIndex = this._cards.findIndex(x => x.config.id === id);
            if (_cardIndex >= 0) {
                this._element.removeChild(this._cards[_cardIndex].element);
                this._cards.filter((x, i) => i !== _cardIndex);
            }
        });

    }

    get element() {
        return this._element || null;
    }

    get elementHTML() {
        return this._element.outerHTML || null;
    }
}
