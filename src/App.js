import { useDispatch, useSelector } from "react-redux";
import { useEffect, Fragment } from "react";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import CheckoutModal from "./components/CheckoutModal/CheckoutModal";
import { uiActions } from "./store/ui-slice";
import { sendCartData, fetchCartData } from "./store/cart-actions.js";
import Notification from "./components/Notification/Notification";
import OrderModal from "../src/components/OrderModal/OrderModal";
let isInitial = true;

function App() {
  const dispatch = useDispatch();
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  const showModal = useSelector((state) => state.ui.showModal);
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.ui.notification);
  const showOrderModal = useSelector((state) => state.ui.showOrderModal);

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }

    if (cart.changed) {
      dispatch(sendCartData(cart));
    }
  }, [cart.items]);

  const closeModalHandler = () => {
    dispatch(uiActions.showCheckOutModal());
  };
  const orderHandler = () => {
    dispatch(uiActions.showCheckOutModal());
    dispatch(uiActions.showOrderModal());
  };
  const closeOrderModalHandler = () => {
    dispatch(uiActions.showOrderModal());
  };
  return (
    <Fragment>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      {showModal && (
        <CheckoutModal onClose={closeModalHandler} onOrder={orderHandler} />
      )}
      {showOrderModal && <OrderModal onClose={closeOrderModalHandler} />}

      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
