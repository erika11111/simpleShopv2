export default function CartItem(props) {
  const {
    id,
    name,
    price,
    quantity,
    handleRemove = Function.prototype,
    incQuantity = Function.prototype,
    decQuantity = Function.prototype,
  } = props;
  return (
    <li className="collection-item">
      {name}
      <i
        className="material-icons basket-quantity"
        onClick={() => decQuantity(id)}
      >
        remove
      </i>
      x{quantity}
      <i
        className="material-icons basket-quantity"
        onClick={() => incQuantity(id)}
      >
        add
      </i>{" "}
      = {price * quantity} Eur
      <span className="secondary-content">
        <i
          className="material-icons basket-delete"
          onClick={() => handleRemove(id)}
        >
          clear
        </i>
      </span>
    </li>
  );
}
