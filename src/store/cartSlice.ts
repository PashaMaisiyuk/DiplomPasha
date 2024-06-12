import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Book {
    isbn13: string;
    title: string;
    price: string;
    image: string;
}

interface CartState {
    items: Book[];
}

const initialState: CartState = {
    items: JSON.parse(localStorage.getItem('cartItems') || '[]'),
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<Book>) => {
            state.items.push(action.payload);
            localStorage.setItem('cartItems', JSON.stringify(state.items));
        },
        removeFromCart: (state, action: PayloadAction<string>) => {
            state.items = state.items.filter(item => item.isbn13 !== action.payload);
            localStorage.setItem('cartItems', JSON.stringify(state.items));
        },
        clearCart: (state) => {
            state.items = [];
            localStorage.setItem('cartItems', '[]');
        },
    },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;