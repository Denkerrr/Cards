import {Cards} from "../shared/cards/cards.js";
import {Card} from "../shared/cards/card.js";
import * as service from './start-page.service.js'

export class StartPageModule {

    cards = [];
    element;
    cardsConstructor;

    constructor() {
    }

    getHTML() {
        this.element = document.createElement('div');
        this.element.className = 'start-page';
        this.element.appendChild(this.input);
        this.element.appendChild(this.button);
        this.getCards();
        return this.element;
    }

    getCards() {
        service.getCards()
            .then(cards => {
                this.cards = cards;
                this.cardsConstructor = new Cards(this.cards, () => this.updateCards());
                this.cardsConstructor.updateFn();
            })
    }

    updateCards() {
        const _cardsContainer = document.getElementById('cards-container');
        if (_cardsContainer) {
            this.element.removeChild(_cardsContainer);
        }
        this.element.appendChild(this.cardsConstructor.element);
    }

    get input() {
        const i = document.createElement('input');
        i.id = 'create-input';
        i.style.width = '100px';
        i.style.height = '50px';
        i.placeholder = 'Название карточки';
        return i;
    }

    get button() {
        const b = document.createElement('button');
        b.innerText = 'CLICK FOR CREATE';
        b.style.height = '50px';
        b.addEventListener('click', () =>
            service.createCard({name: document.getElementById('create-input').value})
                .then(card => {
                    this.cards.push(card);
                    this.cardsConstructor.addCard(card);
                })
        );
        return b;
    }
}
