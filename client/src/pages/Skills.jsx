import css from '../assets/css.png';
import html from '../assets/html.png';
import react from '../assets/react.png';
import python from '../assets/python.png';
import node from '../assets/node.png';
import tailwind from '../assets/tailwind.png';
import javascript from '../assets/javascript.png';
import mongo from '../assets/mongo.png';
import miro from '../assets/miro.png';
import postman from '../assets/postman.png';
import jira from '../assets/Jira.png';
import teams from '../assets/teams.svg';
import gitHub from '../assets/gitHub.png';
import git from '../assets/git.png';
import photoshop from '../assets/photoshop.png';
import salesforce from '../assets/salesforce.png';

const Skills = () => {
  const skillsIcons = [html, css, tailwind, javascript, node, react, mongo, python];
  const skillsName = [
    'html',
    'css',
    'tailwind',
    'javascript',
    'node',
    'react',
    'mongo',
    'python',
  ];

  const otherSkills = [salesforce, postman, git, gitHub, jira, teams, miro, photoshop];
  const otherSkillsName = [
    'salesforce',
    'postman',
    'git',
    'gitHub',
    'jira',
    'teams',
    'miro',
    'photoshop',
  ];

  return (
    <>
      <div className="w-full sm:h-full mt-[120px] p-2">
        <div className="max-w-[1240px] mx-auto flex flex-col justify-center">
          <p className="text-xl tracking-widest uppercase text-pink-600 font-semibold">
            Skills
          </p>
          <h2 className="py-4">Languages</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillsIcons.map((icon, index) => (
              <div
                key={skillsName[index]}
                className="p-6 shadow-2xl rounded-xl hover:scale-105 ease-in duration-300"
              >
                <div className="grid grid-cols-2 gap-4 justify-center items-center">
                  <div className="m-auto">
                    <img src={icon} alt={skillsName[index]} width="64px" height="64px" />
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <h3>{skillsName[index]}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <h2 className="py-4 mt-6">Other Technologies</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {otherSkills.map((icon, index) => (
              <div
                key={otherSkillsName[index]}
                className="p-6 shadow-2xl rounded-xl hover:scale-105 ease-in duration-300"
              >
                <div className="grid grid-cols-2 gap-4 justify-center items-center">
                  <div className="m-auto">
                    <img
                      src={icon}
                      alt={otherSkillsName[index]}
                      width="64px"
                      height="64px"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <h3>{otherSkillsName[index]}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
