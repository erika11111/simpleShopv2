import { useEffect, useContext } from "react";
import { ShopContext } from "../Context";
import Preloader from "./Preloader";
import GoodsList from "./GoodsList";
import Cart from "./Cart";
import CartList from "./CartList";
import Alert from "./Alert";
export default function Shop() {
  const API_KEY = "16ed6d09-bdcca2e8-50418255-f8818561";
  const API_URL = "https://fortniteapi.io/v1/shop?lang=en";

  const { setGoods, loading, order, showCart, alertName } =
    useContext(ShopContext);

  useEffect(function getGoods() {
    fetch(API_URL, {
      headers: {
        Authorization: API_KEY,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setGoods(data.featured);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <main className="container content">
      <Cart quantity={order.length} />
      {loading ? <Preloader /> : <GoodsList />}
      {showCart && <CartList />}
      {alertName && <Alert />}
    </main>
  );
}
