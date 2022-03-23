import { StyledProduct } from './Product.Styled';
import img from './images/4.jpg';


const Product = () => {
    return (
        <StyledProduct>
            <img src={img} alt="" />
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere cum illo dolores ut maxime assumenda delectus repudiandae corporis doloremque enim. Repudiandae, dolores aliquam. Assumenda, eaque.</p>
            <input type="number" />
            <button>Ajouter au panier</button>
        </StyledProduct>
    )
}

export default Product;