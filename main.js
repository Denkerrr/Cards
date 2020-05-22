import RoutingModule from "./routing-module.js";

export const route = new RoutingModule();
window.addEventListener("popstate", event => {
   route.loadContent(event.state.url);
});

document.getElementById('root').addEventListener('click', (e) => {
   e.preventDefault();
   route.go(e.target.closest('[route]').getAttribute('route'));
})