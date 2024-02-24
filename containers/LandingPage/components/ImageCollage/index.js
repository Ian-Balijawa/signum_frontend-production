/* eslint-disable @next/next/no-img-element */
import React, { useMemo } from 'react';
import styles from './style.module.css';
import VerticalCarousel from '@/components/VerticalCarousel';

const ImageCollage = ({ images }) => {
  const { arr1, arr2, arr3 } = useMemo(() => {
    const limit = Math.ceil(images?.length / 4);
    const imgArray = images.map((img) => ({
      image_url: img.image_url,
      _id: img._id,
      name: img.name,
    }));
    return {
      arr1: imgArray.slice(0, limit),
      arr2: imgArray.slice(limit, limit * 2),
      arr3: imgArray.slice(limit * 2, imgArray.length),
    };
  }, [images]);

  return arr1 && arr2 && arr3 ? (
    <div className={styles['image_collage_container']}>
      <VerticalCarousel images={arr1} direction="up" slidesToShow={2.8} />
      <VerticalCarousel images={arr2} slidesToShow={2.3} />
      <VerticalCarousel images={arr3} direction="up" slidesToShow={2.8} />
    </div>
  ) : null;
};

export default ImageCollage;
