import classNames from 'classnames';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './style.module.css';
// import { DUMMY_TEAMDATA } from "@/constants/teamdata";
import { HiOutlineArrowLeft, HiOutlineArrowRight } from 'react-icons/hi';
import { FetchFunctions } from '@/utils';
import { teamMemberEndpoints } from '@/beConstants';
import { Button } from 'antd';

function Teamcard({ teamMembers, navigation }) {
  function scrollLeft() {
    let left = document.querySelector(
      '.' + classNames(styles.horizontalslider),
    );
    left.scroll({ left: left.scrollLeft + 200, behavior: 'smooth' });
  }

  function scrollRight() {
    let right = document.querySelector(
      '.' + classNames(styles.horizontalslider),
    );
    right.scroll({ left: right.scrollLeft - 200, behavior: 'smooth' });
  }

  return (
    <>
      <div className={`${styles.outer_container} ${styles.horizontalslider}`}>
        {teamMembers.map((item) => {
          return (
            <div key={teamMembers.id} className={styles.sliderCase}>
              <div className={`${styles.container}`}>
                <div className={`${styles.box}`}>
                  <div className={styles.imageBox}>
                    <img src={item.image_url} alt={item.heading} />
                  </div>
                  <div className={styles.content}>
                    <h3>{item.name}</h3>
                    <p>{item.position}</p>
                    <div
                      className={styles.teamMemberDescription}
                      dangerouslySetInnerHTML={{
                        // __html: getFirst4Paragraphs(item.description),
                        __html: item.description,
                      }}
                    />
                    <Link href={`/team/${item._id}`}>
                      <Button ghost className={styles.contentButton}>
                        Learn more about {item.name.split(' ')[0]}
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className={styles.paginationbuttons}>
        <button onClick={scrollRight}>
          <HiOutlineArrowLeft />
        </button>
        <button onClick={scrollLeft}>
          <HiOutlineArrowRight />
        </button>
      </div>
    </>
  );
}

export default Teamcard;
