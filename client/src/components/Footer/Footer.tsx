import React from 'react';
import Image from 'next/image';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <a
        href="https://google.ca"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          aria-hidden
          src="/file.svg"
          alt="File icon"
          width={16}
          height={16}
          className={styles.icon}
        />
        Piss
      </a>
      <a
        href="https://google.ca"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          aria-hidden
          src="/window.svg"
          alt="Window icon"
          width={16}
          height={16}
          className={styles.icon}
        />
        Shit
      </a>
      <a
        href="https://google.ca"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          aria-hidden
          src="/globe.svg"
          alt="Globe icon"
          width={16}
          height={16}
          className={styles.icon}
        />
        Fuck
      </a>
    </footer>
  );
};

export default Footer;