import Image from 'next/image';
import Link from 'next/link';
import { products } from '../../database/products';
import { getCookie } from '../../util/cookies';
import { parseJson } from '../../util/json';

export default function ProductsPage() {
  const productCommentsCookie = getCookie('fruitComments');

  const productComments = !productCommentsCookie
    ? []
    : parseJson(productCommentsCookie);

  const productWithComments = products.map((product) => {
    const matchingProductFromCookie = productComments.find(
      (productObject) => product.id === productObject.id,
    );

    return { ...product, comment: matchingProductFromCookie?.comment };
  });

  return (
    <>
      {productWithComments.map((product) => (
        <div
          key={`product-div-${product.id}`}
          data-test-id={`product-name-${product.name}`}
        >
          <Link href={`/products/${product.id}`}>
            <h1>{product.name}</h1>
          </Link>{' '}
          <Image
            href={`/products/${product.id}`}
            src={`/imagepnp/${product.name}.jpg`}
            alt={product.name}
            width={100}
            height={100}
          />
        </div>
      ))}
    </>
  );
}
