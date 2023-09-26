'use client';
import { nunito, nanum } from '../fonts';
import Image from 'next/image';
import { CldImage } from 'next-cloudinary';
import './page.css';
import { imageArray } from './links.js';

const book = () => {
  return (
    <section className='book'>
      <h1 className={nunito.className}>O-AB-B-A-B-O-A-AB</h1>
      <p className={nanum.className}>
        "Healthy ... for Sale" is a common phrase that can be seen on every
        corner of this alley. This alley, located in the heart of Tehran, is
        officially called "Farhang Hosseini", but most people know it as "Kidney
        Alley". That's because its walls are used as a black market for organ
        trafficking. People who have no other choice come here to look for a
        kidney or a liver, scanning the red graffiti that display the "gender,
        age, health status, phone number" of the sellers.
        <br />
        In this book, you can see a realistic panoramic photo of every door,
        every step and every brick of one side of this alley. As you move along
        the 7-meter photo in this book, you can imagine yourself walking through
        the alley. To maintain the continuity of the alley's walls in the eyes
        of the viewer, the pages are folded like an accordion instead of being
        separated. Moreover, a magnifier is attached at the end of the book to
        help you zoom in and the cover shows the picture of the "Farhang
        Hosseini Alley" sign.
      </p>
      <div className='gallery'>
        <ul className='gallery__list'>
          <li>
            <Image
              src={imageArray[0].imageSrc}
              alt={imageArray[0].title}
              width='1200'
              height='900'
            />
          </li>
          <li className='gallery__dual'>
            <Image
              src={imageArray[1].imageSrc}
              alt={imageArray[1].title}
              width='500'
              height='375'
            />
          </li>
          <li>
            <Image
              src={imageArray[2].imageSrc}
              alt={imageArray[2].title}
              width='500'
              height='375'
            />
          </li>
          <li>
            <Image
              src={imageArray[3].imageSrc}
              alt={imageArray[3].title}
              width='500'
              height='375'
            />
          </li>
          <li>
            <Image
              src={imageArray[3].imageSrc}
              alt={imageArray[3].title}
              width='500'
              height='375'
            />
          </li>
          <li>
            <Image
              src={imageArray[4].imageSrc}
              alt={imageArray[4].title}
              width='500'
              height='375'
            />
          </li>
          <li>
            <Image
              src={imageArray[5].imageSrc}
              alt={imageArray[5].title}
              width='500'
              height='375'
            />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default book;
