import {MunchkinDesk} from "./components/desk/munchkin-desk.js";

export class MunchkinModule {

    desk = new MunchkinDesk();
    constructor() {}


    getHTML() {
        const html = document.createElement('div');
        html.id = 'munchkin';
        html.appendChild(this.desk.getHTML());
        return html;
    }
}
