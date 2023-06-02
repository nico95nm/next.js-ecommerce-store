import Quantity from './[earbadId]/Quantity';

export default function earpasPage() {
  return (
    <main>
      <div className="product-container">
        <div className="productName">
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
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="product-container">
        <div className="productName">
          <div className="earbudsImg">
            <img src="apple.jpg" alt="one" width="600px" height="455px" />
          </div>
          <div className="product-info-summary">
            <h1 className="product-title">Apple</h1>
            <p className="price-product-page-price ">
              <bdi>
                400 <span className="price-symbol">$</span>
              </bdi>
            </p>
            <div className="product-short-description">
              <p>
                The AirPods are wireless earbuds that let you take calls,
                control music and even share photos without taking your phone
                out of your pocket. Just open the AirPods case, hold one EarPod
                in each ear and start taking calls. You can answer or end calls
                with just a quick tap, control music playback and even make
                hands-free calls with Siri simply by asking. For hands-free
                calling, just double-click the left AirPod to answer or end a
                call, and then continue holding down the button on the right
                AirPod until you see the Speak active screen. You can also
                communicate with friends and family by sending them audio or
                video messages without ever having to take your phone out of
                your pocket. Simply open the AirPods case, tap on one EarPod and
                start talking. And when you're ready to rock out again, just
                SHAKE your AirPods case to eject the earbuds completely so you
                don't have any residual audio in your ears.
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
