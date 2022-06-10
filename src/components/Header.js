import React from 'react';
import '../styles/main.css'
import img1 from '../logos/buy-svgrepo-com.svg'

class Header extends React.Component{
    render() {
    return (
        <div>
            <nav className="top-menu">
                <ul className="menu-main">
                    <li><a href="/">Home</a></li>
                    <li><a href="/collection">Collections</a></li>
                    <li><a href="src/components/Header">Shop</a></li>
                    <li><a href="/Gallery">Gallery</a></li>
                    <li><a href="/Cart"><img src={img1}></img></a></li>
                </ul>
            </nav>
        </div>
    );
}
}
export default Header;