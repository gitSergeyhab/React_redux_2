const initialState = {
    menu: [],
    loading: true,
    items: []
};

const reduser = (state=initialState, action) => {
    // console.log(state)
    switch(action.type) {
        case 'MENU_LOADED': 
            return {
                ...state,
                menu: action.payload,
                loading: false
            };
        case 'MENU_REQUESTED': 
            return {
                ...state,
                menu: state.menu,
                loading: true
            };
        case 'ITEM_ADD_TO_CART': 
            const id = action.payload;
            const item = state.menu.find(someItem => someItem.id === id);
            const newItem = {...item};
            return {
                ...state,
                items: [...state.items, newItem]
            };

        case 'DEL_FROM_CART':
            const idx = action.payload;
            const index = state.items.findIndex(item => item.id === idx);
            return {
                ...state,
                items: [
                    ...state.items.slice(0, index), 
                    ...state.items.slice(index+1)
                ]
            }
        default: return state;
    }
}

export default reduser;