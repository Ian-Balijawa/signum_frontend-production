import styles from "./style.module.css";
import Image from "next/image";

const CardAnimatedImage = ({ imagefront, imageback }) => {
  return (
    <>
      <div className={styles.flip_card}>
        <div className={styles.flipcard_inner}>
          <div className={styles.flipcard_front}>
            <Image
              src={imagefront}
              alt="Ian Mutibwa"
              width={300}
              height={300}
            />
          </div>
          <div className={styles.flipcard_back}>
            <Image src={imageback} alt="Kirabo" width={300} height={300} />
          </div>
        </div>
      </div>
    </>
  );
};

export default CardAnimatedImage;
