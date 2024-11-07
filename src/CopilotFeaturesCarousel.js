import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { ArrowLeftCircleIcon, ArrowRightCircleIcon } from 'lucide-react';
import styles from './CopilotFeaturesCarousel.module.css';
import 'swiper/css';
import 'swiper/css/navigation';

const features = [
  {
    id: 'cocreator',
    title: 'CoCreator',
    subtitle: 'Create with Cocreator',
    description: 'Everyone has an imagination and an ability to be an artist. Light your spark with Cocreator.',
    image: 'https://content.leadermarketing.com.au/assets/uploads/copilot-pc-cocreator.png'
  },
  {
    id: 'live-captions',
    title: 'Live Captions',
    subtitle: 'Connect with Live Captions',
    description: 'When you never miss a word, you never miss a beat. Get accurate subtitles in real time with automatic Live Captions.',
    image: 'https://content.leadermarketing.com.au/assets/uploads/copilot-pc-live-captions.png'
  },
  {
    id: 'recall',
    title: 'Recall',
    subtitle: 'Recall instantly',
    description: 'Searching for a document, email or web page on your PC can be time-consuming. Now you can just describe how you remember something and Recall will find it, instantly.',
    image: 'https://content.leadermarketing.com.au/assets/uploads/copilot-pc-recall.png'
  },
  {
    id: 'studio-effects',
    title: 'Windows Studio Effects',
    subtitle: 'Engage your audiences with Windows Studio Effects',
    description: 'Improve lighting and blur distractions in the background during video calls. When presentation matters, turn on Windows Studio Effects.',
    image: 'https://content.leadermarketing.com.au/assets/uploads/copilot-pc-windows-studio-effect.png'
  }
];

const CopilotFeaturesCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [textKey, setTextKey] = useState(0);
  const [swiperInstance, setSwiperInstance] = useState(null);

  useEffect(() => {
    setTextKey(prev => prev + 1);
  }, [activeIndex]);

  const handleTabClick = (index) => {
    if (swiperInstance) {
      swiperInstance.slideToLoop(index, 300);
    }
  };

  const handleNavigation = (direction) => {
    if (swiperInstance) {
      if (direction === 'prev') {
        swiperInstance.slidePrev();
      } else {
        swiperInstance.slideNext();
      }
    }
  };

  return (
    <div className={styles.featuresCarousel}>
      <svg className={styles.gradientDefs}>
        <defs>
          <linearGradient id="arrow-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: '#546ffe', stopOpacity: 1 }}>
              <animate
                attributeName="stop-color"
                values="#546ffe; #7ce7f5; #546ffe"
                dur="4s"
                repeatCount="indefinite"
              />
            </stop>
            <stop offset="100%" style={{ stopColor: '#7ce7f5', stopOpacity: 1 }}>
              <animate
                attributeName="stop-color"
                values="#7ce7f5; #546ffe; #7ce7f5"
                dur="4s"
                repeatCount="indefinite"
              />
            </stop>
          </linearGradient>
        </defs>
      </svg>
      
      <div className={styles.container}>
        <div className={styles.navTabs}>
          {features.map((feature, index) => (
            <button
              key={feature.id}
              className={`${styles.navButton} ${activeIndex === index ? styles.active : ''}`}
              onClick={() => handleTabClick(index)}
            >
              {feature.title}
            </button>
          ))}
        </div>

        <div className={styles.carouselWrapper}>
          <div className={styles.carouselContainer}>
            {/* Navigation Container */}
            <div className={styles.navigationContainer}>
              <button 
                className={styles.navArrowPrev}
                aria-label="Previous slide"
                onClick={() => handleNavigation('prev')}
              >
                <ArrowLeftCircleIcon 
                  strokeWidth={1} 
                  size={56} 
                  className={styles.navArrowIcon}
                />
              </button>
              <button 
                className={styles.navArrowNext}
                aria-label="Next slide"
                onClick={() => handleNavigation('next')}
              >
                <ArrowRightCircleIcon 
                  strokeWidth={1} 
                  size={56} 
                  className={styles.navArrowIcon}
                />
              </button>
            </div>

            <Swiper
              modules={[Navigation]}
              slidesPerView="auto"
              centeredSlides={true}
              loop={true}
              speed={300}
              onSwiper={setSwiperInstance}
              onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
              slideToClickedSlide={true}
              className={styles.featureSwiper}
              breakpoints={{
                0: {
                  spaceBetween: 100,
                  slidesPerView: "auto",
                },
                768: {
                  spaceBetween: 100,
                  slidesPerView: "auto",
                },
                1024: {
                  spaceBetween: 100,
                  slidesPerView: "auto",
                }
              }}
            >
              {features.map((feature, index) => (
                <SwiperSlide key={feature.id} className={styles.swiperSlide}>
                  <div className={styles.slideContent}>
                    <div className={styles.slideImageContainer}>
                      <img
                        src={feature.image}
                        alt={feature.title}
                        className={styles.slideImage}
                      />
                    </div>
                    <div className={styles.textContainer}>
                      <div 
                        key={activeIndex === index ? textKey : undefined}
                        className={`${styles.slideText} ${activeIndex === index ? styles.active : ''}`}
                      >
                        <h2 className={styles.slideTitle}>{feature.subtitle}</h2>
                        <p className={styles.slideDescription}>{feature.description}</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CopilotFeaturesCarousel;