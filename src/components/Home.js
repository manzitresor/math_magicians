import React from 'react';
import styles from '../styles/Home.module.css';
import magician from '../assets/images.png';

function Home() {
  return (
    <>
      <div className={styles.mainSection}>
        <div className={styles.magician}>
          <img src={magician} alt="magician" className={styles.magicianImage} />
        </div>
        <div className={styles.welcome}>
          <h1>welcome to our home page</h1>
          <p className={styles.paragraph}>
            Founded in 2020, Mathmagicians focuses on teaching competition math
            to middle school students or below.
            We hope to help students do well in competitions and inspire
            them to keep learning. We are actively looking to expand our team of tutors to
            better serve the students and give back to the community.
          </p>
        </div>
      </div>

    </>
  );
}

export default Home;
