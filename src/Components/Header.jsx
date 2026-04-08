import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import profileImg from '../assets/Lejo.png';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Projects', href: '#projects' },
        { name: 'Pricing', href: '#pricing' },
        { name: 'Certifications', href: '#certifications' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
                }`}
        >
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <a href="#home" className="text-2xl font-bold bg-gradient-to-r from-primary via-purple-400 to-blue-500 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300">
                    Lejo C
                </a>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex space-x-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-foreground/80 hover:text-primary transition-colors font-medium"
                        >
                            {link.name}
                        </a>
                    ))}
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-foreground"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Navigation */}
            {isMobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="md:hidden bg-background border-b border-border absolute w-full"
                >
                    <div className="flex flex-col px-6 py-4 space-y-4">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-foreground/80 hover:text-primary transition-colors font-medium"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                </motion.div>
            )}
        </header>
    );
};

export const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
            {/* Advanced Background Elements */}
            <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] -z-10 animate-pulse mix-blend-screen" />
            <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-[120px] -z-10 animate-pulse delay-700 mix-blend-screen" />

            <div className="container mx-auto px-6 text-center flex flex-col items-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="mb-8 relative"
                >
                    <div className="w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden border-[6px] border-background shadow-[0_0_40px_rgba(var(--primary),0.3)] relative z-10 m-auto ring-4 ring-primary/30">
                        <img
                            src={profileImg}
                            alt="Lejo C"
                            className="w-full h-full object-cover scale-110 hover:scale-100 transition-transform duration-700 cursor-pointer"
                        />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary to-blue-500 rounded-full blur-2xl -z-10 opacity-40 animate-pulse"></div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <h2 className="text-xl md:text-2xl font-medium text-primary tracking-wide mb-4 uppercase text-sm">Hello, I'm</h2>
                    <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/50">
                        Lejo C
                    </h1>
                    <h3 className="text-2xl md:text-4xl text-foreground/80 mb-8 font-light flex items-center justify-center gap-3">
                        Full Stack Developer <span className="text-primary opacity-50">|</span> <span className="font-medium bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-primary">MERN</span>
                    </h3>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
                        I craft dynamic, high-performance web applications with a focus on seamless user experiences, scalable architecture, and cutting-edge design.
                    </p>

                    <div className="flex justify-center space-x-6">
                        <a href="#contact" className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold hover:shadow-[0_0_20px_rgba(0,0,0,0.4)] hover:scale-105 transition-all duration-300">
                            Get in Touch
                        </a>
                        <a href="#projects" className="px-8 py-4 border border-border bg-card/50 backdrop-blur-md hover:bg-white/10 hover:text-foreground rounded-full font-semibold hover:border-primary/50 transition-all duration-300">
                            View Work
                        </a>
                    </div>

                    <div className="mt-16 mb-5 flex justify-center space-x-8 text-muted-foreground">
                        <a href="https://github.com/Lejo-C" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors hover:scale-110 transform duration-200">
                            <Github size={28} />
                        </a>
                        <a href="https://www.linkedin.com/in/lejo-c" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors hover:scale-110 transform duration-200">
                            <Linkedin size={28} />
                        </a>
                        <a href="mailto:lejo3027@gmail.com" className="hover:text-primary transition-colors hover:scale-110 transform duration-200">
                            <Mail size={28} />
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Header;
