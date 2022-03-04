import React, { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./CheckoutModal.module.css";
import Modal from "../../Modal/Modal";
import DeliveryForm from "../DeliveryForm/DeliveryForm";
import { uiActions } from "../../store/ui-slice";

const CheckoutModal = (props) => {
  const dispatch = useDispatch();
  const { items, totalAmount, totalQuantity } = useSelector(
    (state) => state.cart
  );
  const showCheckout = useSelector((state) => state.ui.showCheckoutForm);

  const numberWithCommas = (x) => {
    return Number(x).toLocaleString("en-US", {
      minimumFractionDigits: 2,
    });
  };
  const checkOutHandler = () => {
    dispatch(uiActions.showCheckout());
  };
  const modalActions = (
    <div className={styles.buttonContainer}>
      <button className={styles.button} onClick={props.onClose}>
        Cancel
      </button>
      <button className={styles.button} onClick={checkOutHandler}>
        Order
      </button>
    </div>
  );
  return (
    <Fragment>
      <Modal onClose={props.onClose}>
        <div className={styles.checkoutContainer}>
          <h2>Order Summary</h2>

          {items.map((item) => (
            <div className={styles.checkoutContent}>
              <h5>{item.name}</h5>
              <div className={styles.itemPrice}>
                ₦{numberWithCommas(item.totalPrice.toFixed(2))}
              </div>
              <div className={styles.quantity}>
                x <span>{item.quantity}</span>
              </div>
            </div>
          ))}
          <div className={styles.total}>
            <div>
              {" "}
              <span>Total Quantity</span>
              {totalQuantity}
            </div>
            <div>
              {" "}
              <span>Total Amount</span> ₦
              {numberWithCommas(totalAmount.toFixed(2))}
            </div>
          </div>
          {showCheckout && (
            <DeliveryForm onClose={props.onClose} onOrder={props.onOrder} />
          )}
          {!showCheckout && modalActions}
        </div>
      </Modal>
    </Fragment>
  );
};

export default CheckoutModal;
