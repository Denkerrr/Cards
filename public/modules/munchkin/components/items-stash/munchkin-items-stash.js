export class MunchkinItemsStash {
    items = [];
    #_element;
    #_stashElement;
    dragIndexes = {
        start: -1,
        end: -1
    };
    selfClick = true;
    updateDesk = () => {
    };

    constructor(props, updateDesk) {
        self = this;
        this.items = Array.isArray(props) ? props : [];
        this.updateDesk = updateDesk;
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
            _item.setAttribute('drag-index', index);
            _item.setAttribute('draggable', 'true');
            self.setItemListeners(_item);
            el.appendChild(_item);
        }
    }

    setItemListeners(listItem) {
        listItem.addEventListener('dragstart', self.dragStartItem, false);
        listItem.addEventListener('dragend', self.dragEndItem, false);
        listItem.addEventListener('dragover', self.dragOverItem, false);
        listItem.addEventListener('drop', self.dropItem, false);
    }

    dragStartItem(e) {
        self.dragIndexes.start = e.target.getAttribute('drag-index');
        e.target.style.opacity = .5;
    }

    dragEndItem(e) {
        e.target.style.opacity = "";
    }

    dragOverItem(e) {
        e.preventDefault();
    }

    dropItem(e) {
        e.preventDefault();
        self.dragIndexes.end = e.target.getAttribute('drag-index');
        if (self.dragIndexes.start !== self.dragIndexes) {
            self.update(Object.values(self.dragIndexes));
        }
    }

    update([start, end]) {
        [self.items[start], self.items[end]] = [self.items[end], self.items[start]];
        this.updateStash(self.items);
        this.updateDesk(self.items);
    }

    get element() {
        return this._element
    }

    updateStash(items) {
        while (this._stashElement.children.length) this._stashElement.removeChild(this._stashElement.firstChild);
        items.forEach(this.addItem(this._stashElement));
    }
}
