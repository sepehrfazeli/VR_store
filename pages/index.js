/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>VR Shop</title>
        <meta name="description" content="Virtual Reality Equipment Shop" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Virtual Reality Equipment Shop</h1>

        <p className={styles.description}>
          Here You Can Buy What You Need To Enter VR WORLD!!!
        </p>

        <ul className={styles.grid}>
          <li className={styles.card}>
            <a target="_blank" href="https://www.amazon.com/dp/B099VMT8VZ/ref=cm_sw_em_r_mt_dp_7FPQTAYYV36CJV73AEWP?_encoding=UTF8&psc=1 ">
              <img src="/images/Oculus Quest 2.jpeg" alt="Oculus Quest 2" />
              <h2>Oculus Quest 2</h2>
              <p>Advanced All-In-One Virtual Reality Headset — 64 GB</p>
            </a>
          </li>

          <li className={styles.card}>
            <a target="_blank" href="https://www.amazon.com/Oculus-Rift-PC-Powered-Gaming-Headset-pc/dp/B07PTMKYS7/ref=sr_1_2?_encoding=UTF8&c=ts&dchild=1&keywords=Wearable+Tech+Virtual+Reality+Gear&qid=1624436321&s=wearable-tech&sr=1-2&ts_id=14775003011">
              <img src="/images/Oculus Rift S.jpeg" alt="Oculus Rift S" />
              <h2>Oculus Rift S</h2>
              <p>PC-Powered VR Gaming Headset</p>
            </a>
          </li>

          <li className={styles.card}>
            <a target="_blank" href="https://www.amazon.com/HTC-VIVE-Virtual-Reality-System-PC/dp/B07B9WPR7G/ref=sr_1_4?_encoding=UTF8&c=ts&dchild=1&keywords=Wearable+Tech+Virtual+Reality+Gear&qid=1624436321&s=wearable-tech&sr=1-4&ts_id=14775003011">
              <img src="/images/HTC VIVE Pro.jpg" alt="TC VIVE Pro" />
              <h2>HTC VIVE Pro</h2>
              <p>Virtual Reality System Package</p>
            </a>
          </li>

          <li className={styles.card}>
            <a target="_blank" href="https://www.amazon.com/Samsung-Electronics-Wireless-Controllers-XE800ZBA-HC1US/dp/B07HS7R1RT/ref=sr_1_6?_encoding=UTF8&c=ts&dchild=1&keywords=Wearable+Tech+Virtual+Reality+Gear&qid=1624436321&s=wearable-tech&sr=1-6&ts_id=14775003011">
              <img
                src="/images/SAMSUNG HMD Odyssey.jpeg"
                alt="SAMSUNG HMD Odyssey"
              />
              <h2>SAMSUNG HMD Odyssey</h2>
              <p>
                + Windows Mixed Reality Headset with 2 Wireless Controllers 3.5"
                Black (XE800ZBA-HC1US)
              </p>
            </a>
          </li>
        </ul>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
