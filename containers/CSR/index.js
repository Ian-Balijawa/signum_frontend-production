import Navbar from "@/components/Navbar";
//import Pagination from "@/components/Pagination";
import { DUMMY_CSRDATA } from "@/constants/csrdata";
import Csrcard from "./components/Csrcard";
import styles from "./style.module.css";
import React, { useState, useEffect } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const CSRContent = () => {
  const [csrInfo, setCsrInfo] = useState(DUMMY_CSRDATA);

  const [currentPage, setCurrentPage] = useState(1);

  const [infoPerPage, setInfoPerPage] = useState(5);

  const numOfTotalPages = Math.ceil(csrInfo.length / infoPerPage);

  const pages = [...Array(numOfTotalPages + 1).keys()].slice(1);

  //console.log(pages);

  const indexOfLastInfo = currentPage * infoPerPage;

  const indexOfFirstInfo = indexOfLastInfo - infoPerPage;

  const visibleCSR = csrInfo.slice(indexOfFirstInfo, indexOfLastInfo);

  function prevPageHandler() {
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
  }

  function nextPageHandler() {
    if (currentPage !== numOfTotalPages) setCurrentPage(currentPage + 1);
  }

  return (
    <>
      <Navbar />
      {/* <select
        onChange={(e) => setInfoPerPage(e.target.value)}
        className="selectionBox"
      >
        <option value="2">2</option>
        <option value="5">5</option>
        <option value="10">10</option>
      </select> */}

      <div className={styles.container}>
        {visibleCSR.map((item) => (
          <Csrcard
            key={item.id}
            image={item.image}
            title={item.title}
            date={item.date}
            heading={item.heading}
            content={item.content}
          />
        ))}
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
    </>
  );
};

export default CSRContent;
