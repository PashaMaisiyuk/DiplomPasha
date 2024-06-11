import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchBooks } from '../services/api'; // Импорт функции для получения данных о книгах

interface Book {
    isbn13: string;
    title: string;
    subtitle: string;
    author: string;
    price: string;
    rating: string;
    image: string;
}

interface BooksState {
    books: Book[];
    loading: boolean;
    error: string | null;
}

const initialState: BooksState = {
    books: [],
    loading: false,
    error: null,
};

const booksSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {
        addBook: (state, action: PayloadAction<Book>) => {
            state.books.push(action.payload);
        },
        removeBook: (state, action: PayloadAction<string>) => {
            state.books = state.books.filter(book => book.isbn13 !== action.payload);
        },
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload;
        },
        setError: (state, action: PayloadAction<string | null>) => {
            state.error = action.payload;
        },
    },
});

export const { addBook, removeBook, setLoading, setError } = booksSlice.actions;

export const fetchAllBooks = () => async (dispatch: any) => {
    try {
        dispatch(setLoading(true));
        const books = await fetchBooks();
    }
    finally {
        dispatch(setLoading(false));
    }
};

export default booksSlice.reducer;