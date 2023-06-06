import { Sql } from 'postgres';

export type Product = {
  id: number;
  name: string;
  type: string;
  price: number;
  description: string;
};
export async function up(sql: Sql) {
  await sql`
  CREATE TABLE products(
    id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    name vachar(30) NOT NULL,
    type vachar(30) NOT NULL,
    description vachar(30),
    price integer
    )
  `;
}

export async function down(sql: Sql) {
  await sql`
  DROP TABLE products
  `;
}
