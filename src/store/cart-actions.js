import { uiActions } from "./ui-slice";
import { cartActions } from "./cart-slice";

export const fetchCartData = () => {
  return async (dispatch) => {
    let storedCartData;
    // const fetchData = async () => {
    //   const response = await fetch(
    //     "https://react-http-99426-default-rtdb.firebaseio.com/cart.json"
    //   );

    //   if (!response.ok) {
    //     throw new Error("Could not fetch cart data!");
    //   }

    //   const data = await response.json();

    //   return data;
    // };

    try {
      const storage = localStorage.getItem("cartData");
      if (storage) storedCartData = JSON.parse(storage);
      // const cartData = await fetchData();

      dispatch(
        cartActions.replaceCart({
          items: storedCartData.items || [],
          totalQuantity: storedCartData.totalQuantity,
          totalAmount: storedCartData.totalAmount,
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Fetching cart data failed!",
        })
      );
    }
  };
};

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "Sending...",
        message: "Sending cart data!",
      })
    );

    const sendRequest = async () => {
      localStorage.setItem(
        "cartData",
        JSON.stringify({
          items: cart.items,
          totalQuantity: cart.totalQuantity,
          totalAmount: cart.totalAmount,
        })
      );
      const response = await fetch(
        "https://react-http-99426-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify({
            items: cart.items,
            totalQuantity: cart.totalQuantity,
            totalAmount: cart.totalAmount,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Sending cart data failed.");
      }
    };

    try {
      await sendRequest();

      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success!",
          message: "Sent cart data successfully!",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Sending cart data failed!",
        })
      );
    }
  };
};
