export class StartPageModule {

    cards = [
        {
            id: 1,
            name: 'Munchkin'
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

    constructor(

    ) {
    }


    getCardElements() {
        let cardsElements = '';
        this.cards.forEach(x =>
            cardsElements +=
                '<div class="cards__item" key="' + x.id + '">' + x.name + '</div>'
        );
        return cardsElements;
    }

    getHTML() {
        const page = '<div class="start-page">'
                + '<div class="cards">'
                    + this.getCardElements()
                + '</div>'
                + '</div>';
        return page.toString();
    }
}
