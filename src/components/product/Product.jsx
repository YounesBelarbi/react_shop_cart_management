import { useState } from 'react';

import { StyledProduct } from './Product.Styled';


const Product = ({ page, productData }) => {
    const [quantity, setQuantity] = useState('')

    const addToCart = () => {

    }

    return (
        <StyledProduct page={page} >
            <img src={productData.thumbnailUrl} alt="" />
            <p >{productData.title}</p>
            <input type="number" value={quantity} onChange={e => setQuantity(e.target.value)} />
            <button onClick={() => { addToCart() }}>{page == "home" ? "Ajouter au panier" : "Supprimer le produit"}</button>
        </StyledProduct >
    )
}

export default Product;

