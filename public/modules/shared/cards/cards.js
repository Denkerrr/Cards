import {Card} from "./card.js";

export class Cards {
    values = [];
    _cards = [];
    _element;

    constructor(props) {
        this.values = props;
    }

    create() {
        this._element = document.createElement('div');
        this._element.className = 'cards';
        this.values.forEach(x => {
            const _cardClass = new Card(x);
            this._cards = [...this._cards, _cardClass];
            this._element.appendChild(_cardClass.element);
        });
        console.log('---', 'Cards', this);
        return this._element;
    }

    get element() {
        return this.create();
    }

    get elementHTML() {
        return this.element.outerHTML;
    }
}
