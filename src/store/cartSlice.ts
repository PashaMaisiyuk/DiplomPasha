import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Book {
    isbn13: string;
    title: string;
    price: string;
}

interface CartState {
    items: Book[];
}

const initialState: CartState = {
    items: [],
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<Book>) => {
            state.items.push(action.payload);
        },
        removeFromCart: (state, action: PayloadAction<string>) => {
            state.items = state.items.filter(item => item.isbn13 !== action.payload);
        },
        clearCart: (state) => {
            state.items = [];
        },
    },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;