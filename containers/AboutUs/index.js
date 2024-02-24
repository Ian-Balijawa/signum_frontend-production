import Image from "next/image";
import styles from "./style.module.css";
import ExpertButton from "@/UI/ExpertButton";
import { BsPlusCircle } from "react-icons/bs";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import Aboutuscase from "./Aboutuscase";
import Navbar from "@/components/Navbar";
import Simpleslider from "@/components/Simpleslider";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutContent = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  });
  return (
    <>
      <Navbar />
      <div className={styles.aboutContainer}>
        <div>
          <span>2014</span>
          <p>
            Established in 2014, our company has quickly gained recognition for
            <br />
            our exceptional legal services and dedication to client
            satisfaction.
          </p>
        </div>
        <div>
          <span>1040</span>
          <p>
            Over the years, we have built a strong foundation and earned the
            trust of many clients seeking legal expertise. Today, we are
            thrilled to announce that we have successfully assisted and
            represented over 1,040 clients.
          </p>
        </div>
      </div>
      <div className={styles.lawcontainer}>
        <div>
          <Aboutuscase title="Our Story" />
        </div>
        <div className={styles.imageLawcontainer}>
          <Image
            src="/Images/scale.png"
            width={420}
            height={450}
            alt="Law scale image"
            priority={true}
          />
        </div>
      </div>
      <div className={styles.bussinessContainer}>
        <div className={styles.content}>
          <h2>
            Our business <br /> approach
          </h2>
          <p>
            Signum Advocates offers an innovative approach to providing legal
            advice and the structuring of its fee arrangements within the
            confines of the law. We are known for our skilful work in highly
            complex and emerging areas, offering breadth and excellence that is
            unrivalled across most practice areas.
          </p>
          <ExpertButton className={styles.secbutton} href="/practices">
            View our Expertise
            <BsPlusCircle className={styles.icon} />
          </ExpertButton>
        </div>
        <div className={styles.goalcontent}>
          <h2>
            Our Goal <br />
            is your goal
          </h2>
          <Image
            src="/Images/Archer.svg"
            width={350}
            height={340}
            alt="Archery image"
            priority={true}
          />
        </div>
      </div>
      <div className={styles.cardcontainer}>
        <article>
          <h2>Our Values</h2>
          <p>
            We are driven by a set of core values that guide our approach to
            practicing law, maintaining high standards and serving our clients.
          </p>
        </article>
        <Simpleslider />
      </div>
      <div className={styles.contactContainer}>
        <div className={styles.contactinnerContainer}>
          <h2>
            Contact <span>us</span>
          </h2>
          <a style={{ color: "black" }} href="tel:+256200906556">
            <FiPhone /> &nbsp; +256 200-906-556
          </a>
          <p>
            <IoLocationOutline /> &nbsp; Kampala, Uganda
          </p>
          <ExpertButton className={styles.contacttbutton} href="/contactUs">
            Contact Form <BsPlusCircle className={styles.icon} />
          </ExpertButton>
        </div>
        <div className={styles.meetContainer}>
          <article>
            <h2>Join us!</h2>
            <p>
              Whether you are a seasoned lawyer or just starting out in your
              legal career, we encourage you to explore our current job openings
              and apply to join our team. We offer competitive remuneration
              along with professional development and growth.
            </p>
            <ExpertButton className={styles.joinbutton} href="/careers">
              See Offers <BsPlusCircle className={styles.icon} />
            </ExpertButton>
          </article>
        </div>
      </div>
    </>
  );
};

export default AboutContent;
