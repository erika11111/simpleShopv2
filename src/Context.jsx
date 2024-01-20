import { createContext, useReducer } from "react";
import { reducer } from "./Reducer";
export const ShopContext = createContext();

const initialState = {
  goods: [],
  loading: true,
  order: [],
  showCart: false,
  alertName: "",
};
// eslint-disable-next-line react/prop-types
export const ContextProvider = ({ children }) => {
  const [value, dispatch] = useReducer(reducer, initialState);
  //add item to cart
  value.addToCart = (item) => {
    dispatch({ type: "ADD_TO_CART", payload: item });
  };
  //remove items from cart
  value.handleRemove = (id) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: { id: id } });
  };
  //increase item quantity
  value.incQuantity = (id) => {
    dispatch({ type: "INCREMENT_QUANTITY", payload: { id: id } });
  };
  //decrease item quantity
  value.decQuantity = (id) => {
    dispatch({ type: "DECREMENT_QUANTITY", payload: { id: id } });
  };
  //show/hide cart
  value.handleCartVisibility = () => {
    dispatch({ type: "TOGGLE_CART_VISIBILITY" });
  };
  //close alert
  value.closeAlert = () => {
    dispatch({ type: "CLOSE_ALERT" });
  };
  value.setGoods = (data) => {
    dispatch({ type: "SET_GOODS", payload: data });
  };
  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};
