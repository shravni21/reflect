import React from 'react';
import { FaGithub, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__social">
                <a href="https://github.com/shravni21" className="footer__link">
                    <FaGithub className="footer__icon" />
                </a>
                <a href="https://instagram.com/shravni_wakde" className="footer__link">
                    <FaInstagram className="footer__icon" />
                </a>
            </div>
        </footer>
    );
};

export default Footer;
