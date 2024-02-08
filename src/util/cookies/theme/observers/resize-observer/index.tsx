type ResizeObserverCallback = (entries: ResizeObserverEntry[], observer: ResizeObserver) => void;

function resizeObserver(callback: ResizeObserverCallback, element: Element) {
    var resizeObserver = new ResizeObserver(callback);
    resizeObserver.observe(element);
    return resizeObserver;
}
export default resizeObserver;
