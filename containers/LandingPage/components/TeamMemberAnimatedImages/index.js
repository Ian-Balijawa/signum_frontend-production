// import styles from './style.module.css';
import React, { useRef, useEffect, useState } from "react";

import styles from "./card.style.module.css";
import { DUMMY_IMAGESDATA } from "@/constants/imagedata";
import Image from "next/image";
import classNames from "classnames";

const TeamMemberAnimatedImages = ({ images = DUMMY_IMAGESDATA }) => {
  console.log("Image is ", images);
  const firstCol = useRef(null);

  const imgHeight = 200;
  const imgWidth = 150;
  const limit = 6;

  const upwardsClass = classNames("sliding-upwards", styles.cardGridCol);
  const downwardsClass = classNames("sliding-downwards");

  const scrollRef = useRef();

  const [next, setNext] = useState(0);

  const scroller = (direction) => {
    setInterval(() => {
      scrollRef?.current?.scrollTo({
        bottom: 10,
        behavior: "smooth",
      });
    }, 50);
  };

  // useEffect(() => {
  //   if (!autoScroll) return;
  //   if (scrollRef?.current !== null) {
  //     let hasReachedTop = false;
  //     let hasReachedBottom = false;
  //     const currentDistance = scrollRef.current.scrollLeft;
  //     const newDistance = bottomReached
  //       ? currentDistance - 1
  //       : currentDistance + 1;
  //     if (newDistance === prevScroll && !bottomReached) {
  //       hasReachedBottom = true;
  //       hasReachedTop = false;
  //       setBottomReached(true);
  //     }

  //     if (bottomReached && newDistance === prevScroll) {
  //       hasReachedTop = true;
  //       hasReachedBottom = false;
  //       setBottomReached(false);
  //     }

  //     setTimeout(() => {
  //       setPrevScroll(newDistance);
  //       setNext(next + 1);
  //       scrollRef?.current?.scrollTo({
  //         left: newDistance,
  //       });
  //     }, 10);
  //   }
  // }, [scrollRef, next, autoScroll]);

  useEffect(() => {
    const parent = firstCol.current;

    const cloneAndAppend = () => {
      const children = Array.from(parent.children);
      if (children.length >= limit) {
        const firstChild = children[0];
        // const unwanted = children.slice(0, 1);
        // unwanted.forEach((el) => parent.removeChild(el));
        parent.removeChild(firstChild);
      }

      const clone = parent.children[0].cloneNode(true);
      parent.appendChild(clone);
    };

    const scroller = () => {
      const altParent = firstCol.current;
      console.log("Scrolling");
      const currentDistance = altParent.scrollTop || 0;

      const newDistance = currentDistance + 5;
      console.log("New distance is ", newDistance);
      altParent?.scrollTo({
        top: currentDistance + 5,
        behavior: "smooth",
      });
    };

    const firstInterval = setInterval(cloneAndAppend, 3000);
    // const secondInterval = setInterval(scrolle r, 10);

    return () => {
      clearInterval(firstInterval);
      // clearInterval(secondInterval);
    };
  }, []);

  return (
    <>
      <div className={styles.cardGrid}>
        <div className={styles.cardGridCol}>
          <div className={styles.centerBar}></div>

          <div className={styles.cardGridCol} ref={firstCol}>
            {images[0] ? (
              <Image
                alt="team member image"
                src={images[0]?.image}
                className={[styles.cardImage]}
                height={imgHeight}
                width={imgWidth}
              />
            ) : null}
            {images[1]?.image ? (
              <Image
                alt="team member image"
                src={images[1]?.image}
                className={[styles.cardImage]}
                height={imgHeight}
                width={imgWidth}
              />
            ) : null}
            {images[0] ? (
              <Image
                alt="team member image"
                src={images[0]?.image}
                className={[styles.cardImage]}
                height={imgHeight}
                width={imgWidth}
              />
            ) : null}
            {images[1]?.image ? (
              <Image
                alt="team member image"
                src={images[1]?.image}
                className={[styles.cardImage]}
                height={imgHeight}
                width={imgWidth}
              />
            ) : null}
          </div>
        </div>
        <div className={styles.cardGridCol}>
          <div className={styles.centerBar}></div>

          <div className={downwardsClass}>
            {images[2]?.image ? (
              <Image
                alt="team member image"
                src={images[2]?.image}
                className={styles.cardImage}
                height={imgHeight}
                width={imgWidth}
              />
            ) : null}

            {images[2]?.image ? (
              <Image
                alt="team member image"
                src={images[2]?.image}
                className={styles.cardImage}
                height={imgHeight}
                width={imgWidth}
              />
            ) : null}
          </div>
        </div>
        <div className={styles.cardGridCol} style={{ paddingTop: 40 }}>
          <div className={styles.centerBar}></div>
          <div className={upwardsClass}>
            {images[3]?.image ? (
              <Image
                alt="team member image"
                src={images[3]?.image}
                className={[styles.cardImage]}
                height={imgHeight}
                width={imgWidth}
              />
            ) : null}
            {images[3]?.image ? (
              <Image
                alt="team member image"
                src={images[3]?.image}
                className={[styles.cardImage]}
                height={imgHeight}
                width={imgWidth}
              />
            ) : null}
          </div>
        </div>
      </div>
      {/* <div className={styles.image_grid}>
        {DUMMY_IMAGESDATA.map((image) => {
          return <div key={image.id} className={styles.block}></div>;
        })}
      </div> */}
    </>
  );
};

export default TeamMemberAnimatedImages;
