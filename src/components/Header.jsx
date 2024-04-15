import React from 'react';
/* import nav links data from constants */
import { headerNav } from '../constants';
const Header = () => {
    return (
        <header id="header"role="banner">
            <div className="header_inner">
                <div className="header_logo">
                    <a href="/">Portfolio<em>react</em></a>
                </div>
                <nav className="header_nav"role="navigation"aria-label="Main">
                    {/* iterate nav objects from headerNav */}
                    <ul>
                        {headerNav.map((nav,key) => (
                            <li key={key}>
                                {/* display the title along with its url*/}
                                <a href={nav.url}>{nav.title}</a>
                            </li>
                        ))}
                    </ul>
                </nav>
                <div className="header_nav_mobile"
                id="headerToggle"
                aria-controls="primary-menu"
                aria-expanded="false"
                role="button"
                tabindex="0"
                >
                    <span></span>
                </div>
            </div>
        </header>
    );
};

export default Header;