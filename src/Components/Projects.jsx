import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import portfolio from '../assets/portfolio.png';
import ncc from '../assets/NCC.png';

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
            title: 'Expense Tracker',
            description: 'A simple yet powerful Income Expense Calculator with CRUD operations.',
            tags: ['HTML', 'CSS', 'JavaScript'],
            image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80&w=1000',
            github: 'https://github.com/Lejo-C/todoList',
            demo: 'https://todolist3027.netlify.app/',
        },
        {
            title: 'Portfolio',
            description: 'A simple Portfolio website built with React and Tailwind CSS for myself.',
            tags: ['React', 'Tailwind CSS'],
            image: portfolio,
            github: 'https://github.com/Lejo-C/Portfolio',
            demo: 'https://portfolio-lejo-c.netlify.app/',
        },
        {
            title: 'E-Commerce',
            description: 'A E-Commerce website built with React, Tailwind CSS, Node.js, Mongo DB.',
            tags: ['React', 'Node.js', 'Mongo DB', 'Tailwind CSS'],
            image: 'https://media.licdn.com/dms/image/v2/D4D22AQFOVnVqxVz6dg/feedshare-shrink_1280/B4DZrqOA_PIEAo-/0/1764866134140?e=1766620800&v=beta&t=NveoX7RHUKXRCX4crrE-2NV79gZ17xu4u55demH_Mws',
            github: 'https://github.com/Lejo-C/E-Commerce',
            demo: 'https://e-commerce-iet3.onrender.com/',
        },
        {
            title: 'Ncc Portal',
            description: 'A portal where we can manage our NCC activities.',
            tags: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
            image: ncc,
            github: 'https://github.com/Lejo-C/Ncc_Portal-/tree/master',
            demo: 'https://ncc-portal.onrender.com/',
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
                    <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/50">Featured Projects</h2>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-blue-500 mx-auto rounded-full blur-[1px] mb-6"></div>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Here are some of the projects I've worked on. Each one presented unique challenges and learning opportunities.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center items-center">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: index * 0.15, type: 'spring', bounce: 0.4 }}
                            className="group relative rounded-3xl overflow-hidden bg-card/60 backdrop-blur-xl border border-border/50 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgba(var(--primary),0.05)] hover:shadow-[0_8px_30px_rgba(var(--primary),0.2)] transition-all duration-500 hover:-translate-y-3"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            
                            <div className="relative h-56 overflow-hidden rounded-t-3xl border-b border-border/50">
                                <div className="absolute inset-0 bg-primary/20 backdrop-blur-[2px] group-hover:bg-transparent group-hover:backdrop-blur-0 transition-all duration-500 z-10" />
                                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60 z-[5]"></div>
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                                />
                            </div>

                            <div className="p-8 relative z-20">
                                <h3 className="text-2xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70 group-hover:from-primary group-hover:to-purple-400 transition-all duration-300 tracking-tight">{project.title}</h3>
                                <p className="text-muted-foreground text-sm mb-6 leading-relaxed line-clamp-3">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-8">
                                    {project.tags.map((tag, i) => (
                                        <span key={i} className="px-4 py-1.5 bg-primary/10 text-primary text-xs rounded-full font-semibold tracking-wide border border-primary/20">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex justify-between items-center pt-5 border-t border-border/50">
                                    <a href={project.github} className="flex items-center text-sm font-semibold text-muted-foreground hover:text-primary transition-colors group/link p-2 -ml-2 rounded-lg hover:bg-primary/5">
                                        <Github size={18} className="mr-2 group-hover/link:scale-110 transition-transform" /> Code
                                    </a>
                                    <a href={project.demo} className="flex items-center text-sm font-semibold text-foreground bg-primary/10 hover:bg-primary hover:text-primary-foreground px-4 py-2 rounded-xl transition-all duration-300">
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
