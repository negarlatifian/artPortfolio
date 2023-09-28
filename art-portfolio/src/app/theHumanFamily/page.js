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

const theHumanFamily = () => {
  const [index, setIndex] = useState(-1);
  return (
    <section className='book'>
      <h1 className={nunito.className}>
        La Famille Humaine - The Human Family
      </h1>
      <p className={nanum.className}>
        The human family is a collage collection that celebrates the diversity
        and unity of humanity through the posters from the walls of Paris. The
        posters from the walls of Paris are a rich source of images and texts
        that reflect the history, culture, and politics of the city and its
        people. They also show how the city is constantly changing and evolving,
        just like the human family. I collected the posters from different
        locations and periods in Paris, and then cut, tore, layered, and glued
        them to create a collage for each individual. I used different colors
        and shapes to create contrast and harmony between the layers, and to
        highlight the unique characteristics and stories of each person. I also
        used text fragments from the posters to create titles or captions for
        each collage, adding another layer of meaning and context. My work is a
        tribute to the human family and its diversity and unity. I believe that
        art can be a way of connecting with others and learning from their
        perspectives and experiences. I hope that my collages inspire others to
        appreciate the beauty and complexity of humanity and its cultures. I
        also want to continue exploring the possibilities and challenges of
        collage as an artistic medium and expression.
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
            <div
              className={[`${item.className}`, 'gallery-item']}
              key={item.title}
            >
              <Image
                src={item.imageSrc}
                alt={item.title}
                width={item.width}
                height={item.height}
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

export default theHumanFamily;
