import { useEffect } from "react";

export default function Alert(props) {
  const { name = "", handleCloseAlert = Function.prototype } = props;

  useEffect(() => {
    const timerId = setTimeout(handleCloseAlert, 2000);

    return () => {
      clearTimeout(timerId);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name]);

  return (
    <div id="toast-container">
      <div className="toast">{name} added to cart</div>
    </div>
  );
}
