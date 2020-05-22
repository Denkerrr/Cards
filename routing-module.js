import {MunchkinModule} from "./modules/munchkin/munchkin-module.js";
import {StartPageModule} from "./modules/start-page/start-page-module.js";

const routes = [
    {url: '/', module: StartPageModule, default: true},
    {url: '/munchkin', module: MunchkinModule},
];

const MODULE_CONTAINER_ID = 'root';
 class RoutingModule {

    constructor() {
        this.go(location.pathname)
    }

    go(url) {
        const item = this._getRouteItemByUrl(url);
        if (item) {
            const module = new item.module();
            window.history.pushState({module, url: item.url}, module.name, window.location.origin + item.url);
            this.loadContentByModule(module);
        }
    }

    loadContentByUrl(url) {
        const item = this._getRouteItemByUrl(url);
        const module = new item.module();
        document.getElementById(MODULE_CONTAINER_ID).innerHTML = '';
        document.getElementById(MODULE_CONTAINER_ID).appendChild(module.getHTML());
    }

    loadContentByModule(module) {
        document.getElementById(MODULE_CONTAINER_ID).innerHTML = '';
        document.getElementById(MODULE_CONTAINER_ID).appendChild(module.getHTML());
    }

     _getRouteItemByUrl(url) {
        return routes.find(x => x.url.replace('/', '') === url.replace('/', '')) ||
               routes.find(x => x.default);
    }
}

export default RoutingModule;
