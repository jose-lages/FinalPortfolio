import react from '../assets/react.svg';
import react2 from '../assets/react.svg';
import php from '../assets/php.png';
import movieApp from '../assets/movie.png';

const Projects = () => {
  const projectImage = [php, movieApp, react, react2];
  const projectName = [
    'Personal Home Page',
    'Movie Review App',
    'e-Shop / in progress',
    'chat app / in progress',
  ];
  const projectLink = [
    'https://github.com/jose-lages/movie-review-app-mern',
    'https://github.com/jose-lages/movie-review-app-mern',
    'https://github.com/jose-lages/movie-review-app-mern',
    '#',
  ];

  return (
    <div name="work" className="w-full md:h-screen mt-[120px] text-gray-300 bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            Projects
          </p>
          <p className="py-6">Some case studies that I have worked on</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {projectImage.map((image, index) => (
            <div
              key={projectName[index]}
              style={{ backgroundImage: `url(${image})` }}
              className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
            >
              {/* hover */}
              <div className="opacity-0 group-hover:opacity-100">
                <span className="text-2xl font-bold text-white tracking-wider">
                  {projectName[index]}
                </span>
                <div className="pt-8 text-center">
                  <a href={projectLink[index]} target="_blank" rel="noreferrer">
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
