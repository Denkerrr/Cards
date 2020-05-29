import RoutingModule from "./routing-module.js";

globalThis.dragIndexes = globalThis.dragIndexes ? globalThis.dragIndexes : {start: -1,end: -1};

export const route = new RoutingModule();
window.addEventListener("popstate", event => {
   route.loadContentByUrl(event.state.url);
});

document.getElementById('root').addEventListener('click', (e) => {
   e.preventDefault();
   const routeTrigger = e.target.closest('[route]');
   if (routeTrigger) {
      route.go(routeTrigger.getAttribute('route'));
   }
})