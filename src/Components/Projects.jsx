import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            title: 'Exam Platform',
            description: 'A modular exam creation and management system. Allows instructors to create exams and students to take them with real-time results.',
            tags: ['React', 'Node.js', 'MongoDB'],
            image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=1000',
            github: 'https://github.com/Lejo-C/Online_Assignment_Platform',
            demo: 'https://online-assignment-platform.netlify.app/',
        },
        {
            title: 'Todo List',
            description: 'A simple yet powerful Income Expense Calculator with CRUD operations.',
            tags: ['HTML', 'CSS', 'JavaScript'],
            image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80&w=1000',
            github: 'https://github.com/Lejo-C/todoList',
            demo: 'https://todolist3027.netlify.app/',
        },
    ];

    return (
        <section id="projects" className="py-20 bg-background">
            <div className="container mx-auto px-6 ">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6"></div>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Here are some of the projects I've worked on. Each one presented unique challenges and learning opportunities.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center items-center flex flex-wrap">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group bg-card rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-2"
                        >
                            <div className="relative h-48 overflow-hidden">
                                <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-300 z-10" />
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tags.map((tag, i) => (
                                        <span key={i} className="px-3 py-1 bg-secondary text-secondary-foreground text-xs rounded-full font-medium">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex justify-between items-center pt-4 border-t border-border">
                                    <a href={project.github} className="flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                                        <Github size={18} className="mr-2" /> Code
                                    </a>
                                    <a href={project.demo} className="flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors">
                                        Live Demo <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
