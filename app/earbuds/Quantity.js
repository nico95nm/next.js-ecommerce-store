'use client';
import { useState } from 'react';
import styles from './Quantity.module.scss';

export default function Quantity() {
  const [quantity, setQuantity] = useState(0);
  return (
    <div className={styles.counterButton}>
      <button
        className={styles.minusButton}
        onClick={() => setQuantity(quantity - 1)}
      >
        -
      </button>
      <br />
      <span className={styles.quantity}>{quantity}</span>
      <br />
      <button
        className={styles.plusButton}
        onClick={() => setQuantity(quantity + 1)}
      >
        +
      </button>
    </div>
  );
}
