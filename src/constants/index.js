import React, { useState } from 'react';

export const headerNav = [
    {
        title: 'Intro',
        url: '#intro'
    },
    {
        title: 'Skill',
        url: '#skill'
    },
    {
        title: 'Site',
        url: '#site'
    },
    {
        title: 'Portfolio',
        url: '#port'
    },
    {
        title: 'Contact',
        url: '#contact'
    }
];

export const introText = {
    title:"Portfolio",
    desc:["Owen Lee", "Portfolio", "Website"],
};

//set header toggle menu
const Header = () => {
    const[show, setShow] = useState(false);

    const toggleMenu = () => {
        setShow((prevShow) => !prevShow);
    };

    return (
        <header id="header" role="banner">
            <div className="header_inner">
                <div className="header_logo">
                    <a href="/">Portfolio<em>react</em></a>
                </div>
                <nav className={`header_nav ${show ? "show" : ""}`} role="navigation" aria-label="Main">
                    <ul>
                        {headerNav.map((nav, key) => (
                            <li key={key}>
                                <a href={nav.url}>{nav.title}</a>
                            </li>
                        ))}
                    </ul>
                </nav>
                <div className="header_nav_mobile"
                id="headerToggle"
                aria-controls="primary-menu"
                aria-expanded={show?"true":"false"}
                role="button"
                tabindex="0"
                onClick={toggleMenu}
                >
                    <span></span>
                </div>
            </div>
        </header>
    );
};

export default Header;