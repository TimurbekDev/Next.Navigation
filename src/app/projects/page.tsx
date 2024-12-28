const ProjectsPage = () => {
    const projects = [
        {
            title: "Project 1",
            description: "A web application built with React and Node.js",
            tech: ["React", "Node.js", "MongoDB"],
            image: "/api/placeholder/400/250"
        },
        {
            title: "Project 2",
            description: "E-commerce platform using Next.js",
            tech: ["Next.js", "Tailwind CSS", "PostgreSQL"],
            image: "/api/placeholder/400/250"
        },
        {
            title: "Project 3",
            description: "Mobile-first web application",
            tech: ["React Native", "Firebase", "Redux"],
            image: "/api/placeholder/400/250"
        }
    ];

    return (
        <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-8">My Projects</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-6">
                            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                            <p className="text-gray-600 mb-4">{project.description}</p>
                            <div className="flex flex-wrap gap-2">
                                {project.tech.map((tech, techIndex) => (
                                    <span
                                        key={techIndex}
                                        className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};


export default ProjectsPage;