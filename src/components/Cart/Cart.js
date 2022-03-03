import { useSelector } from "react-redux";
import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const { items, totalAmount } = useSelector((state) => state.cart);
  const numberWithCommas = (x) => {
    return Number(x).toLocaleString("en-US", {
      minimumFractionDigits: 2,
    });
  };
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {items.map((item) => (
          <CartItem
            key={item.id}
            item={{
              id: item.id,
              title: item.name,
              quantity: item.quantity,
              total: item.totalPrice,
              price: item.price,
            }}
          />
        ))}
      </ul>
      <div className={classes.total}>
        <span>Total Amount: </span>
        <span> ₦{numberWithCommas(totalAmount.toFixed(2))}</span>
      </div>
      <div className={classes.actions}>
        {items.length > 0 && (
          <button className={classes.button}>Checkout</button>
        )}
      </div>
    </Card>
  );
};

export default Cart;