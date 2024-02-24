import Image from 'next/image';
import styles from './style.module.css';
import CardItem from './../../components/CardItem';
import { DUMMY_PRACTICESCONTENT } from '@/constants/practicesdata';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';

const SinglePracticesContent = ({ className, practices = [] }) => {
  // useEffect(() => {
  //   AOS.init({ duration: 1000 });
  // });

  return (
    <>
      <Navbar />
      <div>
        <Image
          src="/Images/practiceImage.png"
          alt="practices image"
          width={500}
          height={250}
          className={styles.img}
          priority={true}
        />
      </div>

      <div className={styles.practice_cards}>
        {practices.map((item, index) => {
          const practiceNumber = index + 1 <= 9 ? `0${index + 1}` : index + 1;

          return (
            <Link
              href={`/practices/${item._id}?practiceNumber=${practiceNumber}`}
              key={item._id}
            >
              <CardItem
                title={item.title}
                number={practiceNumber}
                text={item.description}
                className={styles.card}
              />
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default SinglePracticesContent;
