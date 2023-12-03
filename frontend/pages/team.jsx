import React from "react";
import styles from "../styles/Team.module.css";
import Image from "next/image";
import Head from "next/head";
import twitter from "../src/assets/twitter.png";
import github from "../src/assets/github.svg";

export default function team() {
  return (
    <>
      <Head>
        <title>Team</title>
        <meta
          name="description"
          content="PUBLISH and SHARE YOUR RESEARCH ON THE WORLD'S FIRST DAO COMMUNITY FOR SCIENTISTS"
        />
        <link rel="icon" href="/microscope.png" />
      </Head>
      <main className={styles.main}>
        <div className={styles.title}>
          <span className={`${styles.titleWord} ${styles.word2}`}>Meet</span>
          <span className={`${styles.titleWord} ${styles.word1}`}> The </span>
          <span className={`${styles.titleWord} ${styles.word2}`}>
            Founders
          </span>
        </div>

        <div className={styles.founders}>
          <div className={styles.card}>
            <h2>Shivam Agarwal</h2>

            <Image src={} alt="Shivam Agarwal" />
            <p>
              <b>Backend Developer</b>
            </p>
            {/* <p>Loves to travel and contribute to communities.</p> */}
            <a
              href="https://twitter.com/shiv2002Agarwal"
              target="_blank"
              rel="noreferrer"
            >
              <Image src={twitter} alt="Twitter Logo" />
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
