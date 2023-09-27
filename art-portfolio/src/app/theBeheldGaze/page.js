'use client';
import { nunito, nanum } from '../fonts';
import Image from 'next/image';
import { imageArray } from './links.js';
import './page.css';

const theBeheldGaze = () => {
  return (
    <section className='container'>
      <h1 className={nunito.className}>The Beheld Gaze</h1>
      <p className={nanum.className}>
        What do we see when we look at the ordinary moments of our lives? How do
        we perceive the world around us and the people we share it with? These
        are some of the questions that this series explores, by documenting the
        daily train ride between two cities in Portugal. The commuters who take
        this route every day are used to the same routine, the same landscape,
        and the same faces. But they also have their own inner worlds, where
        they can dream, imagine, and feel. This series aims to capture both the
        external and the internal aspects of this mundane experience, and to
        show how they contrast and complement each other. The photographs reveal
        the subtle expressions, gestures, and interactions of the passengers, as
        well as the changing light, colors, and shapes of the environment. They
        also suggest the stories, thoughts, and emotions that might be hidden
        behind these appearances. By doing so, this series invites us to reflect
        on our own perception of reality and to appreciate the beauty and
        complexity of the ordinary.
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
              width='1200'
              height='900'
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
          <li>
            <Image
              src={imageArray[6].imageSrc}
              alt={imageArray[6].title}
              width='1200'
              height='900'
            />
          </li>
          <li>
            <Image
              src={imageArray[7].imageSrc}
              alt={imageArray[7].title}
              width='500'
              height='375'
            />
          </li>
          <li>
            <Image
              src={imageArray[8].imageSrc}
              alt={imageArray[8].title}
              width='500'
              height='375'
            />
          </li>
          <li>
            <Image
              src={imageArray[9].imageSrc}
              alt={imageArray[9].title}
              width='1200'
              height='900'
            />
          </li>
          <li>
            <Image
              src={imageArray[10].imageSrc}
              alt={imageArray[10].title}
              width='1200'
              height='900'
            />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default theBeheldGaze;
