import Image from 'next/image';
import Link from 'next/link';
import { getAllEarbud } from '../../../database/earbuds';

export const metadata = {
  title: 'Animals page',
  description: 'My favorite animals',
};

export default async function EarbudsPage() {
  const earbuds = await getAllEarbud();

  return <main></main>;
}
