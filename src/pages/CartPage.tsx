import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/store';
import { removeFromCart, clearCart } from '../store/cartSlice';
import '../assets/styles/CartPage.css';

const CartPage: React.FC = () => {
    const cartItems = useSelector((state: RootState) => state.cart.items);
    const dispatch = useDispatch();

    const handleRemoveFromCart = (isbn13: string) => {
        dispatch(removeFromCart(isbn13));
    };

    const handleClearCart = () => {
        dispatch(clearCart());
    };

    const totalPrice = cartItems.reduce((sum, item) => sum + parseFloat(item.price.replace('$', '')), 0);

    return (
        <div className="cart-page">
            <h2>Shopping Cart</h2>
            {cartItems.length > 0 ? (
                <div>
                    <ul>
                        {cartItems.map((item) => (
                            <li key={item.isbn13}>
                                <div>{item.title} - {item.price}</div>
                                <button onClick={() => handleRemoveFromCart(item.isbn13)}>Remove</button>
                            </li>
                        ))}
                    </ul>
                    <div>Total Price: ${totalPrice.toFixed(2)}</div>
                    <button onClick={handleClearCart}>Clear Cart</button>
                </div>
            ) : (
                <p>Your cart is empty.</p>
            )}
        </div>
    );
};

export default CartPage;