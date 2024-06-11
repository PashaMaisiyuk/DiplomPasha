import { configureStore } from '@reduxjs/toolkit';
import searchReducer from './searchSlice';
import favoriteBooksReducer from './favoriteBooksSlice';
import cartReducer from './cartSlice';
import userReducer from './userSlice';

export const store = configureStore({
    reducer: {
        search: searchReducer,
        favoriteBooks: favoriteBooksReducer,
        cart: cartReducer,
        user: userReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;