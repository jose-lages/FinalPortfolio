import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const navItems = ['Home', 'About', 'Skills', 'Projects', 'Contact Me'];
const navLinks = ['/', '/about', '/skills', '/projects', '/contact'];

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => {
    setNav(!nav);
  };

  //
  return (
    <div className="fixed top-0 left-0 w-full h-[120px] flex bg-[#08192f] p-5 items-center justify-between">
      {/* menu */}
      <div />
      <nav className="hidden md:flex">
        {navItems.map((item, index) => (
          <Link key={item} to={navLinks[index]}>
            <h3 className="hover:border-b hover:border-pink-600 mx-10 border-b border-transparent text-lg">
              {item}
            </h3>
          </Link>
        ))}
      </nav>

      {/* hamburger */}
      <div className="md:hidden" onClick={handleClick}>
        {nav ? <FaTimes size={25} /> : <FaBars size={25} />}
      </div>

      {/* mobile menu */}
      <div
        className={
          nav
            ? 'fixed top-[120px] right-0 w-full h-screen bg-[#08192f] flex flex-col justify-center items-center'
            : 'hidden'
        }
      >
        {navItems.map((item, index) => (
          <Link key={item} to={navLinks[index]}>
            <h3 className="hover:border-b hover:border-pink-600 my-6 py-4 text-4xl border-b border-transparent">
              {item}
            </h3>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
