export class MunchkinBufferZone {
    #_element;

    constructor(props) {

        this.create();
    }


    create() {
        this._element = document.createElement('div');
        this._element.className = 'munchkin-desk__buffer';
        return this.element;
    }


    get element() {
        return this._element;
    }

}