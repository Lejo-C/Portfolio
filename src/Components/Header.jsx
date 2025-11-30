import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import profileImg from '../assets/Lejo.jpg';

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
        { name: 'Certifications', href: '#certifications' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
                }`}
        >
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <a href="#home" className="text-2xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
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
            {/* Background Elements */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl -z-10 animate-pulse" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl -z-10 animate-pulse delay-1000" />

            <div className="container mx-auto px-6 text-center flex flex-col items-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="mb-8 relative"
                >
                    <div className="w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl relative z-10">
                        <img
                            src={profileImg}
                            alt="Lejo C"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl -z-10 animate-pulse"></div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <h2 className="text-xl md:text-2xl font-medium text-primary mb-4">Hello, I'm</h2>
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
                        Lejo C
                    </h1>
                    <h3 className="text-2xl md:text-4xl text-foreground/80 mb-8 font-light">
                        Full Stack Developer <span className="text-primary">|</span> MERN
                    </h3>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
                        Love to learn new skills and build scalable solutions.
                    </p>

                    <div className="flex justify-center space-x-6">
                        <a href="#contact" className="px-8 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:opacity-90 transition-opacity shadow-lg shadow-primary/25">
                            Get in Touch
                        </a>
                        <a href="#projects" className="px-8 py-3 border border-border bg-card hover:bg-accent hover:text-accent-foreground rounded-full font-medium transition-colors">
                            View Work
                        </a>
                    </div>

                    <div className="mt-16 flex justify-center space-x-8 text-muted-foreground">
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
