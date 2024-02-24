import styles from "./style.module.css";
import { DUMMY_SINGLEPUBLICATIONDATA } from "@/constants/publicationdata";
import PublicationsCard from "@/components/PublicationCard";

const SinglePublicationContent = ({ publication }) => {
  return (
    <>
      <div className={styles.publicOuterCase}>
        <div key={publication.id} className={styles.publicationContainer}>
          <div>
            <p className={styles.text}>{publication.title}</p>
            <br />
            <p className={styles.subHeading}>{publication.subHeading}</p>
            <span>{publication.date}</span>
            <hr />
            <article className={styles.longtext}>
              <p>{publication.description}</p>
              <br />
              <p>{publication.description}</p>
              <p>{publication.description}</p>
              <br />
              <p>{publication.description}</p>
            </article>
          </div>
        </div>

        <div className={styles.smallcardContainer}>
          <h2>Featured</h2>
          {DUMMY_SINGLEPUBLICATIONDATA.map((part) => (
            <PublicationsCard
              key={part.id}
              date={part.date}
              title={part.title}
              description={part.description}
              className={styles.smallcard}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default SinglePublicationContent;
