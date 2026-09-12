import React from 'react';
import { motion } from 'motion/react';
import { Code, Database, Layout, Terminal, Cpu, Globe } from 'lucide-react';

const About = () => {
    const skills = [
        { name: 'Full Stack (MERN)', icon: <Database size={24} />, description: 'Building end-to-end applications' },
        { name: 'JavaScript', icon: <Code size={24} />, description: 'React, Node.js, Express' },
        { name: 'UI/UX Design', icon: <Layout size={24} />, description: 'Responsive & Accessible Layouts' },
        { name: 'Prototyping', icon: <Cpu size={24} />, description: 'Rapid development & debugging' },
        { name: 'Web Technologies', icon: <Globe size={24} />, description: 'HTML5, CSS3, Modern Web APIs' },
        { name: 'Backend Logic', icon: <Terminal size={24} />, description: 'API Design & Database Management' },
    ];

    return (
        <section id="about" className="py-20 bg-secondary/30">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >43
                    <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/50">About Me</h2>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-blue-500 mx-auto rounded-full blur-[1px]"></div>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3"><Terminal className="text-primary"/> Education & Background</h3>
                        <div className="bg-card/50 backdrop-blur-xl p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgba(var(--primary),0.05)] border border-border/50 relative group overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-all duration-500 -z-10"></div>
                            <div className="mb-6 relative z-10">
                                <h4 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500 mb-2">Rajalakshmi Engineering College</h4>
                                <p className="text-foreground/90 font-medium text-lg">Department of AI & DS</p>
                                <div className="text-muted-foreground text-sm mt-2 flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-primary/70"></div>
                                <p>Focused on Data Structures, Algorithms, and Web Development.</p>
                                </div>

                            </div>
                            <p className="text-muted-foreground/90 leading-relaxed relative z-10 text-[1.05rem]">
                                I am a passionate developer with a strong foundation in Artificial Intelligence and Data Science.
                                My journey in tech is driven by a curiosity to understand how things work and a desire to build
                                impactful solutions. I specialize in the MERN stack and love creating seamless user experiences.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3"><Code className="text-primary"/> Technical Skills</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {skills.map((skill, index) => (
                                <div
                                    key={index}
                                    className="group bg-card/40 backdrop-blur-md p-5 rounded-2xl border border-border/50 hover:border-primary/50 hover:bg-card/80 shadow-sm hover:shadow-[0_8px_20px_rgba(var(--primary),0.1)] transition-all duration-300 flex items-start space-x-4 cursor-default transform hover:-translate-y-1 relative overflow-hidden"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    <div className="p-3 bg-gradient-to-br from-primary/20 to-blue-500/20 text-primary rounded-xl shadow-inner group-hover:scale-110 transition-transform duration-300">
                                        {skill.icon}
                                    </div>
                                    <div className="relative z-10">
                                        <h4 className="font-semibold text-foreground tracking-tight group-hover:text-primary transition-colors">{skill.name}</h4>
                                        <p className="text-[13px] text-muted-foreground mt-1.5 leading-snug">{skill.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
