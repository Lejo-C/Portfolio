import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Send, Github, Linkedin, Mail, Heart, Loader2 } from 'lucide-react';

const Contact = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());

        try {
            const response = await fetch("https://formsubmit.co/ajax/lejo3027@gmail.com", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                setSubmitStatus('success');
                e.target.reset();
                setTimeout(() => setSubmitStatus(null), 5000);
            } else {
                setSubmitStatus('error');
            }
        } catch (error) {
            console.error('Form submission error:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="py-20 bg-background">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6"></div>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Have a project in mind or just want to say hi? Feel free to send me a message.
                    </p>
                </motion.div>

                <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                        <p className="text-muted-foreground mb-8 leading-relaxed">
                            I'm currently open to new opportunities and collaborations.
                            Whether you have a question or just want to connect, I'll try my best to get back to you!
                        </p>

                        <div className="space-y-6">
                            <a href="mailto:lejo3027@gmail.com" className="flex items-center space-x-4 text-foreground/80 hover:text-primary transition-colors p-4 bg-card rounded-xl border border-border">
                                <div className="bg-primary/10 p-3 rounded-full text-primary">
                                    <Mail size={20} />
                                </div>
                                <span className="font-medium">lejo3027@gmail.com</span>
                            </a>
                            <a href="https://www.linkedin.com/in/lejo-c" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4 text-foreground/80 hover:text-primary transition-colors p-4 bg-card rounded-xl border border-border">
                                <div className="bg-primary/10 p-3 rounded-full text-primary">
                                    <Linkedin size={20} />
                                </div>
                                <span className="font-medium">LinkedIn Profile</span>
                            </a>
                            <a href="https://github.com/Lejo-C" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4 text-foreground/80 hover:text-primary transition-colors p-4 bg-card rounded-xl border border-border">
                                <div className="bg-primary/10 p-3 rounded-full text-primary">
                                    <Github size={20} />
                                </div>
                                <span className="font-medium">GitHub Profile</span>
                            </a>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="bg-card p-8 rounded-2xl shadow-sm border border-border"
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* FormSubmit.co Configuration */}
                            <input type="hidden" name="_subject" value="New submission from Portfolio!" />
                            <input type="hidden" name="_captcha" value="false" />

                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    className="w-full px-4 py-3 rounded-lg bg-background border border-input focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                    placeholder="Your Name"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    className="w-full px-4 py-3 rounded-lg bg-background border border-input focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                    placeholder="your@email.com"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    rows={4}
                                    className="w-full px-4 py-3 rounded-lg bg-background border border-input focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                                    placeholder="Your message..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity flex items-center justify-center space-x-2 disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? (
                                    <>
                                        <Loader2 size={18} className="animate-spin" />
                                        <span>Sending...</span>
                                    </>
                                ) : (
                                    <>
                                        <span>Send Message</span>
                                        <Send size={18} />
                                    </>
                                )}
                            </button>

                            {submitStatus === 'success' && (
                                <p className="text-green-500 text-sm text-center mt-2">Email sent successfully!</p>
                            )}
                            {submitStatus === 'error' && (
                                <p className="text-red-500 text-sm text-center mt-2">Failed to send message. Please try again.</p>
                            )}
                        </form>
                    </motion.div>
                </div>
            </div>

            <footer className="mt-20 pt-8 border-t border-border text-center text-muted-foreground">
                <div className="container mx-auto px-6 pb-8">
                    <p className="flex items-center justify-center gap-2 mb-4">
                        Made with <Heart size={16} className="text-red-500 fill-red-500" /> by Lejo C
                    </p>
                    <p className="text-sm">
                        &copy; {new Date().getFullYear()} All rights reserved.
                    </p>
                </div>
            </footer>
        </section>
    );
};

export default Contact;
