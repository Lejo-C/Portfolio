import React from 'react';
import { motion } from 'motion/react';
import guviCertificate from '../assets/guvi-certificate.jpg';
import { Award, ExternalLink } from 'lucide-react';

const Certifications = () => {
    return (
        <section id="certifications" className="py-20 bg-secondary/30">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Certifications</h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
                </motion.div>

                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-card rounded-2xl overflow-hidden shadow-lg border border-border hover:shadow-xl transition-shadow duration-300"
                    >
                        <div className="grid md:grid-cols-2 gap-0">
                            <div className="p-8 flex flex-col justify-center">
                                <div className="flex items-center gap-3 mb-4 text-primary">
                                    <Award size={28} />
                                    <h3 className="text-xl font-bold">Full Stack Development</h3>
                                </div>
                                <h4 className="text-2xl font-bold mb-2">IIT-M Pravartak Certified</h4>
                                <p className="text-muted-foreground mb-6">
                                    Successfully completed the comprehensive Full Stack Development Course with AI Tools, mastering the MERN stack and modern web technologies.
                                </p>
                                <div className="space-y-2 mb-6">
                                    <div className="flex items-center gap-2 text-sm text-foreground/80">
                                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                                        <span>MERN Stack Expertise</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-foreground/80">
                                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                                        <span>AI Tools Integration</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-foreground/80">
                                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                                        <span>Real-world Project Implementation</span>
                                    </div>
                                </div>
                                <div className="text-sm text-muted-foreground">
                                    Issued by GUVI & IIT-M Pravartak
                                </div>
                            </div>
                            <div className="relative h-full min-h-[300px] bg-muted">
                                <img
                                    src={guviCertificate}
                                    alt="GUVI Certification"
                                    className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
                                />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Certifications;
