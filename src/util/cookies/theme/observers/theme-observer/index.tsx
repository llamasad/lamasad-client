function themeObserver(callback: MutationCallback) {
    var observer = new MutationObserver(callback);
    observer.observe(document.body, { attributes: true, attributeFilter: ['theme-data'] });
    return observer;
}
export default themeObserver;
