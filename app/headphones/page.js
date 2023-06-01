import Image from 'next/image';
import Link from 'next/link';
import { getHeadphoneById } from '../../database/headphones';

export const metadata = {
  title: 'Animals page',
  description: 'My favorite animals',
};

export default async function HeadphonesPage() {
  const headphones = await getHeadphoneById();

  return (
    <main>
      This are my animals
      {headphones.map((headphone) => {
        return (
          <div
            key={`animal-div-${headphone.id}`}
            data-test-id={`animal-type-${headphone.type}`}
          >
            <Link href={`/headphones/${headphone.id}`}>{headphone.name}</Link>
            <br />
            <Image
              src={`/images/${headphone.name}.png`}
              alt={headphone.name}
              width={100}
              height={100}
            />
          </div>
        );
      })}
    </main>
  );
}
