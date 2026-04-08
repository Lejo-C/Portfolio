import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, ChevronRight, Sparkles } from 'lucide-react';

const Pricing = () => {
    const plans = [
        {
            name: 'Starter Project',
            price: '₹2,999',
            description: 'Perfect for landing pages and simple portfolios.',
            features: [
                'Up to 3 Static Pages',
                'Fully Responsive Design',
                'Basic SEO Setup',
                'Contact Form Integration',
                'Standard 7-day Support'
            ],
            buttonText: 'Start Building',
            popular: false
        },
        {
            name: 'Advanced Project',
            price: '₹4,999',
            description: 'Ideal for dynamic web apps and small businesses.',
            features: [
                'Full Stack MERN App',
                'Dynamic Database Integration',
                'Custom Admin Panel',
                'Advanced SEO & Analytics',
                'Priority 30-day Support'
            ],
            buttonText: 'Go Advanced',
            popular: true
        },
        {
            name: 'Custom Project',
            price: "Let's Talk",
            description: 'Tailored solutions for complex and scalable ideas.',
            features: [
                'Complex Business Logic',
                'Scalable Architecture',
                'Third-Party API Integrations',
                'Dedicated Long-Term Maintenance',
                '24/7 Premium Support'
            ],
            buttonText: 'Discuss Project',
            popular: false
        }
    ];

    return (
        <section id="pricing" className="py-20 bg-background relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] -z-10 mix-blend-screen -translate-y-1/2" />
            
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/50">Pricing Plans</h2>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-blue-500 mx-auto rounded-full blur-[1px] mb-6"></div>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Transparent and flexible pricing tailored to your project's needs. Let's bring your ideas to life.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8 items-center max-w-6xl mx-auto">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                            className={`relative bg-card/40 backdrop-blur-xl p-8 rounded-3xl border ${plan.popular ? 'border-primary/50 shadow-[0_0_40px_rgba(var(--primary),0.2)] scale-105 z-10' : 'border-border/50 shadow-sm'} hover:-translate-y-2 transition-all duration-300 flex flex-col h-full`}
                        >
                            {plan.popular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-blue-500 text-white px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase flex items-center gap-1 shadow-lg">
                                    <Sparkles size={14} /> Most Popular
                                </div>
                            )}

                            <div className="mb-8">
                                <h3 className="text-xl font-bold text-foreground mb-2">{plan.name}</h3>
                                <div className="flex items-baseline gap-2 mb-4">
                                    <span className="text-4xl font-black bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-400">{plan.price}</span>
                                    {plan.price !== "Let's Talk" && <span className="text-muted-foreground text-sm font-medium">/project</span>}
                                </div>
                                <p className="text-sm text-muted-foreground">{plan.description}</p>
                            </div>

                            <hr className="border-border/50 mb-8" />

                            <div className="flex-grow">
                                <ul className="space-y-4 mb-8">
                                    {plan.features.map((feature, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <CheckCircle2 className="text-primary shrink-0 mt-0.5" size={18} />
                                            <span className="text-sm text-foreground/80 font-medium">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <a
                                href="#contact"
                                className={`w-full py-4 rounded-xl font-bold text-center transition-all duration-300 flex justify-center items-center gap-2 group ${plan.popular ? 'bg-primary text-primary-foreground hover:shadow-[0_0_20px_rgba(var(--primary),0.4)]' : 'bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground'}`}
                            >
                                {plan.buttonText}
                                <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;
