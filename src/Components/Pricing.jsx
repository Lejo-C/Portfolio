import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, ChevronRight, Sparkles } from 'lucide-react';

const Pricing = () => {
    const plans = [
        {
            name: 'Starter',
            price: '₹2,999',
            description: 'A clean, professional website for simple needs.',
            features: [
                'Up to 3 Pages',
                'Responsive Design',
                'Modern UI Design',
                'Contact Form',
                'Basic SEO Setup',
                'Deployment Assistance',
                '7-Day Bug Support'
            ],
            buttonText: 'Start a Project',
            popular: false
        },
        {
            name: 'Business',
            price: '₹5,999',
            description: 'A polished website built to represent your business.',
            features: [
                'Up to 6 Pages',
                'Custom Responsive UI',
                'Interactive Animations',
                'Lead / Contact Forms',
                'SEO Setup',
                'Google Analytics',
                'Deployment & Domain Setup',
                '14-Day Bug Support'
            ],
            buttonText: 'Choose Business',
            popular: true
        },
        {
            name: 'Custom',
            price: "Let's Talk",
            description: 'For web apps and projects with custom requirements.',
            features: [
                'Custom Web Application',
                'Advanced Features & Workflows',
                'Database & API Integration',
                'Authentication',
                'Admin Dashboard',
                'Third-Party Integrations',
                'Performance Optimization',
                'Ongoing Maintenance Available'
            ],
            buttonText: 'Discuss Project',
            popular: false
        }
    ];

    return (
        <section
            id="pricing"
            className="py-20 bg-background relative overflow-hidden"
        >
            <div className="container mx-auto px-6">

                {/* Section Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight text-foreground">
                        Pricing Plans
                    </h2>

                    <div className="w-24 h-1.5 bg-primary mx-auto rounded-full mb-6" />

                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Simple packages for different project sizes.
                        Need something different? Let's build a custom solution.
                    </p>
                </motion.div>

                {/* Pricing Cards */}
                <div className="grid md:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">

                    {plans.map((plan, index) => (
                        <motion.div
                            key={plan.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.12
                            }}
                            className={`
                                relative
                                bg-card
                                p-8
                                rounded-3xl
                                border
                                flex
                                flex-col
                                h-full
                                transition-all
                                duration-300
                                hover:-translate-y-2
                                ${
                                    plan.popular
                                        ? 'border-primary shadow-lg md:scale-105 z-10'
                                        : 'border-border hover:border-primary/40'
                                }
                            `}
                        >

                            {/* Popular Badge */}
                            {plan.popular && (
                                <div className="
                                    absolute
                                    -top-4
                                    left-1/2
                                    -translate-x-1/2
                                    bg-primary
                                    text-primary-foreground
                                    px-4
                                    py-1.5
                                    rounded-full
                                    text-xs
                                    font-bold
                                    tracking-wide
                                    uppercase
                                    flex
                                    items-center
                                    gap-1.5
                                ">
                                    <Sparkles size={14} />
                                    Most Popular
                                </div>
                            )}

                            {/* Plan Header */}
                            <div className="mb-8">

                                <h3 className="text-xl font-bold text-foreground mb-3">
                                    {plan.name}
                                </h3>

                                <div className="flex items-baseline gap-2 mb-4">

                                    <span className="
                                        text-4xl
                                        font-black
                                        text-primary
                                    ">
                                        {plan.price}
                                    </span>

                                    {plan.price !== "Let's Talk" && (
                                        <span className="
                                            text-muted-foreground
                                            text-sm
                                            font-medium
                                        ">
                                            /project
                                        </span>
                                    )}

                                </div>

                                <p className="
                                    text-sm
                                    text-muted-foreground
                                    leading-relaxed
                                ">
                                    {plan.description}
                                </p>

                            </div>

                            <hr className="border-border mb-8" />

                            {/* Features */}
                            <div className="flex-grow">

                                <ul className="space-y-4 mb-8">

                                    {plan.features.map((feature) => (
                                        <li
                                            key={feature}
                                            className="flex items-start gap-3"
                                        >

                                            <CheckCircle2
                                                className="text-primary shrink-0 mt-0.5"
                                                size={18}
                                            />

                                            <span className="
                                                text-sm
                                                text-foreground/80
                                                font-medium
                                            ">
                                                {feature}
                                            </span>

                                        </li>
                                    ))}

                                </ul>

                            </div>

                            {/* CTA */}
                            <a
                                href="#contact"
                                className={`
                                    w-full
                                    py-4
                                    rounded-xl
                                    font-bold
                                    text-center
                                    transition-all
                                    duration-300
                                    flex
                                    justify-center
                                    items-center
                                    gap-2
                                    group
                                    ${
                                        plan.popular
                                            ? 'bg-primary text-primary-foreground hover:brightness-110'
                                            : 'bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground'
                                    }
                                `}
                            >

                                {plan.buttonText}

                                <ChevronRight
                                    size={18}
                                    className="
                                        group-hover:translate-x-1
                                        transition-transform
                                    "
                                />

                            </a>

                        </motion.div>
                    ))}

                </div>

                {/* Small note */}
                <p className="
                    text-center
                    text-xs
                    text-muted-foreground
                    mt-10
                ">
                    Final pricing may vary depending on project requirements.
                </p>

            </div>
        </section>
    );
};

export default Pricing;