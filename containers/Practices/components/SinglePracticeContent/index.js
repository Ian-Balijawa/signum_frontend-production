import styles from './style.module.css';
import { Tab } from '@headlessui/react';

const SinglePracticeContent = ({
  practice,
  practiceNumber,
  imageUrl,
  teamMembers,
}) => {
  // const practice = testPt;
  // console.log("a single practice is", practice);
  console.log('a single teamMember is', teamMembers);

  return (
    <>
      <div className={styles.outerContainer}>
        <div key={practice._id} className={styles.practiceContainer}>
          <p>{practice.title}</p>
          <div className={styles.heading}>
            <span>{practiceNumber}</span>
            <img
              src={practice.imageUrl || '/Images/practiceimg.png'}
              alt="practice image"
            />
          </div>
        </div>
        {/* <div className={styles.content}>
          { <h2>{practice.service}</h2> }
          <div>
            <p
              dangerouslySetInnerHTML={{
                __html: practice.body,
              }}
            />
          </div>
        </div> */}
      </div>

      <Tab.Group>
        <div className={styles.tabContainer}>
          <Tab.List className={styles.line}>
            <Tab
              className={({ selected }) =>
                `${selected ? styles.active : styles.inactive}`
              }
            >
              Services
            </Tab>

            {/* <Tab
              className={({ selected }) =>
                `${selected ? styles.active : styles.inactive}`
              }
            >
              Experience
            </Tab> */}
            <Tab
              className={({ selected }) =>
                `${selected ? styles.active : styles.inactive}`
              }
            >
              Publications
            </Tab>
          </Tab.List>
        </div>

        <Tab.Panels>
          <Tab.Panel className={styles.gallery}>
            <div className={styles.content}>
              <h2>{practice.service}</h2>
              <div>
                <p>{practice.text}</p>
              </div>
              <div>
                <div
                  dangerouslySetInnerHTML={{
                    __html: practice.body,
                  }}
                />
              </div>
              {/* <div>
                  <p>{practice.content}</p>
                  <br />
                  <p>{practice.wording}</p>
                </div> */}
            </div>
          </Tab.Panel>

          {/* <Tab.Panel className={styles.gallery}>
            <div className={styles.experienceContent}>
              {teamMembers.map((tm) => {
                return (
                  <div className={styles.experienceTab} key={tm._id}>
                    <h3>{tm.name}</h3>
                    <div
                      className={styles.tmExperience}
                      dangerouslySetInnerHTML={{
                        __html: tm.experience,
                      }}
                    />
                  </div>
                );
              })}
            </div>
          </Tab.Panel> */}

          <Tab.Panel className={styles.gallery}>
            <div className={styles.content}></div>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </>
  );
};

export default SinglePracticeContent;
