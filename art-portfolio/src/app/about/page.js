'use client';
import { nunito, nanum } from '../fonts';
import Image from 'next/image';
import './page.css';

const book = () => {
  return (
    <section className='about'>
      <div className='about__container'>
        <div className='about__image'>
          <Image src='/photo3.png' alt='negar' width={300} height={300} />
        </div>
        <div className='about__text'>
          <h1 className={nunito.className}>Neela Negar Latifian</h1>
          <p className={nanum.className}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc diam
            urna, congue vitae tortor et, dapibus porta libero. Vestibulum
            lobortis leo sit amet nunc porttitor convallis. Proin consectetur
            non erat eu malesuada. Ut convallis massa ac turpis feugiat posuere.
            Nullam a lacus ut velit blandit congue ac nec turpis. Quisque
            aliquet id tellus et ultrices. Quisque ut purus vulputate, aliquet
            ex quis, elementum lectus. In aliquet venenatis nibh rutrum mattis.
            Nulla sit amet justo in mauris commodo lobortis. Nunc facilisis diam
            sed justo eleifend fringilla. Ut interdum ultricies velit, vitae
            consequat nulla convallis at. Morbi sit amet lectus iaculis dolor
            dignissim hendrerit ornare at turpis. Ut vel placerat purus. Aliquam
            congue ante sodales feugiat maximus.
          </p>
        </div>
      </div>
      <div className='about__cv'>
        <h1 className={nunito.className}>CV</h1>
        <h2 className={nunito.className}>Education</h2>
        <ul className='about__cv__list'>
          <li>
            <h3>
              Vocational Training in Digital Media Creative, HyperIsland,
              Stockholm, Sweden.
            </h3>
            <p>HyperIsland Yrkehögskolan, 2020-2022</p>
          </li>
          <li>
            <h3>
              Master of Arts in Photography, University of Tehran, Tehran, Iran.
            </h3>
            <p>College of Fine Arts, 2014-2017</p>
          </li>
          <li>
            <h3>
              Bachelor of Science in Chemical Engineering, University of Tehran,
              Iran
            </h3>
            <p>College of Engineering. 2008-2013</p>
          </li>
        </ul>
        <h2 className={nunito.className}>Trainings & Certificates</h2>
        <ul className='about__cv__list'>
          <li>
            <p>
              Bookbinding & Cover Design Training, Aria Art Gallery, Tehran,
              Iran, 2019.
            </p>
          </li>
          <li>
            <p>
              Cyanotype Portraiture Workshop, Contextile 2018, Guimarães,
              portugal, 2018.
            </p>
          </li>
          <li>
            <p>
              Photography Independant Courses, College of Fine Arts, University
              of Tehran, Iran, 2011-2013.
            </p>
          </li>
        </ul>

        <h2 className={nunito.className}>Honours & Awards</h2>
        <ul className='about__cv__list'>
          <li>
            <p>
              Selected artist in “Focus Iran 3” competition, Farhang Foundation,
              LA, USA, 2019.
            </p>
          </li>
          <li>
            <p>
              Finalist artist in “Foto Sintese” Festival, Lisbon, Portugal,
              2018.
            </p>
          </li>
          <li>
            <p>
              Selected artist in “8th Annual Self-Published Photobook Show”,
              Davis Orton Gallery, Hudson, NY, US, 2017.
            </p>
          </li>
          <li>
            <p>
              1st Place in Photography Section in 1st Nafas Visual Arts
              Festival, Tehran. Iran, 2017.
            </p>
          </li>
        </ul>

        <h2 className={nunito.className}>Selected Exhibitions</h2>
        <ul className='about__cv__list'>
          <li>
            <p>
              <i> Open Up Festival</i>, HDK-Valand, Academy of Art & Design,
              University of Gothenburg, Sweden, 2023.
            </p>
          </li>
          <li>
            <p>
              <i>Focus Iran 3</i>, Viewpoint Gallery, UC Irvine, USA, 2019.
            </p>
          </li>
          <li>
            <p>
              <i>Focus Iran 3</i>, Craft & Folks Museum, LA, USA, 2019.
            </p>
          </li>
          <li>
            <p>
              <i>Foto Sintese Festival</i>, Central Tejo / EDP Foundation,
              Lisbon, Portugal, 2018.
            </p>
          </li>
          <li>
            <p>
              <i>8 th Annual Self-Published PhotoBook Show</i>, Griffin Museum
              of Photography, Winchester, MA, USA, 2018.
            </p>
          </li>
          <li>
            <p>
              <i>ESOT Visual Art Exhibition</i>, ESOT Congress, Barcelona,
              Spain, 2017.
            </p>
          </li>
          <li>
            <p>
              <i>“The Tehran” Photography Group Exhibition</i>, Shalman Art
              Gallery, Tehran, Iran, 2017.
            </p>
          </li>
          <li>
            <p>
              <i>8th Annual Self-Published Photobook Show</i>, Davis Orton
              Gallery, Hudson, NY, US, 2017.
            </p>
          </li>
          <li>
            <p>
              <i>1st Nafas Visual Arts Festival Elected Artworks</i>, Kunming,
              China, 2017.
            </p>
          </li>
          <li>
            <p>
              <i>Be Immortal Group Open Studio</i>, Cité International des Arts,
              Paris, France, 2017.
            </p>
          </li>
          <li>
            <p>
              <i>Solo Open Studio</i>, Cité International des Arts, Paris,
              France, 2017.
            </p>
          </li>
          <li>
            <p>
              <i>1st Nafas Visual Arts Festival Elected Artworks</i>, Chennai,
              India, 2017.
            </p>
          </li>
          <li>
            <p>
              <i>“Tehran and Beyond” Photography Group Exhibition</i>, Silk Road
              Art Gallery, Tehran, Iran, 2017.
            </p>
          </li>
          <li>
            <p>
              <i>
                1 st Annual Student Photography Exhibition of University of
                Tehran
              </i>
              , Tehran Gallery, University of Tehran, Iran, 2017.
            </p>
          </li>
          <li>
            <p>
              <i>1st Nafas Visual Arts Festival</i>, Iranian Artists Forum,
              Tehran, Iran, 2016.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default book;
