import { Sql } from 'postgres';

export const products = [
  {
    id: 1,
    name: 'Raycon',
    type: 'earbud',
    price: 200,
    description: `Raycon earbuds are a popular choice for those seeking wireless
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
    and enjoyable.`,
  },
  {
    id: 2,
    name: 'Apple',
    type: 'earbud',
    price: 400,
    description: `The AirPods are wireless earbuds that let you take calls,
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
    don't have any residual audio in your ears.`,
  },
  {
    id: 3,
    name: 'Marshall',
    type: 'headphone',
    price: 90,
    description: `Marshall is a British company that specializes in the manufacturing of audio equipment, particularly guitar amplifiers and headphones. Established in 1962, Marshall has gained global recognition for its high-quality products and iconic sound. The brand's amplifiers, known for their distinctive tone and rugged design, are widely used by professional musicians and have played a significant role in shaping the history of rock music. Marshall also offers a range of headphones that combine style and audio performance, catering to both music enthusiasts and professionals. With a rich heritage and commitment to excellence, Marshall continues to be a leading name in the audio industry.`,
  },
  {
    id: 4,
    name: 'Hyperx',
    type: 'headphone',
    price: 80,
    description: `HyperX is a popular brand that specializes in gaming peripherals and accessories. Founded in 2002, HyperX is known for its high-quality gaming headsets, keyboards, mice, and other gaming-related products. The brand has gained a strong reputation among gamers for delivering top-notch performance, comfort, and durability.

    HyperX gaming headsets are particularly acclaimed for their immersive audio quality, featuring crystal-clear sound and precise directional cues that enhance the gaming experience. These headsets often incorporate advanced technologies such as virtual surround sound and noise cancellation to provide gamers with a competitive edge.

    `,
  },
];
export async function up(sql: Sql) {
  for (const product of products) {
    await sql`
    INSERT INTO products
      (name, type, price, description)
    VALUES
      (${product.name}, ${product.type}, ${product.price}, ${product.description})
  `;
  }
}

export async function down(sql: Sql) {
  for (const product of products) {
    await sql`
      DELETE FROM products WHERE id = ${product.id}
  `;
  }
}
