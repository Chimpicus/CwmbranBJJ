import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';
const NavLinks = () => {
  const navLinksStyles = 'text-gray-50 hover:text-gray-400 py-2';
  return (
    <>
      <NavLink className={navLinksStyles} to='/home'>
        Home
      </NavLink>
      <NavLink className={navLinksStyles} to='/about'>
        About
      </NavLink>
      <NavLink className={navLinksStyles} to='/sessions'>
        Sessions
      </NavLink>
      <NavLink className={navLinksStyles} to='/updates'>
        Updates
      </NavLink>
      <NavLink className={navLinksStyles} to='/resources'>
        Resources
      </NavLink>
      <NavLink className={navLinksStyles} to='/contact'>
        Contact
      </NavLink>
      <div className='flex justify-around items-center w-1/5'>
        <a href=''>
          <button>
            <FontAwesomeIcon icon={faFacebookF} />{' '}
          </button>
        </a>
        <a href=''>
          <button>
            {' '}
            <FontAwesomeIcon icon={faInstagram} />{' '}
          </button>
        </a>
      </div>
    </>
  );
};
const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <nav id='nav' className='flex w-1/2 justify-end'>
        <div className='hidden  w-full md:flex justify-between'>
          <NavLinks />
        </div>
        <div className='md:hidden'>
          <button onClick={toggleNav}>{isOpen ? <X /> : <Menu />}</button>
        </div>
      </nav>
      {isOpen && (
        <div className='flex basis-full flex-col items-center'>
          <NavLinks />
        </div>
      )}
    </>
  );
};
export default Nav;
