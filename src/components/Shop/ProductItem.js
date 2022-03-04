import Card from "../UI/Card";
import classes from "./ProductItem.module.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";

const ProductItem = (props) => {
  const { title, price, description, id, img } = props;
  const dispatch = useDispatch();
  const addToCartHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id,
        price,
        title,
      })
    );
  };

  const numberWithCommas = (x) => {
    return Number(x).toLocaleString("en-US", {
      minimumFractionDigits: 2,
    });
  };
  return (
    <li className={classes.item}>
      <Card className={classes.productContainer}>
        <header>
          <h3>{title}</h3>
        </header>
        <img src={img} className={classes.image} />
        <p>{description}</p>
        <div className={classes.price}>
          ₦{numberWithCommas(price.toFixed(2))}
        </div>
        <div className={classes.actions}>
          <button onClick={addToCartHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};
export default ProductItem;
