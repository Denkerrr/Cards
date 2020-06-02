export function _draggable(el, dragIndex, cb, func) {

    func = {dragEndItem, dragStartItem, dragOverItem, dropItem, ...func};

    el.setAttribute('drag-index', dragIndex);
    el.setAttribute('draggable', 'true');
    el.addEventListener('dragstart', (e) => func.dragStartItem(e), false);
    el.addEventListener('dragend', (e) => func.dragEndItem(e), false);
    el.addEventListener('dragover', (e) => func.dragOverItem(e), false);
    el.addEventListener('drop', (e) => func.dropItem(e), false);

    function dragStartItem(e) {
        if (e.target.hasAttribute('key')) {
            globalThis.dragIndexes.start = getDragIndex(e.target);
            e.dataTransfer.setData('text', e.target.getAttribute('key'));
            e.target.style.opacity = .5;
        }
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
