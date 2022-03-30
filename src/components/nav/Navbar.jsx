import { Link } from 'react-router-dom';
import { StyledNavbar } from './Navbar.styled';

const Navbar = () => {
    return (
        <StyledNavbar>
            <Link to="/">Accueil</Link>
            <Link to="/cart">Panier</Link>
        </StyledNavbar>
    )
}

export default Navbar;