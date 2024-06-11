import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from '../store/favoriteBooksSlice';
import { RootState } from '../store/store';
import '../assets/styles/BookCard.css';
import vectorIcon from '../assets/images/Vector.png';

interface BookCardProps {
    isbn13: string;
    title: string;
    subtitle: string;
    author: string;
    price: string;
    rating: string;
    image: string;
}

const BookCard: React.FC<BookCardProps> = ({ isbn13, title, subtitle, author, price, rating, image }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const favoriteBooks = useSelector((state: RootState) => state.favoriteBooks.books);
    const isFavorite = favoriteBooks.some(book => book.isbn13 === isbn13);

    const handleCardClick = () => {
        navigate(`/book/${isbn13}`);
    };

    const handleFavoriteClick = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
        if (isFavorite) {
            dispatch(removeFavorite(isbn13));
        } else {
            dispatch(addFavorite({ isbn13, title, subtitle, author, price, rating, image }));
        }
    };

    return (
        <div className="book-card" onClick={handleCardClick}>
            <img src={image} alt={title} />
            <div className="book-card-title">{title}</div>
            <div className="book-card-subtitle">{subtitle}</div>
            <div className="book-card-author">{author}</div>
            <div className="book-card-price">{price}</div>
            <div className="book-card-rating">{rating}</div>
            <div
                className={`favorite-icon ${isFavorite ? 'active' : ''}`}
                onClick={handleFavoriteClick}
            >
                <img src={vectorIcon} alt="Favorite" />
            </div>
        </div>
    );
};

export default BookCard;