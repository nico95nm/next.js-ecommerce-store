import { notFound } from 'next/navigation';
import { getAllProducts } from '../../../database/products';
import { getCookie } from '../../../util/cookies';
import { parseJson } from '../../../util/json';

type Props = {
  params: { productId: string };
};

export type CookieCommentItem = {
  id: number;
  comment?: string;
};

export default function ProductPage(props: Props) {
  const product = getAllProducts(Number(props.params.productId));

  if (!product) {
    notFound();
  }

  const productCommentsCookie = getCookie('fruitComments');
  const productComments = !productCommentsCookie
    ? []
    : parseJson(productCommentsCookie);

  const productToUpdate = productComments?.find((productComment) => {
    return productComment.id === product.id;
  });

  return (
    <>
      <h1>
        {product.type} {product.name}
      </h1>
      {productToUpdate?.comment}
      <ProductPage productId={product.id} />
    </>
  );
}
