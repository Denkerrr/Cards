export class Card {
    config = {
        id: 0,
        name: '',
        description: '',
        imageUrl: '',
        redirectUrl: '',
        disable: true
    };
    _element;

    constructor(props) {
        this.init(props);
        this.create();
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

    setActionEventListener() {

        this._element.addEventListener('click', (e) => {
            console.log('---', `click on card ${this.config.name}`);
        });

        this._element.addEventListener('keydown', (e) => {
            if (e.code === 'Enter' || e.code === 'NumpadEnter') {
                console.log('---', `entered on card ${this.config.name}`);
            }
        })
    }

    create() {
        this._element = document.createElement('div');
        this._element.className = 'cards__item';

        this._element.setAttribute('key', this.config.id);
        this._element.tabIndex = 0;

        if (this.config.disable) {
           this._element.setAttribute('disable', '');
        }

        this._element.appendChild(this.setImageElement());
        this._element.appendChild(this.setNameElement());
        this._element.appendChild(this.setDescriptionElement());

        if (this.config.redirectUrl) {
            this._element.classList.add('cards__item--redirect');
            this._element.setAttribute('route', this.config.redirectUrl);
        }

        this.setActionEventListener();

        return this._element;
    }

    get element() {
        return this._element || null;
    }

    get elementHTML() {
        return this._element.outerHTML || null;
    }

}
