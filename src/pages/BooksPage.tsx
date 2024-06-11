import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import BookCard from '../components/BookCard';
import { fetchBooks } from '../services/api';
import { RootState } from '../store/store';
import '../assets/styles/BooksPage.css';

const BooksPage: React.FC = () => {
    const [books, setBooks] = useState<any[]>([]);
    const searchValue = useSelector((state: RootState) => state.search.value);

    useEffect(() => {
        const loadBooks = async () => {
            const booksData = await fetchBooks();
            setBooks(booksData);
        };

        loadBooks();
    }, []);

    const filteredBooks = searchValue ? books.filter(book => book.title.toLowerCase().includes(searchValue.toLowerCase())) : books;

    return (
        <div className="books-page">
            <h2 className="books-title">New Releases Books</h2>
            <div className="book-list">
                {filteredBooks.map((book) => (
                    <BookCard
                        key={book.isbn13}
                        isbn13={book.isbn13}
                        title={book.title}
                        subtitle={book.subtitle}
                        author={book.author}
                        price={book.price}
                        rating="★★★★☆"
                        image={book.image}
                    />
                ))}
            </div>
        </div>
    );
};

export default BooksPage;