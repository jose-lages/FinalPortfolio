import { Link } from 'react-router-dom';

const HomePage = () => {
  const navItems = ['<About />', '<Skills />', '<Projects />', '<Contact Me />'];
  const navLinks = ['/about', '/skills', '/projects', '/contact'];

  return (
    <div className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest">
            Let's build something together
          </p>
          <h1 className="py-4">
            Hi, I'm <span className="text-pink-600">Jose</span>
          </h1>
          <h1 className="py-2">a full stack developer</h1>

          <div className="flex items-center justify-between py-6 my-4">
            {navItems.map((item, index) => (
              <Link key={item} to={navLinks[index]}>
                <p className="hover:border-b hover:border-pink-600 border-b border-transparent">
                  {item}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

// cb4154
// 011936
// eaeaea
