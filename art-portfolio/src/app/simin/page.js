'use client';
import { nunito, nanum } from '../fonts';
import Image from 'next/image';
import { CldImage } from 'next-cloudinary';
import './page.css';
import { imageArray } from './links.js';

const simin = () => {
  return (
    <section className='book'>
      <h1 className={nunito.className}>O-AB-B-A-B-O-A-AB</h1>
      <p className={nanum.className}>
        Simin is a project that explores the identity and expression of Iranian
        women who wear the mandatory hijab. The name Simin means "silvern" in
        Persian, and it reflects the two main aspects of the project: the use of
        silver as a material and a color, and the choice of Simin as a female
        name.
        <br />
        The project consists of a series of portraits of young Iranian women in
        their modern outdoor outfits, contrasted with the imposed veil. The
        portraits are made using a technique inspired by the Daguerreotype
        process, which was the first widely used photographic method. The
        technique involves exposing a silver-coated copper plate to light,
        creating a mirror-like image on the metal surface. The result is a
        unique and striking effect, where the viewer can see themselves
        reflected in the portrait, as well as the details of the subject's face
        and clothing.
        <br />
        The project aims to challenge the stereotypes and prejudices that
        surround Iranian women, and to show their diversity and individuality.
        By using an old medium to capture the present, the project also creates
        a dialogue between the past and the future, and between tradition and
        modernity. Simin is a project that celebrates the beauty and resilience
        of Iranian women, and their ability to express themselves despite the
        limitations.
      </p>
      <div className='gallery'></div>
    </section>
  );
};

export default simin;
