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

const trapped = () => {
  const [index, setIndex] = useState(-1);
  return (
    <section className='book'>
      <h1 className={nunito.className}>Trapped between Inside & Outside</h1>
      <p className={nanum.className}>
        A photo-essay with integration of the virtual reflected images and real
        scenes in the streets of paris.
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

export default trapped;
