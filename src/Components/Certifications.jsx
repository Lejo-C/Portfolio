import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import guviCertificate from '../assets/guvi-certificate.jpg';
import { Award, X, ZoomIn } from 'lucide-react';

const Certifications = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Prevent body scroll when modal is open
    React.useEffect(() => {
        if (isModalOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isModalOpen]);

    return (
        <section id="certifications" className="py-20 bg-secondary/30 relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/50">Certifications</h2>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-blue-500 mx-auto rounded-full blur-[1px]"></div>
                </motion.div>

                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-card/50 backdrop-blur-xl rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgba(var(--primary),0.05)] border border-border/50 hover:shadow-[0_8px_30px_rgba(var(--primary),0.1)] transition-all duration-500 relative group"
                    >
                        <div className="grid md:grid-cols-2 gap-0">
                            <div className="p-8 flex flex-col justify-center relative z-10">
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
                                <div className="text-sm text-muted-foreground font-medium">
                                    Issued by GUVI & IIT-M Pravartak
                                </div>
                            </div>
                            
                            <div 
                                className="relative h-full min-h-[300px] bg-muted cursor-pointer group/img overflow-hidden"
                                onClick={() => setIsModalOpen(true)}
                            >
                                <img
                                    src={guviCertificate}
                                    alt="GUVI Certification"
                                    className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover/img:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
                                    <div className="bg-white/20 p-4 rounded-full backdrop-blur-md text-white shadow-lg transform group-hover/img:scale-110 transition-transform duration-300">
                                        <ZoomIn size={32} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Fullscreen Certificate Modal */}
            <AnimatePresence>
                {isModalOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8 bg-black/80 backdrop-blur-md"
                        onClick={() => setIsModalOpen(false)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            transition={{ type: "spring", bounce: 0.3, duration: 0.5 }}
                            className="relative max-w-5xl w-full max-h-[90vh] rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/20"
                            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image itself
                        >
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="absolute top-4 right-4 z-10 p-2.5 bg-black/50 hover:bg-black/90 text-white rounded-full transition-all hover:scale-110 backdrop-blur-lg border border-white/10"
                            >
                                <X size={24} />
                            </button>
                            
                            <img
                                src={guviCertificate}
                                alt="GUVI Certification Full"
                                className="w-full h-auto max-h-[90vh] object-contain bg-background pointer-events-none"
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Certifications;
