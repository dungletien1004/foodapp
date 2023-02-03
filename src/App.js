import React from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/layout/Header";
import Meals from "./components/Meals/Meals";
import CartProvider from "./store/cartProvider";

function App() {
  const [cartIsShown, setCartIsShown] = React.useState(false);

  const handleShowCart = () => {
    setCartIsShown(true);
  }
  const handleHideCart = () => {
    setCartIsShown(false);
  }
  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={handleHideCart}/>}
      <Header onShowCart={handleShowCart}/>
      <main>
        <Meals/>
      </main>
    </CartProvider>
  );
}

export default App;
