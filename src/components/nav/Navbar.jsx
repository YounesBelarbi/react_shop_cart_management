import { Link } from 'react-router-dom';
import { StyledNavbar } from './Navbar.styled';
import { useContext, useState } from 'react';


import CartContext from '../../context/CartContext';


const Navbar = () => {
    const context = useContext(CartContext);

    const itemNumber = context.cartContent.length;
    console.log(itemNumber);
    return (
        <StyledNavbar>
            <Link to="/">Accueil</Link>
            <Link to="/cart">Panier</Link>
            <span>{itemNumber}</span>

        </StyledNavbar>
    )
}

export default Navbar;


