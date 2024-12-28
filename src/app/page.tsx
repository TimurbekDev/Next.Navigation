import Navbar from "@/components/Navbar";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-center">
      <Navbar />
      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-5xl font-extrabold text-gray-800 mb-6">
          Welcome to My Portfolio
        </h1>
        <p className="text-lg text-gray-600 mb-12">
          Hi, I'm a developer passionate about creating amazing web experiences.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          <div className="bg-white p-8 rounded-lg shadow-lg transition transform hover:-translate-y-1 hover:shadow-2xl">
            <h2 className="text-3xl text-gray-800 font-bold mb-4">Skills</h2>
            <ul className="text-left space-y-3">
              <li className="text-gray-700 flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                React & Next.js
              </li>
              <li className="text-gray-700 flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                Tailwind CSS
              </li>
              <li className="text-gray-700 flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                JavaScript/TypeScript
              </li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg transition transform hover:-translate-y-1 hover:shadow-2xl">
            <h2 className="text-3xl text-gray-800 font-bold mb-4">Latest Work</h2>
            <ul className="text-left space-y-3">
              <li className="text-gray-700 flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                Project 1
              </li>
              <li className="text-gray-700 flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                Project 2
              </li>
              <li className="text-gray-700 flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                Project 3
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
