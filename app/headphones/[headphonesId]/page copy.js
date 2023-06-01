import Image from 'next/image';
import Link from 'next/link';
import { headphones } from '../../../database/headphones';

export const metadata = {
  title: 'Animals page',
  description: 'My favorite animals',
};

export default function Headphone({ params }) {
  const myHeadphone = headphones.find(
    (headphone) => headphone.id === Number(params.headphone.id),
  );
  console.log(myHeadphone);

  return (
    <main>
      This are my animals
      <div
        key={`headphone-div-${myHeadphone.id}`}
        data-test-id={`headphone-type-${myHeadphone.type}`}
      >
        <Link href={`/headphone/${myHeadphone.id}`}>{myHeadphone.id}</Link>
        <br />
        <Image
          src={`/images/${myHeadphone.name}.png`}
          alt={myHeadphone.name}
          width={100}
          height={100}
        />
      </div>
      );
    </main>
  );
}
