import styles from "./style.module.css";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import { VscGlobe } from "react-icons/vsc";
import {
  BsInstagram,
  BsFacebook,
  BsLinkedin,
  BsTwitter,
  BsYoutube,
  BsWhatsapp,
} from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";

const Contactcard = ({ className }) => {
  return (
    <div className={`${styles.cardContainer} ${className}`}>
      <h2>
        Speak to Us <br />
        directly
      </h2>

      <p>
        <FiPhone size={22} className={styles.icon} /> &nbsp;{" "}
        <a href="tel:+256200906556">(+256) 200-906-556</a>
      </p>
      <p>
        <BsWhatsapp size={22} className={styles.icon} /> &nbsp;{" "}
        <a href="https://api.whatsapp.com/send?phone=256785899945&text=Hi,%20I%27d%20like%20to%20request%20for%20services%20from%20the%20Signum%20Advocates%20law%20firm">
          (+256) 785-899-945
        </a>
      </p>
      <p>
        <IoLocationOutline size={22} className={styles.icon} />
        &nbsp;P.O. Box 100326 Kampala, Uganda
      </p>
      <p>
        <VscGlobe size={22} className={styles.icon} /> &nbsp;
        <a
          href="http://www.signumadvocates.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          www.signumadvocates.com
        </a>
      </p>
      <p>
        <MdOutlineEmail size={22} className={styles.icon} /> &nbsp;
        <a
          href="mailto:partners@signumadvocates.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          partners@signumadvocates.com
        </a>
      </p>
      <p>3rd Floor, Unicalo House </p>
      <p>Archer Road, Plot 11, Kololo</p>
      <div className={styles.socialmedia_iconscasing}>
        <BsInstagram className={styles.socialmedia_icon} />
        <BsFacebook className={styles.socialmedia_icon} />
        <BsLinkedin className={styles.socialmedia_icon} />
        <BsTwitter className={styles.socialmedia_icon} />
        <BsYoutube className={styles.socialmedia_icon} />
      </div>
    </div>
  );
};

export default Contactcard;
