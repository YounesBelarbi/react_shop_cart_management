import { Routes, Route } from 'react-router-dom';
import { useState } from "react";

import CartContext from '../../context/CartContext';
import Container from '../Layout/container/Container';
import Home from '../home/Home';
import Cart from '../cart/Cart';
import { GlobalStyle } from '../../styles/GlobalStyle';


function App() {

  const [cartContent, setCartContent] = useState('');
  const contextValue = {
    cartContent: cartContent,
    updateCartContent: setCartContent
  }

  return (
    <>
      <CartContext.Provider value={contextValue}>
        <Container>
          <GlobalStyle />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Container>
      </CartContext.Provider>
    </>
  );
}

export default App;
