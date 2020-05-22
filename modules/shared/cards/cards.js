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
            this._element.appendChild(_cardClass.getElement());
        });
        console.log('---', 'Cards', this);
        return this._element;
    }

    getElement() {
        return this.create();
    }

    getHTML() {
        return this.create().outerHTML;
    }
}
