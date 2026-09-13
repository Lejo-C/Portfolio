import React from "react";
import { motion } from "motion/react";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";

import gym from "../assets/gym.png";
import ecommerces from "../assets/ecommerces.png";
import saas from "../assets/saas.png";

const Projects = () => {
    const projects = [
        {
            title: "PRO GYM",
            category: "Marketing / Landing Page",
            description:
                "A high-impact fitness website designed to showcase memberships, training programs, facilities, and drive new enquiries.",
            image: gym,
            demo: "https://symphonious-kangaroo-21f3e8.netlify.app/",
            github:
                "https://github.com/Lejo-C/Business/tree/main/GYM",
            tags: ["React", "Tailwind CSS", "Responsive UI"],
        },

        {
            title: "Northfield",
            category: "E-commerce / Product Experience",
            description:
                "A premium home and lifestyle storefront with product discovery, filtering, product details, cart, and checkout flows.",
            image: ecommerces,
            demo: "https://ecommerces2323.netlify.app/",
            github:
                "https://github.com/Lejo-C/Business/tree/main/ecommerces",
            tags: ["React", "Tailwind CSS", "E-commerce"],
        },

        {
            title: "ClientFlow",
            category: "SaaS / Business Application",
            description:
                "A business dashboard for managing leads, clients, projects, tasks, invoices, and analytics from one workspace.",
            image: saas,
            demo: "https://saasdashboarddemo001.netlify.app/",
            github:
                "https://github.com/Lejo-C/Business/tree/main/Saas",
            tags: ["React", "Tailwind CSS", "Recharts", "Lucide"],
        },
    ];

    return (
        <section id="projects" className="py-24 bg-background">
            <div className="container mx-auto px-6">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <p className="text-primary text-sm font-semibold uppercase tracking-[0.2em] mb-3">
                        Selected Work
                    </p>

                    <h2 className="text-4xl md:text-5xl font-black tracking-tight text-foreground mb-5">
                        Featured Projects
                    </h2>

                    <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6" />

                    <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                        Three projects across different types of web experiences,
                        from marketing websites to e-commerce and SaaS applications.
                    </p>
                </motion.div>


                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7 max-w-7xl mx-auto">

                    {projects.map((project, index) => (
                        <motion.article
                            key={project.title}
                            initial={{
                                opacity: 0,
                                y: 35,
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                            }}
                            viewport={{
                                once: true,
                                margin: "-80px",
                            }}
                            transition={{
                                duration: 0.55,
                                delay: index * 0.1,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className="
                                group
                                relative
                                flex
                                flex-col
                                overflow-hidden
                                rounded-3xl
                                bg-card
                                border
                                border-border
                                transition-all
                                duration-300
                                hover:-translate-y-2
                                hover:border-primary/40
                                hover:shadow-xl
                            "
                        >

                            {/* Project Image */}
                            <div className="
                                relative
                                h-60
                                overflow-hidden
                                bg-background
                                border-b
                                border-border
                            ">

                                <img
                                    src={project.image}
                                    alt={`${project.title} project preview`}
                                    className="
                                        w-full
                                        h-full
                                        object-cover
                                        transition-transform
                                        duration-700
                                        ease-out
                                        group-hover:scale-105
                                    "
                                />

                                {/* Image Overlay */}
                                <div className="
                                    absolute
                                    inset-0
                                    bg-black/0
                                    group-hover:bg-black/10
                                    transition-colors
                                    duration-300
                                " />

                                {/* Quick Demo Button */}
                                <a
                                    href={project.demo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={`Open ${project.title} live demo`}
                                    className="
                                        absolute
                                        top-4
                                        right-4
                                        w-10
                                        h-10
                                        rounded-full
                                        bg-background
                                        text-foreground
                                        flex
                                        items-center
                                        justify-center
                                        opacity-0
                                        translate-y-2
                                        group-hover:opacity-100
                                        group-hover:translate-y-0
                                        transition-all
                                        duration-300
                                        shadow-lg
                                        hover:bg-primary
                                        hover:text-primary-foreground
                                    "
                                >
                                    <ArrowUpRight size={18} />
                                </a>

                            </div>


                            {/* Project Content */}
                            <div className="
                                p-7
                                flex
                                flex-col
                                flex-1
                            ">

                                {/* Category */}
                                <span className="
                                    text-primary
                                    text-xs
                                    font-semibold
                                    uppercase
                                    tracking-[0.14em]
                                    mb-3
                                ">
                                    {project.category}
                                </span>


                                {/* Project Title */}
                                <h3 className="
                                    text-2xl
                                    font-bold
                                    text-foreground
                                    tracking-tight
                                    mb-3
                                    transition-colors
                                    duration-300
                                    group-hover:text-primary
                                ">
                                    {project.title}
                                </h3>


                                {/* Description */}
                                <p className="
                                    text-sm
                                    text-muted-foreground
                                    leading-relaxed
                                    mb-6
                                ">
                                    {project.description}
                                </p>


                                {/* Technology Tags */}
                                <div className="
                                    flex
                                    flex-wrap
                                    gap-2
                                    mb-7
                                ">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="
                                                px-3
                                                py-1.5
                                                rounded-lg
                                                border
                                                border-border
                                                bg-background
                                                text-muted-foreground
                                                text-xs
                                                font-medium
                                            "
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>


                                {/* Bottom Actions */}
                                <div className="
                                    mt-auto
                                    pt-5
                                    border-t
                                    border-border
                                    flex
                                    items-center
                                    justify-between
                                ">

                                    {/* GitHub */}
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="
                                            inline-flex
                                            items-center
                                            gap-2
                                            text-sm
                                            font-semibold
                                            text-muted-foreground
                                            hover:text-foreground
                                            transition-colors
                                        "
                                    >
                                        <Github size={17} />
                                        Source
                                    </a>


                                    {/* Live Demo */}
                                    <a
                                        href={project.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="
                                            inline-flex
                                            items-center
                                            gap-2
                                            px-4
                                            py-2.5
                                            rounded-xl
                                            bg-primary
                                            text-primary-foreground
                                            text-sm
                                            font-semibold
                                            transition-all
                                            duration-300
                                            hover:brightness-110
                                            hover:shadow-lg
                                        "
                                    >
                                        Live Demo
                                        <ExternalLink size={16} />
                                    </a>

                                </div>

                            </div>

                        </motion.article>
                    ))}

                </div>

            </div>
        </section>
    );
};

export default Projects;