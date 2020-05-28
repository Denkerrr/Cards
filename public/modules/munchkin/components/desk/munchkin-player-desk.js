import {Card} from "../../../shared/cards/card.js";
import {MunchkinItemsStash} from "../items-stash/munchkin-items-stash.js";

export const CARD_WIDTH = 150;
export const CARD_GAP = 30;

export class MunchkinPlayerDesk {
    config = {
        cards: []
    };
    isEnemy;
    #_cards = [];
    #_element;
    #_stash;
    #_stashButton;

    constructor(props, isEnemy = false) {
        this.init(props);
        this.isEnemy = isEnemy;
        this.create();
    }

    init(props) {
        Object.keys(this.config).forEach(key =>
            this.config[key] = props.hasOwnProperty(key) ? props[key] : this.config[key]);
    }

    create() {
        this._element = document.createElement('div');
        this._element.className = 'munchkin-desk__player';
        this.initializeCards();
        this._element.appendChild(this.createDesk());

        if (this.isEnemy) {
            this._element.classList.add('munchkin-desk__player--enemy');
        } else {
            this._element.appendChild(this.setItemsButton());
        }

        return this._element;
    }

    initializeCards() {
        this._cards = this.config.cards.map(x => this.addCard(x));
    }

    addCard(card) {
        return new Card({...card, disable: this.isEnemy})
    }

    createDesk() {
        const _cardsContainer = document.createElement('div');
        _cardsContainer.className = 'munchkin-desk__player__cards';
        _cardsContainer.id = this.isEnemy ? 'munchkin-desk-enemy-player-games' : 'munchkin-desk-player-games';
        for (let card of this.activeCards) _cardsContainer.appendChild(card.element);
        return _cardsContainer;
    }

    updateDesk(cards = null) {
        this._cards = cards !== null ? cards : this._cards;
        while (this._element.firstChild.children.length)
            this._element.firstChild.removeChild(this._element.firstChild.firstChild);
        for (let card of this.activeCards) this._element.firstChild.appendChild(card.element);
    }

    setItemsButton() {
        this._stashButton = document.createElement('button');
        this._stashButton.className = 'munchkin-desk__player__stash-button';
        this._stashButton.addEventListener('click', e => this.stashClickListener());
        return this._stashButton;
    }

    stashClickListener() {
        if (!this._stash || !this._stash.selfClick) {
            const _stashElement = document.getElementById('munchkin-stash');
            if (_stashElement) {
                this._stashButton.removeChild(_stashElement);
            } else {
                this._stash = new MunchkinItemsStash(this._cards, this.updateDesk.bind(this));
                this._stashButton.appendChild(this._stash.element);
            }
        }
        this._stash.selfClick = false;
    }

    get activeCards() {
        return this._cards.slice(0, this.maxCountByWidth);
    }

    get element() {
        return this._element || null;
    }

    get maxCountByWidth() {
        const _windowWidth = document.body.clientWidth;
        return Math.floor(_windowWidth / (CARD_WIDTH + CARD_GAP)) - +!this.isEnemy;
    }
}
