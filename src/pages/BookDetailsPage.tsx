import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchBookDetails } from '../services/api';
import { addToCart } from '../store/cartSlice';
import '../assets/styles/BookDetailsPage.css';

const BookDetailsPage: React.FC = () => {
    const { isbn } = useParams<{ isbn: string }>();
    const [book, setBook] = useState<any>(null);
    const dispatch = useDispatch();

    useEffect(() => {
        const loadBookDetails = async () => {
            if (isbn) {
                const bookData = await fetchBookDetails(isbn);
                setBook(bookData);
            }
        };

        loadBookDetails();
    }, [isbn]);

    if (!book) {
        return <div>Loading...</div>;
    }

    const handleAddToCart = () => {
        dispatch(addToCart({ isbn13: book.isbn13, title: book.title, price: book.price }));
    };

    return (
        <div className="book-details-page">
            <div className="book-details">
                <img src={book.image} alt={book.title} className="book-details-image" />
                <div className="book-details-info">
                    <h2 className="book-details-title">{book.title}</h2>
                    <p className="book-details-author"><strong>Author:</strong> {book.authors}</p>
                    <p className="book-details-language"><strong>Language:</strong> {book.language}</p>
                    <p className="book-details-price"><strong>Price:</strong> {book.price}</p>
                    <p className="book-details-publisher"><strong>Publisher:</strong> {book.publisher}</p>
                    <p className="book-details-rating"><strong>Rating:</strong> {book.rating}</p>
                    <p className="book-details-pages"><strong>Pages:</strong> {book.pages}</p>
                    <button onClick={handleAddToCart}>Add to Cart</button>
                </div>
            </div>
            <div className="book-details-description">
                <h3>Description</h3>
                <p>{book.desc}</p>
            </div>
        </div>
    );
};

export default BookDetailsPage;