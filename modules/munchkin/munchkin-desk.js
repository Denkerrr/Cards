import {MunchkinPlayerDesk} from "./munchkin-player-desk";

export class MunchkinDesk {
    constructor() {
    }

    getHTML() {

        const _desk = document.createElement('div');
        _desk.className = 'munchkin-desk';

        _desk.appendChild(new MunchkinPlayerDesk().element);
        // _desk.appendChild(new MunchkinMonsterPack().element);
        // _desk.appendChild(new MunchkinActionArea().element);
        // _desk.appendChild(new MunchkinItemsPack().element)
        _desk.appendChild(new MunchkinPlayerDesk().element);

        return _desk;
    }
}
