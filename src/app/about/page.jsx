import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/Button/Button";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          fill={true}
          alt=""
          className={styles.img}
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>WebWave</h1>
          <h2 className={styles.imgDesc}>
          Your Partner for Creative Excellence.
          </h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who Are We our mission?</h1>
          <p className={styles.desc}>
            Welcome to WebWave, a premier agency dedicated to delivering
            exceptional services and creative solutions. With a passion for
            innovation and a deep understanding of our clients needs, we strive
            to exceed expectations and create meaningful experiences.
            <br />
            <br />
            At WebWave, our mission is to empower businesses and
            individuals by providing top-notch services that help them stand out
            in todays competitive landscape. We believe in the power of
            collaboration, creativity, and cutting-edge technology to drive
            success. Through our expertise, we aim to make a positive impact on
            our clients brands and establish long-lasting relationships built on
            trust and excellence.
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>What We Do?</h1>
          <p className={styles.desc}>
            At WebWave, we offer a comprehensive range of services
            designed to meet the diverse needs of our clients. Whether its web
            design and development, branding and identity, digital marketing, or
            application development, we have the expertise to deliver results
            that drive growth and maximize impact. Our tailored solutions are
            backed by a deep understanding of industry trends and user behavior,
            ensuring that every project we undertake is a step towards success.
            - Creative Illustrations
            <br />
            <br /> - Dynamic Websites
            <br />
            <br /> - Fast and Handy
            <br />
            <br /> - Mobile Apps
          </p>
          <Button url="/contact" text="Contact" />
        </div>
      </div>
    </div>
  );
};

export default About;
