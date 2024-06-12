import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../store/store';
import { setSearch } from '../store/searchSlice';
import { useNavigate, Link } from 'react-router-dom';
import SearchIcon from '../assets/images/Search.svg';
import ShoppingBagIcon from '../assets/images/shopping-bag 1.png';
import UserIcon from '../assets/images/user.png';
import VectorIcon from '../assets/images/Vector.png';
import '../assets/styles/Header.css';

const Header: React.FC = () => {
    const dispatch: AppDispatch = useDispatch();
    const searchValue = useSelector((state: RootState) => state.search.value);
    const isAuthenticated = useSelector((state: RootState) => state.user.isAuthenticated);
    const username = useSelector((state: RootState) => state.user.username);
    const navigate = useNavigate();

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        dispatch(setSearch(e.target.value));
    };

    const handleFavoriteClick = () => {
        navigate('/favorites');
    };

    const handleCartClick = () => {
        navigate('/cart');
    };

    const handleUserClick = () => {
        if (isAuthenticated) {
            navigate('/profile');
        } else {
            navigate('/auth');
        }
    };

    return (
        <header className="header">
            <Link to="/" className="header-logo">Bookstore</Link> {/* Добавлен класс "header-logo" */}
            <div className="header-search-container">
                <input
                    type="text"
                    placeholder="Search"
                    value={searchValue}
                    onChange={handleSearchChange}
                    className="header-search"
                />
                <img src={SearchIcon} alt="Search" className="search-icon" />
            </div>
            <div className="header-icons">
                <img src={ShoppingBagIcon} alt="Shopping Bag" className="header-icon" onClick={handleCartClick} />
                <img src={UserIcon} alt="User" className="header-icon" onClick={handleUserClick} />
                <img src={VectorIcon} alt="Favorites" className="header-icon" onClick={handleFavoriteClick} />
                {isAuthenticated && (
                    <div className="user-info">
                        <span>{username}</span>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;