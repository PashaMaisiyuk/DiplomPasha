import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import BookCard from '../components/BookCard';
import '../assets/styles/FavoriteBooksPage.css';

const FavoriteBooksPage: React.FC = () => {
    const favoriteBooks = useSelector((state: RootState) => state.favoriteBooks.books);

    return (
        <div className="favorite-books-page">
            <h2>Favorite Books</h2>
            <div className="favorite-books-list">
                {favoriteBooks.length > 0 ? (
                    favoriteBooks.map((book) => (
                        <BookCard
                            key={book.isbn13}
                            isbn13={book.isbn13}
                            title={book.title}
                            subtitle={book.subtitle}
                            author={book.author}
                            price={book.price}
                            rating={book.rating}
                            image={book.image}
                        />
                    ))
                ) : (
                    <p>No favorite books added yet.</p>
                )}
            </div>
        </div>
    );
};

export default FavoriteBooksPage;