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
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h3 className="text-2xl font-semibold mb-6">Education & Background</h3>
                        <div className="bg-card p-8 rounded-2xl shadow-sm border border-border">
                            <div className="mb-6">
                                <h4 className="text-xl font-bold text-primary">Rajalakshmi Engineering College</h4>
                                <p className="text-foreground/80 font-medium">Department of AI & DS</p>
                                <p className="text-muted-foreground text-sm mt-2">Focused on Data Structures, Algorithms, and Web Development.</p>
                            </div>
                            <p className="text-muted-foreground leading-relaxed">
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
                        <h3 className="text-2xl font-semibold mb-6">Technical Skills</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {skills.map((skill, index) => (
                                <div
                                    key={index}
                                    className="bg-card p-4 rounded-xl border border-border hover:border-primary/50 transition-colors flex items-start space-x-4"
                                >
                                    <div className="p-2 bg-primary/10 text-primary rounded-lg">
                                        {skill.icon}
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-foreground">{skill.name}</h4>
                                        <p className="text-xs text-muted-foreground mt-1">{skill.description}</p>
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
