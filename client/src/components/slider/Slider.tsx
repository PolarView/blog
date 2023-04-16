import styles from "./slider.module.scss";
import React from "react";
import newsexpample from "../../assets/static/newsexample.jpg";
import Image from "next/legacy/image";
import { HiOutlineArrowNarrowLeft, HiOutlineArrowNarrowRight } from "react-icons/hi";
import { BsDot } from "react-icons/bs";

const Slider: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.description}>
        <h2 className={styles.postType}>NEWS</h2>
        <h1 className={styles.postTitle}>
          Title will also go here i mean above the description Title will also go here i mean above
          the description
        </h1>
        <div className={styles.postQuoteContainer}>
          <h3 className={styles.postQuote}>Here will go some descripiton and bla vlav lva</h3>
        </div>
        <div className={styles.postTagsContainer}>
          <h5 className={styles.postTag}>ECOMONY</h5>
          <h5 className={styles.postTag}>POLITICS</h5>
          <h5 className={styles.postTag}>ELECTIONS</h5>

          <h5 className={styles.postTag}>USA</h5>
          <h5 className={styles.postTag}>NATION</h5>
          <h5 className={styles.postTag}>2024</h5>
        </div>
      </div>
      <div className={styles.postDate}> 8 days ago...</div>

      <div className={styles.sliderArrowsContainer}>
        <div className={styles.arrowWrapper}>
          <HiOutlineArrowNarrowLeft fontSize={40} />
        </div>
        <div className={styles.arrowWrapper}>
          <HiOutlineArrowNarrowRight fontSize={40} />
        </div>
      </div>
      <div className={styles.pagination}>
        {[1, 2, 3, 4].map((item) => (
          <div className={styles.dot} key={item}>
            <BsDot fontSize={32} color="white" />
          </div>
        ))}
      </div>
      <div className={styles.imageOverlay}></div>
      <Image
        src="https://c8.alamy.com/comp/2CWBHHE/usa-today-newspaper-reporting-on-the-911-attacks-2CWBHHE.jpg"
        layout="fill"
        alt="news preview"
        className={styles.silderImage}
      />
    </div>
  );
};

export default Slider;
