import React, { useState, useEffect } from 'react';
import styles from './style.module.css';

const SiteBeingUpdated = () => {
  return (
    <div className={styles.big_container}>
      <div className={styles.foreground}>
        <img
          src="/Images/site_under_maintenance/signum.svg"
          className={styles.image_logo}
          alt="Signum Logo"
        />
        <div className={styles.container}>
          <h2>Coming Soon</h2>
          <p>
            Our website is undergoing some improvements and will be back soon.
            Apologies for any inconvenience caused.
          </p>
          <p>
            Kindly leave us with your <strong>email address</strong> and we will
            notify you once its back
          </p>
        </div>
        <form className={styles.form}>
          <input type="text" placeholder="Email address here..." />
          <a className={styles.anchor} href="mailto:Info@signumadvocates.com">
            Submit
          </a>
        </form>
        <footer className={styles.footer}>
          <p className={styles.copyright}>
            Designed and developed by{' '}
            <a
              href="http://buriafrica.com/"
              target="_blank"
              className={styles.buriText}
            >
              buriafrica.com
            </a>
          </p>
        </footer>
      </div>

      <div className={styles.imageContainer}>
        <img
          src="/Images/site_under_maintenance/watermark.svg"
          alt="watermark logo"
          className={styles.imageInContainer}
        />
      </div>
      <div id="crystals">
        <img
          src="/Images/site_under_maintenance/crystals.svg"
          alt=" crystals watermark logo"
          className={styles.imageBottom}
        />
      </div>
    </div>
  );
};

export default SiteBeingUpdated;
