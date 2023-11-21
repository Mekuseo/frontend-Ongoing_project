import Navbar from "../../component/HomePage/header/header";
import CartComponent from "../../component/cart/CartComponent";
import "./Cart.css";

const Cart = () => {
  return (
    <div>
      <div className="cart-navbarSpacing"><Navbar /></div>
      <CartComponent />
    </div>
  )
}

export default Cart