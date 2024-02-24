//import { DUMMY_PUBLICATIONSDATA } from "@/constants/publicationdata";
import { DUMMY_TEAMINFO_LAWYERS } from "@/constants/teamdata";
import React, { useState, useEffect } from "react";

const Pagination = () => {
  const [info, setInfo] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);

  const [infoPerPage, setInfoPerPage] = useState(2);

  const numOfTotalPages = Math.ceil(
    DUMMY_TEAMINFO_LAWYERS.length / infoPerPage
  );

  const pages = [...Array(numOfTotalPages + 1).keys()].slice(1);

  //console.log(pages);

  const indexOfLastInfo = currentPage * infoPerPage;

  const indexOfFirstInfo = indexOfLastInfo - infoPerPage;

  const visibleLawyers = DUMMY_TEAMINFO_LAWYERS.slice(
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
      <select onChange={(e) => setInfoPerPage(e.target.value)}>
        <option value="2">2</option>
        <option value="5">5</option>
        <option value="10">10</option>
      </select>
      <div style={{ border: "1px solid red" }}>
        {visibleLawyers.map((piece) => (
          <p key={piece.id}>{piece.role}</p>
        ))}
        {/* <h4>{numOfTotalPages}</h4> */}
        <div className="paginationContainer">
          <span onClick={prevPageHandler}>Prev</span>
          <p>
            {pages.map((page) => (
              <span
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`${currentPage === page ? "active" : ""}`}
              >{`${page} `}</span>
            ))}
          </p>
          <span onClick={nextPageHandler}>Next</span>
        </div>
      </div>
    </>
  );
};

export default Pagination;
