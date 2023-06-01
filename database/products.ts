type Product = {
  id: number;
  name: string;
  type: string;
  price: number;
};

export const products: Product[] = [
  {
    id: 1,
    name: 'raycon',
    type: 'earbud',
    price: 200,
  },
  {
    id: 2,
    name: 'apple',
    type: 'earbud',
    price: 400,
  },
  {
    id: 3,
    name: 'marshall',
    type: 'headphone',
    price: 90,
  },
  {
    id: 4,
    name: 'hyperx',
    type: 'headphone',
    price: 80,
  },
];
export function getAllProductsById() {
  return products;
}
/*
export function getEarbudById(id: number) {
  return earbuds.find((earbud) => earbud.id === id);
}
 */
