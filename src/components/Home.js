import React from 'react';
import styles from '../styles/Home.module.css';

function Home() {
  return (
    <>
      <div className={styles.welcome}>
        <h1>welcome to our home page</h1>
        <p>
          Founded in 2020, Mathmagicians focuses on teaching competition math
          to middle school students or below.
          We hope to help students do well in competitions and inspire
          them to keep learning. We are actively looking to expand our team of tutors to
          better serve the students and give back to the community.
        </p>
        <p>
          As part of our efforts to preserve Flash games we used a Flash
          emulator to keep Math Magician playable for you.
          Flash is not supported anymore by the major browsers,
          but our emulator avoids all the security issues related to Flash.
          Originally Math Magician appeared on the website of the Oswego City School District.
        </p>
      </div>

    </>
  );
}

export default Home;
