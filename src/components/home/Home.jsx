import Product from '../product/Product';
import { StyledHome, StyledTitle } from './Home.styled';

const Home = () => {
    return (
        <>
            <StyledTitle>Mes produits</StyledTitle>
            <StyledHome>
                <Product />
                <Product />
                <Product />
                <Product />
            </StyledHome>
        </>
    )
}

export default Home;