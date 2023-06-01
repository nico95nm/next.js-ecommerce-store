import Image from 'next/image';
import Link from 'next/link';
import { getAllProductsById } from '../../../database/products';

export const metadata = {
  title: 'Animals page',
  description: 'My favorite animals',
};

export const dynamic = 'force-dynamic';

export default async function ProductsPage() {
  const products = await getAllProductsById();

  return (
    <main>
      This are my animals
      {products.map((product) => {
        return (
          <div
            key={`animal-div-${product.id}`}
            data-test-id={`animal-type-${product.type}`}
          >
            {/*             <Link href={`/products/${product.id}`}>{product.name}</Link>
            <br /> */}
            <Image
              src={`/image/${product.name}.jpg`}
              alt={product.name}
              width={100}
              height={100}
            />
          </div>
        );
      })}
    </main>
  );
}
