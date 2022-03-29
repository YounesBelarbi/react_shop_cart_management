import React from 'react'
import { StyledProduct } from '../product/Product.Styled';
import { useContext, useState } from 'react';
import CartContext from '../../context/CartContext';

const CartContent = ({ product, index }) => {
    console.log({ ...product });
    const context = useContext(CartContext);
    const [quantity, setQuantity] = useState(product.quantity)

    const deleteFromCart = (productId) => {
        const currentCartContent = [...context.cartContent];
        const newCartContent = currentCartContent.filter(item => item.productData.id !== productId);
        context.updateCartContent(newCartContent)
    }

    const setQuantityToCart = (newQuantity) => {
        const currentCartContent = [...context.cartContent];
        currentCartContent[index] = { ...product, quantity: newQuantity };
        context.updateCartContent(currentCartContent);
    }

    const handleChange = (e) => {
        setQuantity(e.target.value)
        setQuantityToCart(e.target.value)
    }


    return (
        <StyledProduct page="cart" key={product.productData.id}>
            <img src={product.productData.thumbnailUrl} alt="" />
            <p >{product.productData.title}</p>
            <input type="number" value={quantity} onChange={handleChange} />
            <button onClick={() => { deleteFromCart(product.productData.id) }}>Supprimer le produit</button>
        </StyledProduct >
    )
}

export default CartContent;