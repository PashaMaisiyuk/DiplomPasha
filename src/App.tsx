import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import BooksPage from './pages/BooksPage';
import BookDetailsPage from './pages/BookDetailsPage';
import ProfilePage from './pages/ProfilePage';
import CartPage from './pages/CartPage';
import FavoriteBooksPage from './pages/FavoriteBooksPage';
import './App.css';
import Footer from "./components/Footer.tsx";

const App: React.FC = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<BooksPage />} />
                <Route path="/books/:page" element={<BooksPage />} />
                <Route path="/book/:isbn" element={<BookDetailsPage />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/favorites" element={<FavoriteBooksPage />} />
            </Routes>
            <Footer />
        </Router>
    );
};

export default App;