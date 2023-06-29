import { AiOutlineMail } from 'react-icons/ai';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';

import avatar from '../assets/avatar.svg';
import { Link } from 'react-router-dom';

const About = () => {
  const socialIcons = [FaLinkedinIn, FaGithub, AiOutlineMail];
  const socialLinks = [
    'https://www.linkedin.com/in/jose-lages-a1b82617a/',
    'https://github.com/jose-lages',
    '/contact',
  ];
  return (
    <div>
      <section className="w-full sm:h-full mt-[120px] p-2 flex items-center py-16 text-gray-400">
        <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
          <div className="col-span-2">
            <p className="uppercase text-xl tracking-widest text-pink-600 font-semibold">
              About Me
            </p>
            <h2 className="py-4">Jose Lages</h2>
            <span className="py-2">
              <p className="py-2">
                During my studies in Electrical and Computing Engineering, I was
                introduced to the world of coding through Visual Basic, and instantly fell
                in love with it. This sparked my interest in software development, and I
                began exploring various programming languages and frameworks. Seeking new
                opportunities and challenges, I made the decision to move to London to
                broaden my horizons.
              </p>
              <p className="py-2">
                I had the opportunity to be part of a Revenue Operations specialists team,
                where I gained valuable experience using Salesforce. Working with this
                powerful CRM platform allowed me to optimize sales processes, improve data
                management, and enhance overall efficiency. This experience further fueled
                my passion for technology and its role in streamlining business
                operations.
              </p>
              <p className="py-2">
                Fate had it when my sister started her own business and needed assistance
                with her website. Eager to help, I took it upon myself to dive into web
                development and get familiar with the MERN stack (MongoDB, Express.js,
                React, and Node.js).
              </p>
              <p className="py-2">
                As I delved into this new realm, I found great satisfaction in building
                functional and visually appealing websites, as well as developing dynamic
                web applications. Throughout my professional journey, I have cultivated a
                strong work ethic and a genuine eagerness to learn. I believe that
                continuous growth and adaptation are essential in the fast-paced world of
                technology.
              </p>
            </span>

            <Link to="/projects">
              <p className="flex items-center justify-center max-w-[330px] m-auto py-4 underline cursor-pointer">
                Check what I have done.
              </p>
            </Link>
            <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
              {socialIcons.map((Icon, index) => (
                <div
                  key={index}
                  className="rounded-full shadow-xl p-2 cursor-pointer hover:scale-110 ease-in duration-200"
                >
                  <a href={socialLinks[index]} target="_blank" rel="noreferrer">
                    <Icon size={25} />
                  </a>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full h-auto rounded-xl flex items-center justify-center hover:scale-105 ease-in duration-300">
            <img className="rounded" src={avatar} alt="" />
          </div>
        </div>
      </section>
    </div>
  );
};
export default About;
