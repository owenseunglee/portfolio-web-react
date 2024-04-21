import React from 'react';
import { footerText } from '../constants';

const Footer = () => {
    return (
        <footer id="footer"role="contentinfo">
            <div className="footer_inner">
                <div className="footer_text">
                    <span>Owen Lee</span>
                </div>
                <div className="footer_info">
                    <div className="left">
                        <div className="title">
                            <a href="/">sign up</a>
                        </div>
                        <p>Log in to comment and use the contact form</p>
                    </div>
                    <div className="right">
                        <h3>social</h3>
                        <ul>
                            {footerText.map((footer, key) => (
                                <li key={key}>
                                    <a href={footer.link}>{footer.title}</a>
                                    <em>{footer.desc}</em>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="footer_right">
                    &copy; 2024 Owen Lee<br />
                    This website is created using React
                </div>
            </div>
        </footer>
    );
};

export default Footer;