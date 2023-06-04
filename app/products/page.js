import Image from 'next/image';
import Link from 'next/link';
import { products } from '../../database/products';

export default function ProductsPage() {
  return (
    <>
      {products.map((product) => (
        <div
          key={`product-div-${product.id}`}
          data-test-id={`product-name-${product.name}`}
          className=""
        >
          <Link href={`/products/${product.id}`}>
            <h1>{product.name}</h1>
          </Link>{' '}
          <Image
            href={`/products/${product.id}`}
            src={`/image/${product.name}.jpg`}
            alt={product.name}
            width={100}
            height={100}
          />
        </div>
      ))}
    </>
  );
}
