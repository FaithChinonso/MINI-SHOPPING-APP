import styles from "./OrderModal.module.css";
import OverModal from "../../Modal/OverModal";
import Lottie from "lottie-react";
import animationData from "../../assets/Lottie/order.json";

const OrderModal = (props) => {
  return (
    <OverModal onClose={props.onClose}>
      <Lottie
        animationData={animationData}
        autoPlay
        loop
        className={styles.lottieSuccess}
      />
      <button className={styles.button} onClick={props.onClose}>
        Close
      </button>
    </OverModal>
  );
};

export default OrderModal;
