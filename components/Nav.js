import Link from 'next/link';
import NavStyles from './styles/NavStyles';

const Nav = () => (
  <NavStyles>
    <Link href="/About">
      <a>About</a>
    </Link>
    <Link href="/">
      <a>Tattoos</a>
    </Link>
    <Link href="/FAQ">
      <a>FAQ</a>
    </Link>
    <Link href="/events">
      <a>Events</a>
    </Link>
    <Link href="/book">
      <a>Book</a>
    </Link>
  </NavStyles>
);

export default Nav;