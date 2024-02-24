import { DUMMY_TEAMPROFILE } from '@/constants/teamprofiledata';
import Image from 'next/image';
import styles from './style.module.css';
import styles2 from '../Practices/components/SinglePracticeContent/style.module.css';
import { RxArrowBottomRight } from 'react-icons/rx';
import { BsDownload } from 'react-icons/bs';
import VCard from './components/VCard';
import { helper } from '@/utils';
import { Button } from 'antd';
import { Tab } from '@headlessui/react';

const TeamProfileContent = ({ teamMember, index, nextTeamMemberId }) => {
  // console.log(teamMember);
  return (
    <>
      <div className={styles.teamMemberContainer}>
        <div className={styles.imageWrapper}>
          <Image
            src={teamMember.image_url}
            width={480}
            height={450}
            alt="profile image"
            className={styles.imageContainer}
            style={{ objectFit: 'contain' }}
          />
        </div>

        <div className={styles.memberHeading}>
          <h2>{teamMember?.name}</h2>
          <span className={styles.memberPosition}>{teamMember?.position}</span>

          <VCard teamMember={teamMember}>
            <div className={styles.contactRow}>
              <div className={styles.downloadContactRow}>
                <BsDownload
                  color="#ffffff"
                  size={20}
                  style={{ marginRight: 0 }}
                />
                <Button style={{ borderWidth: 0 }} ghost>
                  Download Vcard
                </Button>
              </div>
              <div className={styles.contactRowContent}>
                <p>{teamMember.email}</p>
                <p>{teamMember.contact}</p>
              </div>
            </div>
          </VCard>
        </div>
      </div>
      {/* <VCard teamMember={teamMember}>TEST</VCard> */}

      <Tab.Group>
        <div className={styles.tabList}>
          <Tab.List className={styles2.line}>
            <Tab
              className={({ selected }) =>
                `${selected ? styles2.active : styles2.inactive}`
              }
            >
              Overview
            </Tab>

            <Tab
              className={({ selected }) =>
                `${selected ? styles2.active : styles2.inactive}`
              }
            >
              Experience
            </Tab>
          </Tab.List>
        </div>

        <Tab.Panels>
          <Tab.Panel className={styles.gallery}>
            <div className={styles.profileContainer}>
              <div className={styles.bio}>
                {teamMember.userPractices?.length ? (
                  <>
                    <h4>Practice area</h4>
                    <hr />
                    <p>
                      {teamMember.userPractices?.map((p) => p.title).join(', ')}
                    </p>
                  </>
                ) : null}

                <h4>Education</h4>
                <hr />
                <p>
                  <ul style={{ textAlign: 'justify' }}>
                    {teamMember.userEducation
                      .map((education) => {
                        const data = `${
                          education.level
                            ? `${helper.convertToSentenceCase(
                                education.level,
                              )} ${
                                education.title[
                                  education.title.length - 1
                                ]?.toLowerCase() === 's'
                                  ? 'of'
                                  : 'in'
                              }`
                            : ''
                        }  ${education.title}${
                          education?.decoration
                            ? ` (${helper.convertToSentenceCase(
                                education.decoration,
                              )})`
                            : ''
                        }, ${education.institute.name}${
                          education.institute.name
                            .toLowerCase()
                            .includes(
                              education.institute.location.toLowerCase(),
                            )
                            ? ''
                            : ', ' + education.institute.location
                        }${education?.isOngoing ? ' (ongoing)' : ''}.`;
                        return data;
                      })
                      .map((txt) => (
                        <li key={txt}>{txt}</li>
                      ))}
                  </ul>
                </p>

                {teamMember.userMemberships?.length ? (
                  <>
                    <h4>Memberships</h4>
                    <hr />
                    <ul>
                      {teamMember.userMemberships?.map((membership) => (
                        <li key={membership._id}>{membership.name}</li>
                      ))}
                    </ul>
                  </>
                ) : null}
                {/* <h4>Contact</h4>
          <hr /> */}
              </div>

              <div
                className={styles.content}
                dangerouslySetInnerHTML={{ __html: teamMember.description }}
              />
            </div>
          </Tab.Panel>

          <Tab.Panel className={styles2.gallery}>
            <div className={styles.experienceContainer}>
              {teamMember.experience ? (
                <>
                  <div
                    dangerouslySetInnerHTML={{ __html: teamMember.experience }}
                  />
                </>
              ) : null}
            </div>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </>
  );
};

export default TeamProfileContent;
