import React from 'react';

function Menu({ logo, logoHref, links }) {

    return (
        <div className='swe-navbar'>
            <div className='swe-container'>
                <div className='row'>
                    <div className='col-4 col-md-2 swe-navbar-logo-container '>
                        <a href={logoHref || '/#'}>
                            {
                                logo ?
                                    <img src={logo} alt="tbc" />
                                    : <></>
                            }
                        </a>
                    </div>
                    <div className='col-8 col-md-10'>
                        <div className='swe-navbar-wrap'>
                            {links.map(item => item).reverse().map((link, i) => {
                                return (
                                    <div
                                        key={`navbar-link-${i}`}
                                        className='swe-navbar-wrap-link-box'>
                                        <a
                                            className={link.background ? 'swe-navbar-link-bg' : ''}
                                            href={link.href} >{link.label} </a>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Menu;