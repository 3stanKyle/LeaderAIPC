import React from 'react';
import styles from './CopilotSection.module.css';

const CopilotSection = () => {
  return (
    <section id="copilot-section" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          Copilot+ AI PC features: Your new superpower
        </h2>
        <p className={styles.subtitle}>
          Accelerate your productivity and creativity with unique Copilot+ PC experiences. Copilot helps you get answers 
          and inspiration from across the web, supports creativity and collaboration, and helps you focus on the task at hand. 
          Launch Copilot from the Start menu or by using the dedicated Copilot key on your keyboard.
        </p>
        <p className={styles.disclaimer}>
          * Prerelease product shown, subject to change.
        </p>
        
        <div className={styles.imageCard}>
          <img 
            src="https://content.leadermarketing.com.au/assets/uploads/copilot-key-and-app.jpg"
            alt="Copilot Key and Application Interface"
            className={styles.image}
          />
        </div>
      </div>
    </section>
  );
};

export default CopilotSection;