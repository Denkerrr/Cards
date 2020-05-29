export function _draggable(el, dragIndex, cb) {

    el.setAttribute('drag-index', dragIndex);
    el.setAttribute('draggable', 'true');
    el.addEventListener('dragstart', dragStartItem, false);
    el.addEventListener('dragend', dragEndItem, false);
    el.addEventListener('dragover', dragOverItem, false);
    el.addEventListener('drop', dropItem, false);

    function dragStartItem(e) {
        globalThis.dragIndexes.start = getDragIndex(e.target);
        e.target.style.opacity = .5;
    }

    function dragEndItem(e) {
        e.target.style.opacity = "";
    }

    function dragOverItem(e) {
        e.preventDefault();
    }

    function dropItem(e) {
        e.preventDefault();
        globalThis.dragIndexes.end = getDragIndex(e.target);
        if (globalThis.dragIndexes.start !== globalThis.dragIndexes.end) {
            return cb([globalThis.dragIndexes.start, globalThis.dragIndexes.end]);
        }
    }

    function getDragIndex(target) {
        let value = target.getAttribute('drag-index');
        if (value === null && target.parentElement !== undefined) {
            value = target.parentElement.getAttribute('drag-index')
        }

        if (value === null) {
            console.error('Has no drag-index attribute', target);
        }

        return value;
    }
}