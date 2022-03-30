import axios from "axios"
import { useState, useEffect } from "react";

import Product from '../product/Product';
import { StyledHome, StyledTitle } from './Home.styled';


const Home = () => {
    const [productList, setProductList] = useState("");

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/photos?albumId=1')
            .then((response) => {
                setProductList(response.data);
            })
    }, []);

    return (
        <>
            <StyledTitle>Mes produits</StyledTitle>
            <StyledHome>
                {productList && productList.map(product => {
                    return (
                        <Product page="home" productData={product} key={product.id} />
                    )
                })}
            </StyledHome>
        </>
    )
}

export default Home;