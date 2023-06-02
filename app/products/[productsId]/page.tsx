import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getProductById } from '../../../database/products';
import { getCookie } from '../../../util/cookies';
import { parseJson } from '../../../util/json';
import Quantity from './Quantity';

export const dynamic = 'force-dynamic';

type Props = {
  params: { productsId: string };
};

export type CookieCommentItem = {
  id: number;
  comment?: string;
};

export default function ProductPage(props: Props) {
  const product = getProductById(Number(props.params.productsId));

  if (!product) {
    notFound();
  }
  return (
    <main>
      <div className="product-container">
        <div className="productName">
          <div className="earbudsImg">
            <Image
              data-test-id="product-image"
              className="three"
              alt={product.name}
              width={500}
              height={500}
              src={`/image/${product.name}.jpg`}
            />
          </div>
          <div className="product-info-summary">
            <h1 className="product-title"> {product.name}</h1>
            <p className="price-product-page-price ">
              <bdi>
                {product.price} <span className="price-symbol">$</span>
              </bdi>
            </p>
            <div className="product-short-description">
              <p>{product.description}</p>
            </div>
            <div className="sticky-add-to-cart">
              <div className="cart-button">
                <Quantity />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
