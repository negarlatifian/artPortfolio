'use client';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { nunito, nanum } from '../fonts';
import Image from 'next/image';
import { imageArray } from './links.js';
import './page.css';

const simin = () => {
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
        <Carousel showArrows={true} showThumbs={true} showIndicators={true}>
          {imageArray.map((item) => (
            <div key={item.title}>
              <Image
                src={item.imageSrc}
                alt={item.title}
                width={200}
                height={500}
              />
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default simin;
