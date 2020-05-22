import RoutingModule from "./routing-module.js";

export const route = new RoutingModule();
window.addEventListener("popstate", event => {
   route.loadContent(event.state.url);
});