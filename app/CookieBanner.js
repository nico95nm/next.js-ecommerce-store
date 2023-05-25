'use client';
import { useState } from 'react';
import styles from './CookieBanner.module.scss';

export default function Cookie() {
  return (
    <div className={styles.CookieBanner}>
      Cookies help us display personalized product recommendations and ensure
      you have great shopping experience
      <button>Accept</button>
    </div>
  );
}
