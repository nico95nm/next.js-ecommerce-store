type Earbud = {
  id: number;
  name: string;
  type: string;
  price: number;
};

export const earbuds: Earbud[] = [
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
];
export function getAllEarbud() {
  return earbuds;
}
/*
export function getEarbudById(id: number) {
  return earbuds.find((earbud) => earbud.id === id);
}
 */
