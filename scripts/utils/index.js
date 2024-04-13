function getElementByRef(ref) {
    const element = document.querySelector(`[ref=${ref}]`);
    return element;
}


export {
    getElementByRef,
}