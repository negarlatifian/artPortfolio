import Image from 'next/image';
import { Nanum_Myeongjo } from 'next/font/google';

const nanum = Nanum_Myeongjo({
  subsets: ['latin'],
  weight: ['400', '700', '800'],
  display: 'swap',
});

export default function Home() {
  return (
    <main className={nanum.className}>
      <p>Hi</p>
    </main>
  );
}
