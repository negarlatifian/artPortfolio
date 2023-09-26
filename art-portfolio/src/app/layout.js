import Navbar from './components/Navbar';
import { Inter } from 'next/font/google';
import './globals.css';
import './layout.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Negar Latifian',
  description: "Negar Latifian's art portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
