import { useContext, useState } from 'react';

import CartContext from '../../context/CartContext';
import { StyledProduct } from './Product.Styled';


const Product = ({ page, productData }) => {
    const context = useContext(CartContext);
    const [quantity, setQuantity] = useState('')

    const addToCart = (productData) => {
        const currentCartContent = [...context.cartContent];
        const checkIfProductInCart = product => product.productData.id === productData.id;

        if (!currentCartContent.some(checkIfProductInCart) && quantity > 0) {
            context.updateCartContent(currentCart => [...currentCart, { productData, quantity }]);
        }
    }

    return (
        <StyledProduct page={page} >
            <img src={productData.thumbnailUrl} alt="" />
            <p >{productData.title}</p>
            <input min="0" type="number" value={quantity} onChange={e => setQuantity(e.target.value)} />
            <button onClick={() => { addToCart(productData) }}>{page == "home" ? "Ajouter au panier" : "Supprimer le produit"}</button>
        </StyledProduct >
    )
}

export default Product;

