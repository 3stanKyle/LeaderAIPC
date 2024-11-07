import React, { useEffect, useRef } from 'react';
import styles from './IntroHero.module.css';

const IntroHero = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && entry.intersectionRatio >= 0.25) {
                    entry.target.classList.add(styles.animate);
                    observer.disconnect();
                }
            },
            {
                threshold: 0.25,
                rootMargin: '0px'
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const features = [
        {
            title: 'Dedicated AI chips',
            iconUrl: 'https://content.leadermarketing.com.au/assets/uploads/Intel-Ultra-Icon.png',
            description: 'All-local AI processing with 45+ TOPS performance, compatible with a wide range of ISVs.',
            targetSection: 'npu-section'
        },
        {
            title: 'Copilot+ AI PC',
            iconUrl: 'https://content.leadermarketing.com.au/assets/uploads/Copilot-Icon.png',
            description: 'Streamline daily tasks with AI assistance capable to tackle most complex challenges.',
            targetSection: 'copilot-section'
        },
        {
            title: 'Comprehensive AI',
            iconUrl: 'https://content.leadermarketing.com.au/assets/uploads/AI-Icon.png',
            description: 'Dozens of optimized AI tools and apps at your fingertips help you do easier, faster, and better.',
            targetSection: 'feature-section'
        }
    ];

    return (
        <section className={styles.section} ref={sectionRef}>
            <div className={styles.container}>
                <h2 className={styles.title}>
                    The fastest, most intelligent Windows AI PCs ever
                </h2>
                <p className={styles.subtitle}>
                    We're proud to present the LEADER Copilot+ AI PCs. powered by Intel® Core™ Ultra™ 200V Series processors 
                    co-engineered with the broadest ISV ecosystem in the PC processor industry, this PCs bring you next-gen AI 
                    experiences, with supercharged speed, efficiency, privacy, security, and personalisation.
                </p>
            </div>

            <div className={styles.container}>
                <div className={styles.grid}>
                    {features.map((feature, index) => (
                        <div 
                            key={index} 
                            className={`${styles.card} ${styles.clickable}`}
                            onClick={() => scrollToSection(feature.targetSection)}
                            role="button"
                            tabIndex={0}
                            onKeyPress={(e) => {
                                if (e.key === 'Enter' || e.key === ' ') {
                                    scrollToSection(feature.targetSection);
                                }
                            }}
                        >
                            <div className={styles.iconWrapper}>
                                <img 
                                    src={feature.iconUrl}
                                    alt={feature.title}
                                    className={styles.icon}
                                />
                            </div>
                            <h3 className={styles.cardTitle}>{feature.title}</h3>
                            <p className={styles.cardText}>{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default IntroHero;