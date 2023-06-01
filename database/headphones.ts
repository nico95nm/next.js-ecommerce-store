type Headphone = {
  id: number;
  name: string;
  type: string;
  price: number;
};

export const headphones: Headphone[] = [
  {
    id: 3,
    name: 'marshall',
    type: 'headphone',
    price: 200,
  },
  {
    id: 4,
    name: 'hyperx',
    type: 'headphone',
    price: 400,
  },
];

export function getHeadphoneById(id: number) {
  return headphones.find((headphone) => headphone.id === id);
}
