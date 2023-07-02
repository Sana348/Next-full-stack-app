import React, { useEffect, useState } from 'react';
import styles from './page.module.css';
import Image from 'next/image';
import { useRouter } from 'next/router';

async function getData(id) {
  const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export async function generateMetadata({ params }) {
  const post = await getData(params.id);
  return {
    title: post.title,
    description: post.desc,
  };
}

export default function BlogPost({ params }) {
  const [data, setData] = useState({});
  const router = useRouter();

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await getData(params.id);
        setData(result);
      } catch (error) {
        console.error(error);
        router.push('/404');
      }
    }
    fetchData();
  }, [params.id, router]);

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>{data.title}</h1>
          <p className={styles.desc}>{data.desc}</p>
          <div className={styles.author}>
            <Image
              src={data.img}
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>{data.username}</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src={data.img} alt="" fill={true} className={styles.image} />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>{data.content}</p>
      </div>
    </div>
  );
}
