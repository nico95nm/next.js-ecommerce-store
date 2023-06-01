import Image from 'next/image';

export default function Home() {
  return (
    <main>
      <div className="heroImage">
        <div className="heroText">
          Welcome to Hi-Fi Harmony, your destination for top-notch headphones
          and earbuds. Discover the perfect blend of style and audio excellence
          with our curated collection. From sleek wireless earbuds to immersive
          over-ear headphones, we offer a harmonious selection of premium audio
          solutions. Elevate your listening experience to new heights with Hi-Fi
          Harmony and indulge in rich sound, comfortable designs, and
          cutting-edge features. Upgrade your audio journey today and embrace
          the symphony of superior sound.
        </div>
        {/*         <Image
          src={`/images/${background}.webp`}
          alt={product.name}
          width={100}
          height={100}
        /> */}
        <img
          src="/image/background.webp"
          alt="backgound"
          width="100%"
          height="80%"
        />
      </div>
    </main>
  );
}
