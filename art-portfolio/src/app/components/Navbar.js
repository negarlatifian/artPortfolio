import './Navbar.css';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='logo'>
        <Link href='/'>
          <Image src='/logo.png' alt='logo' width={100} height={50} />
        </Link>
      </div>
      <div className='menu'>
        <div className='menu__works'>
          <ul className='menu__list__text'>
            <li>
              <Link href='/O-AB-B-A-B-O-A-AB'>O-AB-B-A-B-O-A-AB</Link>
            </li>
            <li>
              <Link href='/simin'>Simin</Link>
            </li>
            <li>
              <Link href='/azadi'>Azadi</Link>
            </li>
            <li>
              <Link href='/theBeheldGaze'>The Beheld Gaze</Link>
            </li>
            <li>
              <Link href='/carreDeFraternite'>Carré de Fraternité</Link>
            </li>
            <li>
              <Link href='/theHumanFamily'>Le Famille Humaine</Link>
            </li>
            <li>
              <Link href='/trappedInsideOutside'>
                Trapped between Inside & Outside
              </Link>
            </li>
          </ul>
        </div>
        <div className='menu__about menu__list__text'>
          <Link href='/about'>About</Link>
        </div>
        <div className='menu__contact menu__list__text'>
          <ul>
            <li>
              <Link href=''>Email</Link>
            </li>
            <li>
              <Link href=''>Instagram</Link>
            </li>
            <li>
              <Link href=''>Email</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
