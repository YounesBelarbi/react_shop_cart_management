import { StyledTitle } from "../home/Home.styled";
import { StyledCart } from "./Cart.styled";
import { useContext } from 'react';
import CartContext from '../../context/CartContext';
import CartContent from './CartContent';


const Cart = () => {

    const context = useContext(CartContext);

    return (
        <>
            <StyledTitle>mon panier</StyledTitle>
            <StyledCart>
                {context.cartContent && context.cartContent.map(product => {
                    return (
                        <CartContent product={product} />
                    )
                })}
            </StyledCart>
        </>
    )
}

export default Cart;