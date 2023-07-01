import Image from "next/image";
import styles from "./page.module.css";
import Hero from "public/hero.png";
import Button from "@/components/Button/Button";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>
        Transforming Digital Dreams into Reality
        </h1>
        <p className={styles.desc}>
        we strive to provide you with the best design services for your digital products. Our team of skilled designers is passionate about turning your ideas into reality. Through collaboration, we aim to create a design that meets your needs, while also exceeding your expectations
        </p>
        <Button url="/portfolio" text="Our Works"/>
      </div>
      <div className={styles.item}>
        <Image src={Hero} alt="" className={styles.img} />
      </div>
    </div>
  );
}
