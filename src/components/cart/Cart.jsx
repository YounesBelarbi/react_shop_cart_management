import { StyledTitle } from "../home/Home.styled";
import Product from "../product/Product";
import { StyledCart } from "./Cart.styled";

const Cart = () => {
    return (

        <>
            <StyledTitle>mon panier</StyledTitle>
            <StyledCart>
                <Product page="cart" />
                <Product page="cart" />
                <Product page="cart" />
                <Product page="cart" />
                <Product page="cart" />
            </StyledCart>


        </>

    )
}

export default Cart;