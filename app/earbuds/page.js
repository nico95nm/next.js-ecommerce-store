import Quantity from './Quantity.js';

export default function earpasPage() {
  return (
    <main>
      <div className="product-container">
        <div className="productRaycon">
          <div className="earbudsImg">
            <img src="raycon.jpg" alt="one" width="600px" height="455px" />
          </div>
          <div className="product-info-summary">
            <h1 className="product-title">Raycon</h1>
            <p className="price-product-page-price ">
              <bdi>
                200 <span className="price-symbol">$</span>
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
                <button>Add to cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="productApple">
        <h1>Apple</h1>
        <p>400$</p>
        <p>
          Apple Earbuds, also known as AirPods, have become iconic audio
          accessories in the tech world. Designed with simplicity and
          convenience in mind, Apple Earbuds offer a seamless wireless audio
          experience for Apple device users. With their sleek and minimalist
          design, these earbuds fit comfortably in the ears and provide a
          reliable connection via Bluetooth. The integration with Apple's
          ecosystem allows for effortless pairing and quick access to Siri for
          voice commands. The sound quality of Apple Earbuds is impressive,
          delivering clear vocals and a balanced audio profile. Furthermore, the
          charging case provides additional battery life and easy portability.
          Whether you're taking calls, listening to music, or engaging with your
          favorite podcasts, Apple Earbuds offer a user-friendly and stylish
          audio solution for Apple enthusiasts.
        </p>
        <div>
          <button>Buy here</button>
        </div>
      </div>
      <img src="apple.jpg" alt="two" width="25%" />

      <div className="eaebudsButton">
        <button>Buy here</button>
      </div> */}
    </main>
  );
}
