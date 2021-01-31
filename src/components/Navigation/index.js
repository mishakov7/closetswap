import React from 'react';
import { Link } from 'react-router-dom';

// Routes to other pages
import * as Routes from '../../constants/routes';

// Other imports
import Logo from '../../assets/icons/nav-logo.svg';
import Cart from '../../assets/icons/nav-cart-icon.svg';

const ItemStyles = {
    display: "inline-block",
    listStyleType: "none",
    fontFamily: "RobotoMed",
    fontSize: "0.95em",
    textTransform: "uppercase",
    letterSpacing: "2px",
    textDecoration: "none",
    margin: "0 20px 0 10px"
}

const Navigation = () => ( 
    <nav>
        <a href="/"><img id="erpark-logo" src={Logo} height="30" width="200"/></a>
        <ul>
            <li><Link style={ItemStyles} to={Routes.HomePath}>Home</Link></li>
            <li><Link style={ItemStyles} to={Routes.AboutPath}>About</Link></li>
            <li><Link style={ItemStyles} to={Routes.PricingPath}>Pricing</Link></li>
            <li><Link style={ItemStyles} to={Routes.CartPath}><img src={Cart} height="20px"/></Link></li>
        </ul>
    </nav>
);

export default Navigation;