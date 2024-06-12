import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import BookCard from '../components/BookCard';
import { fetchBooks } from '../services/api';
import { RootState } from '../store/store';
import '../assets/styles/BooksPage.css';

const BooksPage: React.FC = () => {
    const [books, setBooks] = useState<any[]>([]);
    const searchValue = useSelector((state: RootState) => state.search.value);
    const { page = '1' } = useParams<{ page?: string }>();
    const navigate = useNavigate();
    const booksPerPage = 6;
    const currentPage = parseInt(page, 10);

    useEffect(() => {
        const loadBooks = async () => {
            const booksData = await fetchBooks();
            setBooks(booksData);
        };

        loadBooks();
    }, []);

    const filteredBooks = searchValue
        ? books.filter(book => book.title.toLowerCase().includes(searchValue.toLowerCase()))
        : books;

    const totalPages = Math.ceil(filteredBooks.length / booksPerPage);
    const startIndex = (currentPage - 1) * booksPerPage;
    const endIndex = startIndex + booksPerPage;
    const paginatedBooks = filteredBooks.slice(startIndex, endIndex);

    const handlePageChange = (newPage: number) => {
        navigate(`/books/${newPage}`);
    };

    return (
        <div className="books-page">
            <h2 className="books-title">New Releases Books</h2>
            <div className="book-list">
                {paginatedBooks.map(book => (
                    <BookCard
                        key={book.isbn13}
                        isbn13={book.isbn13}
                        title={book.title}
                        subtitle={book.subtitle}
                        author={book.authors}
                        price={book.price}
                        rating={book.rating}
                        image={book.image}
                    />
                ))}
            </div>
            <div className="pagination">
                <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                >
                    Previous
                </button>
                <span>{currentPage} / {totalPages}</span>
                <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default BooksPage;