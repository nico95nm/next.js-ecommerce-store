import Image from 'next/image';
import Link from 'next/link';
import { products } from '../../database/productstest';
import styles from './page.module.scss';

export default function ProductsPage() {
  return (
    <main>
      <div className={styles.container}>
        {products.map((product) => (
          <div
            key={`product-div${product.id}`}
            data-test-id={`product-name${product.name}`}
            className={styles.container}
          >
            <Image
              key={`image-div${product.Image}`}
              href={`/products/${product.id}`}
              src={`/image/${product.name}.jpg`}
              alt={product.name}
              width={100}
              height={100}
            />
            <div className="test">
              <Link href={`/products/${product.id}`}>
                <h1 className="name-div">{product.name}</h1>
              </Link>{' '}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
