import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import '../assets/styles/Footer.css';

const Footer: React.FC = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const templateParams = {
            to_email: email,
            from_name: 'BOOKSTORE',
            message: 'Вы подписались на нашу новостную рассылку. Мы будем держать вас в курсе о новых IT книгах.',
        };

        emailjs.send('subscribe_service', 'template_fuax9b4', templateParams, '_wlkVdM8Owacwb_DW')
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                setMessage('Email отправлен успешно!');
            }, (error) => {
                console.log('FAILED...', error);
                setMessage('Не удалось отправить email.');
            });
    };

    return (
        <div className="footer-container">
            <div className="newsletter-container">
                <div className="subscribe-header">
                    <span className="subscribe-text">Subscribe to Newsletter</span>
                </div>
                <p className="subscribe-description">Be the first to know about new IT books, upcoming releases, exclusive offers and more.</p>
                <form onSubmit={handleSubmit} className="newsletter-form">
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Your email"
                        required
                    />
                    <button type="submit">Subscribe</button>
                </form>
                {message && <p className="message">{message}</p>}
            </div>
        </div>
    );
};

export default Footer;