const menuLoaded = menu => ({
    type: 'MENU_LOADED', 
    payload: menu
});

const menuRequested = () => ({
    type: 'MENU_REQUESTED'
});

const addedToCart = (id) => ({
    type: 'ITEM_ADD_TO_CART', 
    payload: id
});

const deletedFromCart = (id) => ({
    type: 'DEL_FROM_CART', 
    payload: id
});

export {
    menuLoaded,
    menuRequested,
    addedToCart,
    deletedFromCart
};