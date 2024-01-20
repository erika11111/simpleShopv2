import { ShopContext } from "../Context";
import { useContext } from "react";
export default function GoodsItem(props) {
  const { id, name, description, price, image } = props;
  const { addToCart } = useContext(ShopContext);
  if (!name || !image || !description || !price) {
    return null;
  }
  return (
    <div className="card">
      <div className="card-image">
        <img className="card-image" src={image} alt={name} />{" "}
      </div>
      <div className="card-content">
        <span className="card-title">{name}</span>
        <p>{description}</p>
      </div>
      <div className="card-action">
        <button
          className="btn"
          onClick={() =>
            addToCart({
              id,
              name,
              price,
            })
          }
        >
          Add to cart
        </button>
        <span className="right">{price} Eur</span>
      </div>
    </div>
  );
}
