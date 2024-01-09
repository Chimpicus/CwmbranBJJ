import Logo from './Logo';
import Nav from './Nav';

const Header = () => {
  return (
    <div id='header' className='bg-gray-950 sticky z-20 mx-0 flex w-screen items-center justify-between p-8 flex-wrap'>
      <Logo />
      <Nav />
    </div>
  );
};

export default Header;
