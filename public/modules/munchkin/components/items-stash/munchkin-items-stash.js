import {_draggable} from "../../../../helpers/draggable.js";

export class MunchkinItemsStash {
    items = [];
    #_element;
    #_stashElement;
    selfClick = true;
    update = () => {
    };

    constructor(items, update) {
        self = this;
        this.items = Array.isArray(items) ? items : [];
        this.update = update;
        this.create();
    }


    create() {
        this._element = document.createElement('div');
        this._element.className = 'munchkin__stash';
        this._element.id = 'munchkin-stash';
        this._element.addEventListener('click', () => this.selfClick = true);
        this._element.appendChild(this.createStash());
    }

    createStash() {
        this._stashElement = document.createElement('ul');
        this._stashElement.className = 'ui-scroll munchkin__stash__list';

        this.items.forEach(this.addItem(this._stashElement));
        return this._stashElement;
    }

    addItem(el) {
        return function (item, index) {
            const _item = document.createElement('li');
            _item.className = 'munchkin__stash__list__item';
            _item.id = item.config.id;
            _item.innerText = item.config.name;
            _draggable(_item, index, self.update);
            el.appendChild(_item);
        }
    }

    get element() {
        return this._element
    }

    updateStash(items) {
        this.items = Array.isArray(items) ? items : [];
        while (this._stashElement.children.length) this._stashElement.removeChild(this._stashElement.firstChild);
        items.forEach(this.addItem(this._stashElement));
    }
}
