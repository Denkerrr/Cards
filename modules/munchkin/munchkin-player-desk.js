import {Card} from "../shared/cards/card.js";

export class MunchkinPlayerDesk {
    config = {
        cards: []
    };
    isEnemy;
    _element;

    constructor(props, isEnemy = false) {
        this.init(props);
        this.isEnemy = isEnemy;
        this.create();
    }


    init(props) {
        Object.keys(this.config).forEach(key =>
            this.config[key] = props.hasOwnProperty(key) ? props[key] : this.config[key])
    }
    
    create() {
        this._element = document.createElement('div');
        this._element.className = 'munchkin-desk__player';
        if (this.isEnemy) {
            this._element.classList.add('munchkin-desk__player--enemy');
        }
        if (this.config.cards.length) {
            this.config.cards.forEach(x => {
                const _card = new Card({...x, disable: this.isEnemy});
                this._element.appendChild(_card.element);
            })
        }
        return this._element;
    }

    get element() {
        return this._element || null;
    }

}
