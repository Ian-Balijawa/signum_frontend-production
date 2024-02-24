import styles from './style.module.css';
import Layout from './components/Layout';
import CardItem from './../../components/CardItem';
import TeamCard from '@/containers/Team/components/TeamCard';
import NavButton from '@/UI/NavButton';
import Footer from './../../components/Footer';
import NavigationBar from '@/components/NavigationBar';
import ImageCollage from './components/ImageCollage';
import PublicationSimpleSlider from '../Publications/components/PublicationSimpleSlider';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FetchFunctions } from '@/utils';
import { practicesEndpoints, teamMemberEndpoints } from '@/beConstants';

const LandingPageContent = ({ teamMembers, practices }) => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  });

  return (
    <>
      <NavigationBar />
      <div className={styles.overviewContainer}>
        <div className={styles.overviewIntro}>
          <Layout
            title="Overview"
            text="Signum Advocates offers an innovative approach to providing legal advice and the structuring of its fee arrangements within the confines of the law. We are known for our skilful work in highly complex and emerging areas, offering breadth and excellence that is unrivalled across most practice areas."
            href="/about"
          />
        </div>
        <div className={styles.overview_cards}>
          <ImageCollage images={teamMembers} />
        </div>
      </div>

      <div className={styles.practice_container}>
        <div className={styles.practiceIntro}>
          <Layout
            title="Practices"
            text="Signum is a law firm that strives to add value to its clients' transactions and briefs by offering more than just legal advice. The firm has a team of experienced lawyers who specialize in various practice areas. Here are some of the practice areas that the Signum team is experienced in"
            href="/practices"
          />
        </div>

        <div className={styles.practice_cards} data-aos="fade-right">
          {practices?.map((item, index) => {
            const practiceNumber = index + 1 < 9 ? `0${index + 1}` : index;
            const practicePath = `/practices/${item._id}?practiceNumber=${practiceNumber}`;

            return (
              <Link
                href={practicePath}
                key={item._id}
                className={styles.cardLink}
              >
                <CardItem
                  title={item.title}
                  number={practiceNumber}
                  text={item.description}
                  className={styles.practiceCardContainer}
                />
              </Link>
            );
          })}
        </div>
      </div>

      <div className={styles.team_casing}>
        <div className={styles.teamIntro}>
          <Layout
            title="Our Team"
            text="Our multi-disciplinary team of lawyers has skillset and experience in areas of Employment and Employee Benefits, Corporate, Banking and Finance and other practices. The team has developed expertise that enables us to deliver high quality work in a timely manner with high level of professionalism"
            className={styles.layoutcard}
            href="/team"
          />
        </div>
        <div className={styles.teamcard_container}>
          <TeamCard teamMembers={teamMembers} />
        </div>
      </div>

      <div className={styles.publicationsContainer}>
        {/* <div className={styles.intropublicationsContainer}>
          <h1>Publications</h1>
          <div>
            <NavButton
              className={styles.publication_button}
              href="/publications"
            />
          </div>
        </div>
        <div className={styles.publicationslider}>
          <PublicationSimpleSlider />
          <NavButton
            className={styles.publication_mobilebutton}
            href="/publications"
          />
        </div> */}
      </div>
      <Footer className={styles.footer} />
    </>
  );
};

export default LandingPageContent;
