import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import BooksPage from './pages/BooksPage';
import BookDetailsPage from './pages/BookDetailsPage';
import FavoriteBooksPage from './pages/FavoriteBooksPage';
import AuthPage from './pages/AuthPage';
import ProfilePage from './pages/ProfilePage';
import CartPage from "./pages/CartPage.tsx";

const App: React.FC = () => {
    return (
        <Router>
            <div className="App">
                <Header />
                <Routes>
                    <Route path="/" element={<BooksPage />} />
                    <Route path="/book/:isbn" element={<BookDetailsPage />} />
                    <Route path="/favorites" element={<FavoriteBooksPage />} />
                    <Route path="/auth" element={<AuthPage />} />
                    <Route path="/profile" element={<ProfilePage />} />
                    <Route path="/cart" element={<CartPage />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;