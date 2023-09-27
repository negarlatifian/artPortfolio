'use client';
import { nunito, nanum } from '../fonts';
import Image from 'next/image';
import './page.css';

const azadi = () => {
  return (
    <section className='azadi'>
      <h1 className={nunito.className}>Azadi (آزادی)</h1>
      <p className={nanum.className}>
        Azadi Tower, also known as Shahyad Tower, is a monument in Tehran that
        commemorates the former king of Iran. It was built in 1972 and became a
        symbol of modernity and progress in the country. Azadi means freedom and
        shahyad means king's memorial in Persian.
      </p>
      <p className={nanum.className}>
        Yet the tower has been forsaken and injured over the years, and some
        experts have cautioned that it is at risk of crumbling. This project
        aims to exhibit the current status of the tower and the disparity
        between various instant photos taken and situated at different heights.
        It also explores the idea of freedom in Iran and uses the tower as an
        emblem for its situation.
      </p>
      <p className={nanum.className}>
        The project consists of 15 instax fujifilm photos, which follow a
        popular tradition around the square. Many people like to take pictures
        with the tower as a souvenir of their visit. Most Iranian families have
        at least one photo with the tower in their albums. This tradition
        originates from the time when photographers in this square used Polaroid
        cameras to capture touristic photo of people visiting Tehran. Today,
        they use digital cameras and portable printers, but the tradition
        remains...
      </p>
      <div className='gallery'>
        <ul className='gallery__list'>
          <li>
            <Image
              src='https://res.cloudinary.com/dh2zk8qgr/image/upload/v1695717445/Azadi/01_jkbmyu.jpg'
              alt='azadi'
              width='1200'
              height='900'
            />
          </li>
          <li>
            <Image
              src='https://res.cloudinary.com/dh2zk8qgr/image/upload/v1695717441/Azadi/02_ctcxvv.jpg'
              alt='azadi'
              width='1200'
              height='900'
            />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default azadi;
