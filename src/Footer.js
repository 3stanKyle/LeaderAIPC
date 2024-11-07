import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  const footnotes = [
    {
      id: 1,
      content: (
        <>
          Copilot is available in select global markets and will be rolled out to additional markets over time.{' '}
          <a href="https://www.microsoft.com/en-us/windows/copilot-ai-features?r=1#faq" className={styles.link}>Learn more</a>. Copilot functionality is limited and has specific{' '}
          <a href="https://www.microsoft.com/en-us/windows/windows-10-specifications" className={styles.link}>system requirements</a>.
        </>
      )
    },
    {
      id: 2,
      content: (
        <>
          Optimised for select languages (English, Chinese (simplified), French, German, Japanese, and Spanish.) Content-based and storage limitations apply. Recall is coming soon through a post-launch Windows Update. See{' '}
          <a href="aka.ms/copilotpluspcs" className={styles.link}>aka.ms/copilotpluspcs</a>.
        </>
      )
    },
    {
      id: 3,
      content: (
        <>
          Currently supports translation for video and audio subtitles into English from 40+ languages. See{' '}
          <a href="https://aka.ms/nextgenaipcs" className={styles.link}>https://aka.ms/nextgenaipcs</a>.
        </>
      )
    },
    {
      id: 4,
      content: (
        <>
          Optimised for English text prompts. Requires Microsoft account and internet connection to access cloud services that help ensure the responsible use of AI.{' '}
          <a href="https://support.microsoft.com/en-us/windows/use-cocreator-in-paint-53857513-e36c-472d-8d4a-adbcd14b2e54" className={styles.link}>Learn more</a>
        </>
      )
    },
    {
      id: 5,
      content: "Available at initial launch."
    }
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <ul className={styles.list}>
          {footnotes.map(note => (
            <li key={note.id} className={styles.item}>
              <span className={styles.number}>{note.id}.</span>
              <p className={styles.text}>{note.content}</p>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;