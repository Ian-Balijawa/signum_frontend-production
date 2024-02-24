/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React, { useState, useEffect, useRef } from 'react';
import Slider from 'react-slick';
// import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './style.module.css';
import { sitePaths } from '@/constants/sitepaths';
import Image from 'next/image';

const VerticalCarousel = ({
  images,
  autoplaySpeed = 3000,
  direction,
  slidesToShow = 2.5,
}) => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: autoplaySpeed,
    vertical: true,
    verticalSwiping: true,
    rtl: direction === 'up',
    slidesToShow,
  };

  return (
    <div className={styles.outerContainer}>
      <div className={styles.bar}></div>
      <Slider
        className={styles.container}
        rtl={direction === 'up'}
        {...settings}
      >
        {images.map((image, index) => (
          <div key={index}>
            <Link href={`${sitePaths.Team.path}/${image._id}`}>
              <Image
                //   onClick={() => handleClick(image._id)}
                src={image.image_url}
                alt={`Image ${index + 1}`}
                className={styles.image}
                width={170}
                height={200}
                style={{ objectFit: 'cover' }}
              />
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default VerticalCarousel;
