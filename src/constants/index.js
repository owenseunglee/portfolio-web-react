import React, { useState } from 'react';

export const headerNav = [
    {
        title: 'Intro',
        url: '#intro'
    },
    {
        title: 'Project',
        url: '#site'
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

export const siteText = [
    {
        text:["CatDog", "Pet", "Pharmacy"],
        title:"Pharmaceutical Database",
        code:"https://github.com/owenseunglee/CatDog-Pet-Pharmacy-Database.git",
        info: [
            "A Real World Web Database",
            "production period: One Month",
            "Used Tech: HTML, CSS, Javascript, Python Flask, MySQL"
        ],
    },
    {
        text:["Chess Game"],
        title:"A Simple Chess Game",
        code:"https://github.com/owenseunglee/ChessGame.git",
        info: [
            "A Chess Game using CLI",
            "production period: One Week",
            "Used Tech: C++"
        ],
    },
    {
        text:["Library Simulator"], 
        title:"Library Simulator",
        code:"https://github.com/owenseunglee/LibrarySimulator.git",
        info: [
            "A Library Simulator Using CLI That Records checking out, requesting books, and returning books, paying/calculating fees",
            "production period: One Week",
            "Used Tech: Python"
        ],
    },
];

export const contactText= [
    {
        link: "mailto:owenseunglee@gmail.com",
        title: "EMAIL: owenseunglee@gmail.com",
    }
]

export const footerText = [
    {
        title: "github",
        desc: "You can view detailed codes on my github.",
        link: "https://github.com/owenseunglee",
    },
    {
        title: "linkedin",
        desc: "LinkedIn profile.",
        link: "www.linkedin.com/in/owenseungkyulee",
    }
]
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