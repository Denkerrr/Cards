import {MunchkinModule} from "./modules/munchkin/munchkin-module.js";

const routes = [
    {url: 'munchkin', module: MunchkinModule},
]
const MODULE_CONTAINER_ID = 'root';
export class RoutingModule {

    go(url) {
        const item = this._getRouteItemByUrl(url);
        if (item) {
            location.href += `/${item.url}`;
            document.getElementById(MODULE_CONTAINER_ID).innerHTML = new item.module().getHTML();
        }
    }

     _getRouteItemByUrl(url) {
        return routes.find(x => x.url === url);
    }
}