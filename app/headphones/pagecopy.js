import Quantity from './Quantity.js';

export const metadata = {
  title: 'Headphones',
  description: 'Headphones products',
};
export default function HeadphonesPage() {
  return (
    <main>
      <div className="product-container">
        <div className="productName">
          <div className="productImg">
            <img src="marshall.png" alt="one" width="600px" height="455px" />
          </div>
          <div className="product-info-summary">
            <h1 className="product-title">Marshall</h1>
            <p className="price-product-page-price ">
              <bdi>
                80 <span className="price-symbol">$</span>
              </bdi>
            </p>
            <div className="product-short-description">
              <p>
                Raycon earbuds are a popular choice for those seeking wireless
                audio solutions. These compact and stylish earbuds offer a
                convenient and immersive listening experience. With their sleek
                design and comfortable fit, Raycon earbuds provide a seamless
                integration into everyday life, whether you're working out,
                commuting, or simply enjoying your favorite tunes. Featuring
                advanced Bluetooth technology, impressive battery life, and
                excellent sound quality, Raycon earbuds deliver rich and dynamic
                audio while ensuring a reliable wireless connection. With their
                user-friendly controls and portable charging case, Raycon
                earbuds are designed to make your audio experience hassle-free
                and enjoyable.
              </p>
            </div>
            <div className="sticky-add-to-cart">
              <div className="cart-button">
                <Quantity />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="product-container">
        <div className="productName">
          <div className="earbudsImg">
            <img src="hyperx.webp" alt="one" width="600px" height="455px" />
          </div>
          <div className="product-info-summary">
            <h1 className="product-title">Hyperx</h1>
            <p className="price-product-page-price ">
              <bdi>
                90 <span className="price-symbol">$</span>
              </bdi>
            </p>
            <div className="product-short-description">
              <p>
                Raycon earbuds are a popular choice for those seeking wireless
                audio solutions. These compact and stylish earbuds offer a
                convenient and immersive listening experience. With their sleek
                design and comfortable fit, Raycon earbuds provide a seamless
                integration into everyday life, whether you're working out,
                commuting, or simply enjoying your favorite tunes. Featuring
                advanced Bluetooth technology, impressive battery life, and
                excellent sound quality, Raycon earbuds deliver rich and dynamic
                audio while ensuring a reliable wireless connection. With their
                user-friendly controls and portable charging case, Raycon
                earbuds are designed to make your audio experience hassle-free
                and enjoyable.
              </p>
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
