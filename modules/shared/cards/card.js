export class Card {
    config = {
        id: 0,
        name: '',
        description: '',
        imageUrl: '',
        redirectUrl: ''
    };
    _element;

    constructor(props) {
        this.init(props);
    }

    init(props) {
        Object.keys(this.config).forEach(key =>
            this.config[key] = props.hasOwnProperty(key) ? props[key] : this.config[key])
    }

    setImageElement() {
        const _img = document.createElement('img');
        _img.className = 'cards__item__image';
        _img.src = this.config.imageUrl;
        _img.alt = 'Карта ' + this.config.name + ' ид: ' + this.config.id;
        return _img;
    }

    setNameElement() {
        const _p = document.createElement('p');
        _p.className = 'cards__item__name';
        _p.innerText = this.config.name;
        return _p;
    }

    setDescriptionElement() {
        const _pre = document.createElement('pre');
        _pre.className = 'cards__item__description';
        _pre.innerText = this.config.description;
        return _pre;
    }

    setEventListenerClick() {
        this._element.addEventListener('click', (e) => {
            console.log('---', `click on card ${this.config.name}`);
            location.href(this.config.redirectUrl)
        })
    }

    create() {
        this._element = document.createElement('div');
        this._element.className = 'cards__item';
        this._element.setAttribute('key', this.config.id);
        this._element.appendChild(this.setImageElement());
        this._element.appendChild(this.setNameElement());
        this._element.appendChild(this.setDescriptionElement());

        if (this.config.redirectUrl) {
            this._element.classList.add('cards__item--redirect');
            this.setEventListenerClick();
        }

        return this._element;
    }

    get element() {
        return this.create();
    }

    get elementHTML() {
        return this.getElement().outerHTML;
    }

}
