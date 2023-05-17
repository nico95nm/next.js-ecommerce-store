import './globals.module.scss';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <h1>{children}</h1>
        <span>This is a project</span>
      </body>
    </html>
  );
}
