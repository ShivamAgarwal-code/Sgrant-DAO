import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import hero from "../src/assets/hero.png";
import JoinSection from "../src/components/JoinSection";
import FeaturesSection from "../src/components/FeaturesSection";
import WhatMore from "../src/components/WhatMore";
import Link from "next/link";
import Poweredby from "../src/components/Poweredby";
import NFTSection from "../src/components/NFTSection";
import Contribute from "../src/components/Contribute";

// import scientist from "../assets/scientist.png";
// import image8 from "../assets/8_bg.png";
// import grants from "../assets/grants.png";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>SGrant DAO</title>
        <meta
          name="description"
          content="PUBLISH and SHARE YOUR RESEARCH ON THE WORLD'S FIRST DAO COMMUNITY FOR SCIENTISTS"
        />
        <link rel="icon" href="/microscope.png" />
      </Head>

      <main className={`${styles.main}`}>
        <div>
          <div className={styles.title}>
            <span className={`${styles.titleWord} ${styles.word1}`}>
              Scientia{" "}
            </span>
            <span className={`${styles.titleWord} ${styles.word2}`}>DAO</span>
          </div>
          <div className={styles.tagline}>
            <span className={`${styles.titleWord} ${styles.word2}`}>
              Publish & share{" "}
            </span>
            <span className={`${styles.titleWord} ${styles.word1}`}>
              your research on the
            </span>
            <span className={`${styles.titleWord} ${styles.word2}`}>
              {" "}
              world&#39;s first DAO{" "}
            </span>
            <span className={`${styles.titleWord} ${styles.word1}`}>
              community for SCIENTISTS
            </span>
          </div>
          <Link href={"#explore"}>
            <button className={styles.button} role="button">
              Explore
            </button>
          </Link>
        </div>

        <div className={styles.hero}>
          <Image src={hero} />
        </div>
      </main>

      {/* join section */}
      <div id="explore" className={styles.section}>
        <FeaturesSection />
      </div>

      {/* join section */}
      <div id="join" className={styles.section}>
        <JoinSection />
      </div>

      {/* nft showcase */}
      <div className={styles.section}>
        <NFTSection />
      </div>

      {/* what more */}
      <div className={styles.section}>
        <WhatMore />
      </div>

      {/* contribute section */}
      <div className={styles.section}>
        <div className={styles.center}>
          <div className={styles.title}>
            <span className={`${styles.titleWord} ${styles.word1}`}>
              Support{" "}
            </span>
            <span className={`${styles.titleWord} ${styles.word2}`}>DAO </span>
            <span className={`${styles.titleWord} ${styles.word1}`}>For</span>
            <span className={`${styles.titleWord} ${styles.word2}`}>
              {" "}
              Social
            </span>
            <span className={`${styles.titleWord} ${styles.word1}`}> Good</span>
          </div>
          <Contribute />
        </div>
      </div>

      {/* powered by */}
      <div className={styles.section}>
        <Poweredby />
      </div>

      {/* docs */}
      <div className={styles.section}>
        <div className={styles.center}>
          <button className={styles.button}>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://plump-airedale-cba.notion.site/Docs-a94ba6396d524259ad81e0801c659ce9"
            >
              Read Docs
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}
