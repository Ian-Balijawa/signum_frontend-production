import { DUMMY_CAREERDATA } from '@/constants/careerdata';
import Careercard from './components/Careercard';
import CareerIntro from './components/CareerIntro';
import NoCareer from './components/NoCareer';
import styles from './style.module.css';
import React, { useState, useEffect } from 'react';
import Careermodal from './components/Careermodal';

const Careercontent = ({ onButtonClick, teamMembers }) => {
  const [selectedCareer, setSelectedCareer] = useState(null);

  const handleCareerClick = (career) => {
    setSelectedCareer(career);
  };
  return (
    <>
      {DUMMY_CAREERDATA.length > 0 ? (
        <div className={styles.careerContainer}>
          <CareerIntro
            partnerImages={teamMembers}
            text="As a dynamic and innovative law firm, we are always on the lookout for talented individuals to join our team. We pride ourselves on our commitment to professional development and creating a supportive and inclusive workplace culture. Our Careers page provides information about our current job opportunities, as well as insights into what it's like to work with us."
          />
          <div className={styles.cardContainer}>
            {DUMMY_CAREERDATA.map((career) => (
              <Careercard
                key={career.id}
                career={career}
                onClick={handleCareerClick}
              />
            ))}
          </div>
        </div>
      ) : (
        <NoCareer />
      )}

      {selectedCareer && (
        <Careermodal
          career={selectedCareer}
          onClose={() => setSelectedCareer(null)}
        />
      )}
    </>
  );
};

export default Careercontent;
