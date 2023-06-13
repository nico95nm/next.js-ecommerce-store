'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { createOrUpdateQuantity } from './actions';
import styles from './Quantity.module.scss';

export default function QuantityCounter(props) {
  const [quantity, setQuantity] = useState(1);
  const router = useRouter();

  const minusButton = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const plusButton = () => {
    setQuantity(quantity + 1);
  };

  return (
    <form className={styles.quantity}>
      <div className={styles.quantityCounter}>
        <input
          className={styles.quantityValue}
          value={quantity}
          type="number"
          min="1"
          data-test-id="product-quantity"
          onChange={(e) => setQuantity(parseInt(e.target.value))}
        />
      </div>

      <button
        className={styles.btn24}
        data-test-id="product-add-to-cart"
        formAction={async () => {
          router.refresh();
          await createOrUpdateQuantity(props.productId, quantity);
        }}
      >
        Add To Card
      </button>
    </form>
  );
}
