import Navbar from './components/Navbar';
import React from 'react';
import './globals.css';
import './layout.css';

export const metadata = {
  title: 'Negar Latifian',
  description: "Negar Latifian's art portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <Navbar className='navbar' />
        <section className='bodyElement'>{children}</section>
      </body>
    </html>
  );
}
