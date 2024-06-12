import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Book {
    isbn13: string;
    title: string;
    subtitle: string;
    author: string;
    price: string;
    rating: string;
    image: string;
}

interface FavoriteBooksState {
    books: Book[];
}

const initialState: FavoriteBooksState = {
    books: JSON.parse(localStorage.getItem('favoriteBooks') || '[]'),
};

const favoriteBooksSlice = createSlice({
    name: 'favoriteBooks',
    initialState,
    reducers: {
        addFavorite: (state, action: PayloadAction<Book>) => {
            const existingBook = state.books.find(book => book.isbn13 === action.payload.isbn13);
            if (!existingBook) {
                state.books.push(action.payload);
                localStorage.setItem('favoriteBooks', JSON.stringify(state.books));
            }
        },
        removeFavorite: (state, action: PayloadAction<string>) => {
            state.books = state.books.filter(book => book.isbn13 !== action.payload);
            localStorage.setItem('favoriteBooks', JSON.stringify(state.books));
        },
    },
});

export const { addFavorite, removeFavorite } = favoriteBooksSlice.actions;
export default favoriteBooksSlice.reducer;