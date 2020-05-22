import {MunchkinDesk} from "./munchkin-desk.js";

export class MunchkinModule {

    desk = new MunchkinDesk();
    constructor() {
    }


    getHTML() {
        const html = document.createElement('div');
        html.id = 'munchkin';
        html.getElementById('munchkin').innerHTML = this.desk.getHTML()
        return html.toString();
    }
}