import styles from './style.module.css';
import Form from '@/containers/Careers/components/Form';
import Contactcard from '@/components/Contactcard';
import Navbar from '@/components/Navbar';
import WhatsappPopup from './components/WhatsappPopup';

const ContactContent = () => {
  return (
    <>
      <Navbar />
      <WhatsappPopup />
      <div className={styles.contactOuterContainer}>
        <div className={styles.contactContainer}>
          <Contactcard className={styles.cardContainer} />
          <Form className={styles.form} />
        </div>
      </div>
    </>
  );
};

export default ContactContent;
