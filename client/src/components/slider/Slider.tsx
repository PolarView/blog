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
        <h1 className={styles.postTitle}>Title</h1>
        <h3 className={styles.postDescription}>Here will go some descripiton and bla vlav lva</h3>
        <div className={styles.postTags}>
          <h5>economy</h5>
          <h5>politics</h5>
          <h5>elections</h5>
        </div>
        <p className={styles.postDate}> 8 days ago</p>
      </div>
      <div className={styles.sliderArrowsContainer}>
        <div className={styles.arrowWrapper}>
          <HiOutlineArrowNarrowLeft />
        </div>
        <div className={styles.arrowWrapper}>
          <HiOutlineArrowNarrowRight />
        </div>
      </div>
      <div className={styles.pagination}>
        {[1, 2, 3, 4].map((item) => (
          <div className={styles.dot} key={item}>
            <BsDot />
          </div>
        ))}
      </div>

      <Image
        src="https://c8.alamy.com/comp/2CWBHHE/usa-today-newspaper-reporting-on-the-911-attacks-2CWBHHE.jpg"
        layout="fill"
        alt="news preview"
        priority
      />
    </div>
  );
};

export default Slider;
