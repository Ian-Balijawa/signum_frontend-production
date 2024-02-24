import {
  DUMMY_TEAMINFO,
  DUMMY_TEAMINFO_ADMIN,
  DUMMY_TEAMINFO_LAWYERS,
} from '@/constants/teamdata';
import { Tab } from '@headlessui/react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './style.module.css';
import classNames from 'classnames';
import React, { useState, useEffect } from 'react';
// import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import AOS from 'aos';
import 'aos/dist/aos.css';

function TeamTabs({ teamMembers, image_url }) {
  const { Partners, Lawyers, Administrators } = teamMembers;

  useEffect(() => {
    AOS.init({ duration: 2000 });
  });

  const mapMember = (teamMember) => (
    <Link href={`/team/${teamMember._id}`}>
      <div
        className={styles.teamMember}
        key={teamMember._id}
        data-aos="zoom-in"
      >
        <Image
          src={teamMember.image_url}
          width={280}
          height={360}
          style={{ objectFit: 'cover' }}
          alt={`Picture of ${teamMember.name}`}
        />

        <p>{teamMember.name}</p>

        <p>{teamMember.position}</p>
      </div>
    </Link>
  );

  return (
    <Tab.Group>
      <div className={styles.tabContainer}>
        <Tab.List className={styles.line}>
          <Tab
            className={({ selected }) =>
              `${selected ? styles.active : styles.inactive}`
            }
          >
            Partners
          </Tab>

          <Tab
            className={({ selected }) =>
              `${selected ? styles.active : styles.inactive}`
            }
          >
            Lawyers
          </Tab>
          <Tab
            className={({ selected }) =>
              `${selected ? styles.active : styles.inactive}`
            }
          >
            Admin
          </Tab>
        </Tab.List>
      </div>
      <Tab.Panels>
        <Tab.Panel className={styles.gallery}>
          {Partners.sort((a, b) => a.feOrder - b.feOrder).map((member, index) =>
            mapMember(member),
          )}
        </Tab.Panel>
        <Tab.Panel className={styles.gallery}>
          {Lawyers.sort((a, b) => a.feOrder - b.feOrder).map((member, index) =>
            mapMember(member),
          )}
        </Tab.Panel>
        <Tab.Panel className={styles.gallery}>
          {Administrators.sort((a, b) => a.feOrder - b.feOrder).map(
            (member, index) => mapMember(member),
          )}
        </Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  );
}

export default TeamTabs;
