import styles from "./DeliveryForm.module.css";
const DeliveryForm = (props) => {
  const error = false;
  return (
    <form>
      <div className={styles.inputGroup}>
        <label htmlFor="email">Email Address</label>
        <input type="email" id="email" />
        {error && <p>{error.message}</p>}
      </div>
      <div className={styles.inputGroup}>
        <label htmlFor="name"> Full Name</label>
        <input type="text" id="name" />
        {error && <p>{error.message}</p>}
      </div>
      <div className={styles.inputGroup}>
        <label htmlFor="number">Phone Number</label>
        <input type="number" id="number" />
        {error && <p>{error.message}</p>}
      </div>
      <div className={styles.inputGroup}>
        <label htmlFor="address">Address</label>
        <input type="text" id="address" />
        {error && <p>{error.message}</p>}
      </div>
      <div className={styles.inputGroup}>
        <label htmlFor="state">State</label>
        <input type="text" id="state" />
        {error && <p>{error.message}</p>}
      </div>
      <div className={styles.formGroup}>
        <h4>Choose your preferred Delivery Option</h4>
        <div>
          <input type="radio" id="home" name="delivery Option" />
          <label htmlFor="home">Home Delivery</label>
        </div>
        <div>
          <input type="radio" id="pickup" name="delivery Option" />
          <label htmlFor="pickup">Pickup</label>
        </div>
      </div>
      <div className={styles.formGroup}>
        <h4>Choose your preferred Payment Option</h4>
        <div>
          <input type="radio" id="onDelivery" name="payment Option" />
          <label htmlFor="onDelivery">Pay on Delivery</label>
        </div>
        <div>
          <input type="radio" id="payNow" name="payment Option" />
          <label htmlFor="payNow">Pay Now via Bank Transfer</label>
        </div>
      </div>
      <div>
        <h4>Bank Transfer Details</h4>
        <ul>
          <li>Account Name: ShopFay Limited</li>
          <li>Account Number : 0255643657</li>
          <li>Bank: GTB</li>
        </ul>
      </div>

      <div className={styles.formPayment}>
        <h4>Upload Bank Teller or Payment Reciept</h4>
        <input type="file" accept="image/*" />
        <label htmlFor="Teller">Upload</label>
      </div>
      <div className={styles.buttonGroup}>
        <button type="button" onClick={props.onClose}>
          Cancel
        </button>
        <button onClick={props.onOrder}>Confirm</button>
      </div>
    </form>
  );
};
export default DeliveryForm;
