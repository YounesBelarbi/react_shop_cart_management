import Container from '../Layout/container/Container';
import Home from '../home/Home';
import { Routes, Route } from 'react-router-dom';
import Cart from '../cart/Cart';
import { GlobalStyle } from '../../styles/GlobalStyle';


function App() {
  return (
    <>
      <Container>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />

        </Routes>
        {/* <Home /> */}
      </Container>
    </>
  );
}

export default App;
