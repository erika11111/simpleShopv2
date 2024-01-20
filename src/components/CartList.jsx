import { useContext } from "react";
import { ShopContext } from "../Context";
import CartItem from "./CartItem";
export default function CartList() {
  const { order = [], handleCartVisibility = Function.prototype } =
    useContext(ShopContext);
  const totalPrice = order.reduce((sum, el) => {
    return sum + el.price * el.quantity;
  }, 0);
  return (
    <ul className="collection basket-list">
      <li className="collection-item active">Cart</li>
      {order.length ? (
        order.map((item) => <CartItem key={item.id} {...item} />)
      ) : (
        <li className="collection-item">Cart is empty</li>
      )}
      <li className="collection-item active">Total: {totalPrice} Eur</li>
      <li className="collection-item ">
        <button className=" btn btn-small">Checkout</button>
      </li>
      <i className="material-icons basket-close" onClick={handleCartVisibility}>
        close
      </i>
    </ul>
  );
}
