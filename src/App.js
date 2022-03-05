import { useDispatch, useSelector } from "react-redux";
import { useEffect, Fragment } from "react";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import CheckoutModal from "./components/CheckoutModal/CheckoutModal";
import { uiActions } from "./store/ui-slice";
import { sendCartData, fetchCartData } from "./store/cart-actions.js";
import Notification from "./components/Notification/Notification";
import OrderModal from "./components/OrderModal/OrderModal";
import WelcomePage from "./components/WelcomePage/WelcomePage";

let isInitial = true;

function App() {
  const dispatch = useDispatch();
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  const showModal = useSelector((state) => state.ui.showModal);
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.ui.notification);
  const showOrderModal = useSelector((state) => state.ui.showOrderModal);
  const shopIsVisible = useSelector((state) => state.ui.shopIsVisible);
  const aboutIsVisible = useSelector((state) => state.ui.aboutIsVisible);

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
  const closeOrderModalHandler = () => {
    dispatch(uiActions.showOrderModal());
  };
  const orderHandler = () => {
    dispatch(uiActions.showOrderModal());
    dispatch(uiActions.showCheckOutModal());
  };
  const shopLoaderHandler = () => {
    dispatch(uiActions.showShop());
  };
  const aboutLoaderHandler = () => {
    dispatch(uiActions.showAbout());
  };
  return (
    <Fragment>
      {/* {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )} */}
      {showOrderModal && <OrderModal onClose={closeOrderModalHandler} />}
      {showModal && (
        <CheckoutModal onClose={closeModalHandler} onOrder={orderHandler} />
      )}

      {shopIsVisible ? (
        <Layout>
          {showCart && <Cart />}
          {!showCart && <Products onClose={shopLoaderHandler} />}
        </Layout>
      ) : (
        <WelcomePage
          onShopOpen={shopLoaderHandler}
          onAboutOpen={aboutLoaderHandler}
        />
      )}
    </Fragment>
  );
}

export default App;
