import Link from 'next/link';
import BadgePage from './Badge';
import styles from './ShopCart.module.scss';

export default function ShopCartPage() {
  return (
    <div className={styles.container}>
      <Link
        data-test-id="cart-link"
        href="/basket"
        style={{
          color: 'black',
          textDecoration: 'none',
          position: 'relative',
        }}
      >
        <div className={styles.shopCart}>testd</div>
        <div>
          <BadgePage />
        </div>
      </Link>
    </div>
  );
}
