import Product from '../product/Product';
import { StyledHome, StyledTitle } from './Home.styled';

const Home = () => {
    return (
        <>
            <StyledTitle>Mes produits</StyledTitle>
            <StyledHome>
                <Product page="home" />
                <Product page="home" />
                <Product page="home" />
                <Product page="home" />

            </StyledHome>
        </>
    )
}

export default Home;