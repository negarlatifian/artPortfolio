'use client';
import { Carousel } from 'react-responsive-carousel';
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

const simin = () => {
  const [index, setIndex] = useState(-1);
  return (
    <section className='book'>
      <h1 className={nunito.className}>Simin</h1>
      <p className={nanum.className}>
        Simin is a project that explores the identity and expression of Iranian
        women who wear the mandatory hijab. The name Simin means "silvern" in
        Persian, and it reflects the two main aspects of the project: the use of
        silver as a material and a color, and the choice of Simin as a female
        name.
      </p>
      <p className={nanum.className}>
        The project consists of a series of portraits of young Iranian women in
        their modern outdoor outfits, contrasted with the imposed veil. The
        portraits are made using a technique inspired by the Daguerreotype
        process, which was the first widely used photographic method. The
        technique involves exposing a silver-coated copper plate to light,
        creating a mirror-like image on the metal surface. The result is a
        unique and striking effect, where the viewer can see themselves
        reflected in the portrait, as well as the details of the subject's face
        and clothing.
      </p>
      <p className={nanum.className}>
        The project aims to challenge the stereotypes and prejudices that
        surround Iranian women, and to show their diversity and individuality.
        By using an old medium to capture the present, the project also creates
        a dialogue between the past and the future, and between tradition and
        modernity. Simin is a project that celebrates the beauty and resilience
        of Iranian women, and their ability to express themselves despite the
        limitations.
      </p>
      <div className='gallery'>
        <Carousel
          showArrows={true}
          showThumbs={true}
          showIndicators={true}
          autoPlay={true}
          emulateTouch={true}
          dynamicHeight={true}
          infiniteLoop={true}
          width={600}
          className='carousel-me'
          onClickItem={({ index }) => {
            console.log(index);
            setIndex(1);
          }}
        >
          {imageArray.map((item) => (
            <div className='carousel-item' key={item.title}>
              <Image
                src={item.imageSrc}
                alt={item.title}
                width={400}
                height={1000}
              />
            </div>
          ))}
        </Carousel>
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

export default simin;
