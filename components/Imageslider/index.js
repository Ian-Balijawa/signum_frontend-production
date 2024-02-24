import styles from "./style.module.css";
import Image from "next/image";

const Imageslider = () => {
  return (
    <>
      <div className={styles.horizontalslider}>
        <div className={styles.sliderCase}>
          <div className={styles.item}>
            <Image
              src="/Images/member1.svg"
              alt="carousel images"
              width={330}
              height={300}
            />
          </div>
          <div className={styles.item}>
            <Image
              src="/Images/member3.svg"
              alt="carousel images"
              width={330}
              height={300}
            />
          </div>
          <div className={styles.item}>
            <Image
              src="/Images/member3.svg"
              alt="carousel images"
              width={330}
              height={300}
            />
          </div>
          <div className={styles.item}>
            <Image
              src="/Images/member2.svg"
              alt="carousel images"
              width={330}
              height={300}
            />
          </div>
          <div className={styles.item}>
            <Image
              src="/Images/member3.svg"
              alt="carousel images"
              width={330}
              height={300}
            />
          </div>
          <div className={styles.item}>
            <Image
              src="/Images/member4.svg"
              alt="carousel images"
              width={330}
              height={300}
            />
          </div>
          <div className={styles.item}>
            <Image
              src="/Images/member2.svg"
              alt="carousel images"
              width={330}
              height={300}
            />
          </div>
          <div className={styles.item}>
            <Image
              src="/Images/member6.svg"
              alt="carousel images"
              width={330}
              height={300}
            />
          </div>
          <div className={styles.item}>
            <Image
              src="/Images/member7.svg"
              alt="carousel images"
              width={330}
              height={300}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Imageslider;
