import React from 'react';
import styles from './FeatureSection.module.css';

const FeatureSection = () => {
  const features = [
    {
      label: 'Feature 1',
      title: 'Work smarter',
      iconUrl: 'https://img.icons8.com/nolan/96/seed-of-life.png',
      description: 'Expand productivity, collaboration and creativity. With three compute engines working in concert to tackle emerging AI workloads directly on the PC to gain power-efficient performance.'
    },
    {
      label: 'Feature 2',
      title: 'Create sharper',
      iconUrl: 'https://img.icons8.com/nolan/96/windows10-personalization.png',
      description: 'Elevate your creativity with greater speed, accuracy and security. Dozens of optimized AI tools and apps at your fingertips help you create polished images and videos better and faster.'
    },
    {
      label: 'Feature 3',
      title: 'Increased security',
      iconUrl: 'https://img.icons8.com/nolan/96/security-checked.png',
      description: 'Protect your users, data and business with AI-enhanced, advanced threat detection, data and application protection and above and below-the-OS security—all included out of the box.'
    }
  ];

  return (
    <section id="feature-section" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          More productive. More creative. More secure.
        </h2>
        <p className={styles.subtitle}>
          Leader Copilot+ AI PCs are built to make you a leader in AI. Intel's AI is the key to next-level processor performance - making everything you do easier, faster, and better.
        </p>
      </div>

      <div className={styles.imageWrapper}>
        <img 
          src="https://content.leadermarketing.com.au/assets/uploads/girl-using-leader-copilot-plus-ai-pc-1920x789-1.jpg" 
          alt="Background" 
          className={styles.image}
        />
      </div>

      <div className={styles.container}>
        <div className={styles.grid}>
          {features.map((feature, index) => (
            <div key={index} className={styles.card}>
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

export default FeatureSection;