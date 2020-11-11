//Navbar.js

import React, { useEffect } from 'react';

const Navbar = () => {
    const [scrolled, setScrolled] = React.useState(false);

    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 150) {
            setScrolled(true);
        }
        else {
            setScrolled(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
    })

    let navbarClasses = ['navbar'];
    if (scrolled) {
        navbarClasses.push('scrolled');
    }

    return (
        <header className={navbarClasses.join(' ')}>
            <div className="logo">@biottmau</div>
            <nav className="navigation">| Software Developer</nav>
        </header>
    );
};

export default Navbar;