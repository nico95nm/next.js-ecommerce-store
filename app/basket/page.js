import { styles } from './page.module.scss';

export default function CheckoutPage() {
  return (
    <main>
      <div className="basketContainer">
        <h1>Checkout</h1>
      </div>
      <div>
        <br />
        <span>
          Fisrt name:
          <input data-test-id="checkout-first-name" />
          <br />
        </span>
        <span>
          Last name:
          <input data-test-id="checkout-last-name" />
          <br />
        </span>
        <span>
          Email:
          <input data-test-id="checkout-email" />
          <br />
        </span>
        <span>
          Address:
          <input data-test-id="checkout-adress" />
          <br />
        </span>
        <span>
          City:
          <input data-test-id="checkout-city" />
          <br />
        </span>
        <span>
          Postal code:
          <input data-test-id="checkout-postal-code" />
          <br />
        </span>
        <span>
          Country:
          <input data-test-id="checkout-country" />
          <br />
        </span>
        <span>
          Credit card:
          <input data-test-id="checkout-credit-card" />
          <br />
        </span>
        <span>
          Expiration date:
          <input data-test-id="checkout-expiration-date" />
          <br />
        </span>
        <span>
          Security code:
          <input data-test-id="checkout-security-code" />
        </span>
        <br />
        <button data-test-id="checkout-confirm-order"> Confirm order</button>
      </div>
    </main>
  );
}
