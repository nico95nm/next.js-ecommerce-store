'use client';

import { useState } from 'react';
import styles from './CookieBanner.module.scss';

export function CookieBanner() {
  const router = userRouter();
  const [areCookiesTermsAccepted, setAreCookiesTermsAccepted] = useState(true);

  return (
    <div
      className={`${styles.CookieBanner} ${
        areCookiesTermsAccepted ? styles.CookieBanner : styles.CookieBanner
      }`}
    >
      <div>This is the cookie Police. Please accept terms and conditions</div>
      <button
        data-test-id="product-add-to-cart"
        formAction={async () => {
          router.refresh();
          await areCookiesTermsAccepted(props.productId, quantity);
        }}
      >
        Add To Card
      </button>
    </div>
  );
}
