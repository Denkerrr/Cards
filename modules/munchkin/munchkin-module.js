import {MunchkinDesk} from "./munchkin-desk.js";
import {route} from "../../main.js";

export class MunchkinModule {

    desk = new MunchkinDesk();
    constructor() {
        route.go('/munchkin');
    }


    getHTML() {
        const html = document.createElement('div');
        html.id = 'munchkin';
        html.getElementById('munchkin').innerHTML = this.desk.getHTML();
        return html.toString();
    }
}
