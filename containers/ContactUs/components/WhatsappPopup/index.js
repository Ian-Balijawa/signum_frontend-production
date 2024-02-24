import React, { useState } from 'react';
import { IoLogoWhatsapp } from 'react-icons/io';
import styles from './style.module.css';

const WhatsappPopup = () => {
  return (
    <div className={styles.container}>
      <a href="https://api.whatsapp.com/send?phone=256785899945&text=Hi,%20I%27d%20like%20to%20request%20for%20services%20from%20the%20Signum%20Advocates%20law%20firm">
        <div className="whatsapp-popup bubble speech">
          <IoLogoWhatsapp color="#1c8721" size={30} />
          <p className={styles.text}>Chat with us</p>
        </div>
      </a>
    </div>
  );
};

export default WhatsappPopup;
