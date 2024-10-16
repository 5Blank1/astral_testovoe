import React from 'react';
import '../styles/Footer.css';
import {FooterProps} from "../types"

const Footer: React.FC<FooterProps> = ({ contacts }) => {
    return (
        <footer>
            <p>Контакты: {contacts.email} | {contacts.phone}</p>
        </footer>
    );
};

export default Footer;
