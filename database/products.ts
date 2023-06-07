import { cache } from 'react';
import { Product } from '../migrations/1686037064-createTableProducts';
import { sql } from './connect';

export const getProducts = cache(async () => {
  const products = await sql<Product[]>`
    SELECT * FROM migrations
 `;
  return products;
});

export const getProductsById = cache(async (id: number) => {
  const [products] = await sql<Product[]>`
    SELECT
      *
    FROM
    migrations
    WHERE
      id = ${id}
  `;
  return products;
});

export const createProduct = cache(
  async (name: string, type: string, price: number, description: string) => {
    const [product] = await sql<Product[]>`
      INSERT INTO migrations
        (name, type, price, description)
      VALUES
        (${name}, ${type}, ${price}, ${description})
      RETURNING *
    `;

    return product;
  },
);
