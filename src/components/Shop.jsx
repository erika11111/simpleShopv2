import { useState, useEffect } from "react";
//import { API_KEY, API_URL } from "../config";
import Preloader from "./Preloader";
import GoodsList from "./GoodsList";
import Cart from "./Cart";
import CartList from "./CartList";
import Alert from "./Alert";
export default function Shop(props) {
  const API_KEY = "16ed6d09-bdcca2e8-50418255-f8818561";
  const API_URL = "https://fortniteapi.io/v1/shop?lang=en";
  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [alertName, setAlertName] = useState("");
  const addToCart = (item) => {
    const itemIndex = order.findIndex((orderItem) => orderItem.id === item.id);
    if (itemIndex < 0) {
      const newItem = {
        ...item,
        quantity: 1,
      };
      setOrder([...order, newItem]);
    } else {
      const newOrder = order.map((item, index) => {
        if (index === itemIndex) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        } else {
          return item;
        }
      });
      setOrder(newOrder);
    }
    setAlertName(item.name);
  };
  const handleRemove = (id) => {
    const newOrder = order.filter((item) => item.id !== id);
    setOrder(newOrder); //setOrder=newOrder
  };
  const handleCartVisibility = () => {
    setShowCart(!showCart);
  };
  const incQuantity = (id) => {
    const newOrder = order.map((item) => {
      if (item.id === id) {
        const newQuantity = item.quantity + 1;
        return {
          ...item,
          quantity: newQuantity,
        };
      } else {
        return item;
      }
    });
    setOrder(newOrder);
  };
  const decQuantity = (id) => {
    const newOrder = order.map((item) => {
      if (item.id === id) {
        const newQuantity = item.quantity - 1;
        return {
          ...item,
          quantity: newQuantity >= 0 ? newQuantity : 0,
        };
      } else {
        return item;
      }
    });
    setOrder(newOrder);
  };
  const handleCloseAlert = () => {
    setAlertName("");
  };
  useEffect(function getGoods() {
    fetch(API_URL, {
      headers: {
        Authorization: API_KEY,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        data.featured && setGoods(data.featured);
        setLoading(false);
      });
  }, []);
  return (
    <main className="container content">
      <Cart
        quantity={order.length}
        handleCartVisibility={handleCartVisibility}
      />
      {loading ? (
        <Preloader />
      ) : (
        <GoodsList goods={goods} addToCart={addToCart} />
      )}
      {showCart && (
        <CartList
          handleCartVisibility={handleCartVisibility}
          order={order}
          handleRemove={handleRemove}
          incQuantity={incQuantity}
          decQuantity={decQuantity}
        />
      )}
      {alertName && (
        <Alert name={alertName} handleCloseAlert={handleCloseAlert} />
      )}
    </main>
  );
}
