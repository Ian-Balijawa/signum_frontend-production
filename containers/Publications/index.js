import Navbar from "@/components/Navbar";
//import Pagination from "@/components/Pagination";
import {
  DUMMY_PUBLICATESINFO,
  DUMMY_PUBLICDATA,
} from "@/constants/publicationdata";
import Link from "next/link";
import PublicationsCard from "./../../components/PublicationCard";
//import PublicationNavTab from "./components/PublicationNavTab";
import styles from "./style.module.css";
import React, { useState, useEffect } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const PublicationContent = () => {
  const [publicationsInfo, setpublicationsInfo] =
    useState(DUMMY_PUBLICATESINFO);

  const [currentPage, setCurrentPage] = useState(1);

  const [infoPerPage, setInfoPerPage] = useState(2);

  const numOfTotalPages = Math.ceil(publicationsInfo.length / infoPerPage);

  const pages = [...Array(numOfTotalPages + 1).keys()].slice(1);

  //console.log(pages);

  const indexOfLastInfo = currentPage * infoPerPage;

  const indexOfFirstInfo = indexOfLastInfo - infoPerPage;

  const visiblePulications = publicationsInfo.slice(
    indexOfFirstInfo,
    indexOfLastInfo
  );

  function prevPageHandler() {
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
  }

  function nextPageHandler() {
    if (currentPage !== numOfTotalPages) setCurrentPage(currentPage + 1);
  }
  return (
    <>
      <Navbar />
      <div className={styles.publicationContainer}>
        <div className={styles.bigcardContainer}>
          <h2>Latest</h2>
          {visiblePulications.map((item) => (
            <Link href={`/publications/${item.id}`} key={item.id}>
              <PublicationsCard
                date={item.date}
                title={item.title}
                description={item.description}
                subHeading={item.subHeading}
                className={styles.bigcard}
              />
            </Link>
          ))}
        </div>

        <div className={styles.smallcardContainer}>
          <h2>Featured</h2>
          {DUMMY_PUBLICDATA.map((part) => (
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
      <div className="paginationContainer">
        <span onClick={prevPageHandler}>
          <IoIosArrowBack size={18} className="page_icon" />
        </span>
        <p>
          {pages.map((page) => (
            <span
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`${currentPage === page ? "active" : ""}`}
            >{`${page} `}</span>
          ))}
        </p>
        <span onClick={nextPageHandler}>
          <IoIosArrowForward size={18} className="page_icon" />
        </span>
      </div>
      {/* <div className={styles.publicationnavtab}>
        <PublicationNavTab />
      </div> */}
    </>
  );
};

export default PublicationContent;
