const AboutPage = () => {
    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h1 className="text-5xl font-extrabold text-gray-800 mb-8 text-center">
                About Me
            </h1>
            <div className="bg-gray-50 p-10 rounded-xl shadow-lg">
                <div className="prose prose-lg max-w-none">
                    <p className="text-gray-700 leading-relaxed mb-8">
                        I'm a passionate web developer with experience in modern web technologies.
                        I love creating beautiful and functional applications that solve real-world
                        problems.
                    </p>
                    <h2 className="text-3xl font-bold text-gray-800 mb-6">Experience</h2>
                    <ul className="list-disc pl-5 space-y-4 text-gray-700">
                        <li>
                            <span className="font-medium text-gray-800">Senior Developer</span> at
                            Company A (2020-Present)
                        </li>
                        <li>
                            <span className="font-medium text-gray-800">Web Developer</span> at
                            Company B (2018-2020)
                        </li>
                        <li>
                            <span className="font-medium text-gray-800">Junior Developer</span> at
                            Company C (2016-2018)
                        </li>
                    </ul>
                    <h2 className="text-3xl font-bold text-gray-800 mt-10 mb-6">Education</h2>
                    <ul className="list-disc pl-5 space-y-4 text-gray-700">
                        <li>
                            <span className="font-medium text-gray-800">BS in Computer Science</span>{" "}
                            - University XYZ
                        </li>
                        <li>
                            <span className="font-medium text-gray-800">Web Development Bootcamp</span>{" "}
                            - Code Academy
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;
