import { useContext } from "react";
import { ShopContext } from "../Context";
export default function Cart() {
  const { order, handleCartVisibility = Function.prototype } =
    useContext(ShopContext);
  const quantity = order.length;
  return (
    <div
      className="cart blue darken-4 white-text"
      onClick={handleCartVisibility}
    >
      <i className="material-icons">shopping_basket</i>
      {quantity ? <span className="cart-quantity">{quantity}</span> : null}
    </div>
  );
}
