import React from 'react';
import './styles/mobile.css'
import './styles/desktop.css'
import NavMenu from './components/NavMenu.jsx'
import HamburgerMenu from './components/HamburgerMenu.jsx'

function NavBar({ logo, logoHref, links }) {

    const _props = {
        logo: logo || '',
        logoHref: logoHref || '/#',
        links: links || []
    }

    



    return (
        <>
            <NavMenu {..._props} />
            <HamburgerMenu {..._props} />
        </>

    );
}

export default NavBar;