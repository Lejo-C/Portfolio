import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import gym from "../assets/gym.png";
import ecommerces from "../assets/ecommerces.png";
import saas from "../assets/saas.png";


const Projects = () => {
    const projects = [
       
        {
    "title": "PRO GYM → Marketing / Landing Page",
    "description": "A modern, high-impact landing page for a premium fitness center, designed to showcase memberships, training programs, facilities, and testimonials. The site uses strong visual hierarchy, responsive layouts, smooth motion, and polished interactive sections to create an energetic experience.",
    "image": gym,
    "demo": "https://symphonious-kangaroo-21f3e8.netlify.app/",
    "github": "https://github.com/Lejo-C/Business/tree/main/GYM",
    "tags": ["Business Website", "React", "TailwindCSS"]
},

{
      "title": "Northfield → E-commerce / Product Experience",
    "description": "A premium home and lifestyle e-commerce experience built around product discovery and a clean shopping flow. It includes a responsive product catalog, category filtering, product details, cart management, checkout flow, and polished UI interactions with a strong focus on usability.",
    "image": ecommerces,
    "demo": "https://ecommerces2323.netlify.app/",
    "github": "https://github.com/Lejo-C/Business/tree/main/ecommerces",
    "tags": ["Business Website", "React", "TailwindCSS"]
},

{
    "title":"ClientFlow → SaaS / Business Application",
    "description":"A frontend SaaS platform designed for agencies to manage their business from one workspace. It includes sales pipelines, client management, projects, tasks, invoices, analytics, interactive charts, search, and responsive dashboard layouts. The interface focuses on clear data presentation and practical workflows rather than decorative UI.",
    "image":saas,
    "demo":"https://saasdashboarddemo001.netlify.app/",
    "github":"https://github.com/Lejo-C/Business/tree/main/Saas",
    "tags":["React, Tailwind CSS, Recharts, Lucide React"]
}
        
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
