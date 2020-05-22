import {Cards} from "../shared/cards/cards.js";

export class StartPageModule {

    cards = [
        {
            id: 1,
            name: 'Munchkin',
            imageUrl: 'https://memepedia.ru/wp-content/uploads/2018/07/150412976013508192-kopiya-768x576.jpg',
            redirectUrl: '/munchkin',
            description: 'McChicken? No! Is Munchkin!'
        },
        {
            id: 2,
            name: 'Munchkin 3x3'
        },
        {
            id: 3,
            name: 'Munchkin 4x4'
        },
        {
            id: 4,
            name: 'Munchkin Fallout'
        }
    ];

    constructor() {
    }

    getHTML() {
        const startPage = document.createElement('div');
        startPage.className = 'start-page';
        startPage.appendChild(new Cards(this.cards).getElement());
        return startPage;
    }
}
