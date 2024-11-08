import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import styles from './ProductSection.module.css';

const ProductCard = ({ product }) => (
  <div className={styles.card}>
    <div className={styles.imageContainer}>
      <img src={product.image} alt={product.name} className={styles.image} />
    </div>
    <h3 className={styles.cardTitle}>{product.name}</h3>
    <ul className={styles.specsList}>
      {product.specs.map((spec, index) => (
        <li key={index} className={styles.specItem}>
          <span className={styles.bullet}>•</span>
          {spec}
        </li>
      ))}
    </ul>
    <a href={product.shopUrl} className={styles.button}>Shop now</a>
  </div>
);

const ProductSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const products = [
    {
      name: "LEADER Companion Copilot+AI PC Ultra 5",
      image: "https://content.leadermarketing.com.au/assets/uploads/SCU6-C2-U516H_with-badge.png",
      shopUrl: "https://www.leadersystems.com.au/products.html?vVN1lsOvI7E=/9g07bxIw5XF+Z5pBN4BKg==xmR4xJYnOjOUlsCBeVoTNqLRk55/",
      specs: [
        "Intel® Core™ Ultra 5 Processor 226V 8M Cache, up to 4.50 GHz",
        "Windows 11 Home",
        "16GB LPDDR5X onboard memory",
        "1TB M.2 NVMe™ PCIe® 4.0 SSD",
        '16" QHD+ Display',
        "Intel® Arc™ Graphics 130V",
        "Intel® AI NPU with Copilot Key",
        "2 Years Australia Wide Onsite Warranty"
      ]
    },
    {
      name: "LEADER Companion Copilot+AI PC Ultra 5 Pro",
      image: "https://content.leadermarketing.com.au/assets/uploads/SCU6-C2-U516P_with-badge.png",
      shopUrl: "https://www.leadersystems.com.au/products.html?6CPUpp419Gk=rzwsss5joewpNw3vtWPAUQ==Qjw7HWO7FY03f3XWg68dS387hdog",
      specs: [
        "Intel® Core™ Ultra 5 Processor 226V 8M Cache, up to 4.50 GHz",
        "Windows 11 Professional",
        "16GB LPDDR5X onboard memory",
        "1TB M.2 NVMe™ PCIe® 4.0 SSD",
        '16" QHD+ Display',
        "Intel® Arc™ Graphics 130V",
        "Intel® AI NPU with Copilot Key",
        "2 Years Australia Wide Onsite Warranty"
      ]
    },
    {
      name: "LEADER Companion Copilot+AI PC Ultra 7",
      image: "https://content.leadermarketing.com.au/assets/uploads/SCU6-C2-U732H_with-badge.png",
      shopUrl: "https://www.leadersystems.com.au/products.html?Aq80gf3hCPw=+PGC1iKK+E8tuxGOYRHsrw==X6WGCtluOHKvXUQpPW8EH3cUUjyW",
      specs: [
        "Intel® Core™ Ultra 7 Processor 258V 12M Cache, up to 4.80 GHz",
        "Windows 11 Home",
        "32GB LPDDR5X onboard memory",
        "1TB M.2 NVMe™ PCIe® 4.0 SSD",
        '16" QHD+ Display',
        "Intel® Arc™ Graphics 140V",
        "Intel® AI NPU with Copilot Key",
        "2 Years Australia Wide Onsite Warranty"
      ]
    },
    {
      name: "LEADER Companion Copilot+AI PC Ultra 7 Pro",
      image: "https://content.leadermarketing.com.au/assets/uploads/SCU6-C2-U732P_with-badge-1.png",
      shopUrl: "https://www.leadersystems.com.au/products.html?9yEgFMELseg=y7PSzuPHeJyb3vNJeis1EQ==oh7MNAZlMppJeCG4uOEB08mhuZNT",
      specs: [
        "Intel® Core™ Ultra 7 Processor 258V 12M Cache, up to 4.80 GHz",
        "Windows 11 Professional",
        "32GB LPDDR5X onboard memory",
        "1TB M.2 NVMe™ PCIe® 4.0 SSD",
        '16" QHD+ Display',
        "Intel® Arc™ Graphics 140V",
        "Intel® AI NPU with Copilot Key",
        "2 Years Australia Wide Onsite Warranty"
      ]
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === products.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? products.length - 1 : prev - 1));
  };

  return (
    <section id="shop-section" className={styles.container}>
      <header className={styles.header}>
        <h2 className={styles.title}>Find your LEADER Copilot+ AI PC</h2>
        <p className={styles.subtitle}>
          Experience the future of computing with the best Australian made AI PCs
        </p>
        <p className={styles.disclaimer}>
            * Copilot+ PC experiences are coming. Requires free updates available starting later this year. 
            Timing varies by device and region. See <a href="https://aka.ms/copilotpluspcs" target="_blank" rel="noopener noreferrer">aka.ms/copilotpluspcs</a>
        </p>
      </header>

      {isMobile ? (
        <div className={styles.carousel}>
          <div 
            className={styles.carouselTrack}
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {products.map((product, index) => (
              <div key={index} className={styles.carouselSlide}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
          
          <button 
            onClick={prevSlide} 
            className={`${styles.navButton} ${styles.prevButton}`}
          >
            <ChevronLeft />
          </button>
          
          <button 
            onClick={nextSlide} 
            className={`${styles.navButton} ${styles.nextButton}`}
          >
            <ChevronRight />
          </button>

          <div className={styles.dots}>
            {products.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`${styles.dot} ${currentSlide === index ? styles.active : ''}`}
              />
            ))}
          </div>
        </div>
      ) : (
        <div className={styles.grid}>
          {products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      )}
    </section>
  );
};

export default ProductSection;