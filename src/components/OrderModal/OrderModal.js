import styles from "./OrderModal.module.css";
import Modal from "../../Modal/Modal";
import Lottie from "react-lottie";
import animationData from "../../assets/Lottie/lottie.json";

const OrderModal = (props) => {
  return (
    <Modal onClose={props.onClose}>
      <Lottie
        animationData={animationData}
        autoPlay
        loop
        className={styles.lottieSuccess}
      />
      <button className={styles.button} onClick={props.onClose}>
        Close
      </button>
    </Modal>
  );
};

export default OrderModal;
