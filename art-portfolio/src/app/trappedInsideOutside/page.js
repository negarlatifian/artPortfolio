'use client';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import { useState } from 'react';
import { nunito, nanum } from '../fonts';
import Image from 'next/image';
import { imageArray } from './links.js';
import './page.css';

import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen';
import Slideshow from 'yet-another-react-lightbox/plugins/slideshow';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import 'yet-another-react-lightbox/plugins/thumbnails.css';

const carreDeFraternite = () => {
  const [index, setIndex] = useState(-1);
  return (
    <section className='book'>
      <h1 className={nunito.className}>
        Carré de Fraternité - the Corner of Brotherhood
      </h1>
      <p className={nanum.className}>
        Mattresses, old cardboard, blankets, sleeping bags, tent. A repetitive
        scene in your daily walk in the streets of Paris. Each of these spots is
        the territory of a homeless who is sleeping in the streets due to lots
        of reasons.
      </p>
      <p className={nanum.className}>
        There are 7-8,000 rough sleepers on the streets of Paris. There are some
        shelters considered for homeless people but lack of capacity, illegal
        immigration and strict rules of shelters force many of rough sleepers to
        sleep in the street; Strict rules such as no dogs, no couples, no
        alcohol and some also refuse to take those with mental issues.
      </p>
      <p className={nanum.className}>
        Unfortunately, an average of 480 homeless people are reported to have
        died in the streets of France every year, organizations like the
        Collectif Les Morts organize simple ceremonies in a dedicated corner of
        the Thiais Cemetery outside Paris. The area set aside for homeless
        burials is called the Carré de Fraternité - the Corner of Brotherhood.
      </p>
      <div className='gallery-container'>
        <div
          className='gallery'
          onClick={({ index }) => {
            console.log(index);
            setIndex(1);
          }}
        >
          {imageArray.map((item) => (
            <div className='gallery-item' key={item.title}>
              <Image
                src={item.imageSrc}
                alt={item.title}
                width={400}
                height={300}
              />
            </div>
          ))}
        </div>
        <Lightbox
          slides={imageArray.map((item) => ({
            src: item.imageSrc,
            download: false,
          }))}
          open={index >= 0}
          index={index}
          close={() => setIndex(-1)}
          plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
        />
      </div>
    </section>
  );
};

export default carreDeFraternite;
