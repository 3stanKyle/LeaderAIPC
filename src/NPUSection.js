import React from 'react';
import styles from './NPUSection.module.css';

const NPUSection = () => {
  const features = [
    {
      title: 'Private by Design',
      iconUrl: 'https://img.icons8.com/nolan/80/user-credentials.png',
      description: 'Local, on-device processing keeps your data secure and private.'
    },
    {
      title: 'Enhanced Battery Life',
      iconUrl: 'https://img.icons8.com/nolan/80/full-battery.png',
      description: 'Optimized for power efficiency, conserving energy for longer use.'
    },
    {
      title: 'Boosted Performance',
      iconUrl: 'https://img.icons8.com/nolan/80/speed-up.png',
      description: 'Built for high-efficiency AI tasks, maximizing speed and responsiveness.'
    }
  ];

  return (
    <section id="npu-section" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          Unmatched AI Compute
        </h2>
        <p className={styles.subtitle}>
          Our advanced NPU drives local AI processing to deliver faster, more efficient, and private AI-powered experiences. 
          By handling complex operations directly on the device, the NPU optimizes response time, minimizes power use, 
          and safeguards data privacy—making every interaction smooth, responsive, and secure.
        </p>
      </div>

      <div className={styles.imageWrapper}>
        <img 
          src="https://content.leadermarketing.com.au/assets/uploads/LEADER_Copilot-PC-NPU-KV_1920x716.jpg" 
          alt="NPU Processor" 
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

export default NPUSection;