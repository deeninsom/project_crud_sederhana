import React, { useEffect, useState } from "react";

const Pagination = ({  setcurrentPage }) => {
  const pages = 10;
  const pageNumber = [];
  for (let i = 1; i <= pages; i++) {
    pageNumber.push(i);
  }

  // for (let i = 1; i <= Math.ceil(pages / pageCount); i++) {
  //   pageNumber.push(i);
  // }
  const [currentButton, setcurrentButon] = useState(1);
  const [arrOfCurrButtons, setarrOfCurrButtons] = useState([]);

  useEffect(() => {
    let tempNumberOfPages = [...arrOfCurrButtons];

    let dotInitial = "...";
    let dotsleft = "...";
    let dotright = "...";

    if (currentButton >= 1 && currentButton <= 3) {
      tempNumberOfPages = [1, 2, 3, 4, dotInitial, pageNumber.length];
    } else if (currentButton === 4) {
      const sliced = pageNumber.slice(0, 5);
      tempNumberOfPages = [...sliced, dotInitial, pageNumber.length];
    } else if (currentButton > 4 && currentButton < pageNumber.length - 2) {
      const sliced1 = pageNumber.slice(currentButton - 2, currentButton);
      const sliced2 = pageNumber.slice(currentButton, currentButton + 1);
      tempNumberOfPages = [
        1,
        dotsleft,
        ...sliced1,
        ...sliced2,
        dotright,
        pageNumber.length,
      ];
    } else if (currentButton === dotInitial) {
      setcurrentButon(arrOfCurrButtons[arrOfCurrButtons.length - 3] + 1);
    } else if (currentButton === dotright) {
      setcurrentButon(arrOfCurrButtons[3] + 2);
    } else if (currentButton === dotsleft) {
      setcurrentButon(arrOfCurrButtons[3] - 2);
    }
    setarrOfCurrButtons(tempNumberOfPages);
    setcurrentPage(currentButton);
  }, [currentButton]);
  return (
    <div>
      <div className="pagination-container">
        <a
          className="disable"
          onClick={() =>
            setcurrentButon((prev) => (prev === 1 ? prev : prev - 1))
          }
        >
          Prev
        </a>
        {arrOfCurrButtons.map((page, index) => {
          return (
            <a
              key={index}
              onClick={() => setcurrentButon(page)}
              className={currentButton === page ? "active" : ""}
            >
              {page}
            </a>
          );
        })}
        <a
          className="disable"
          onClick={() =>
            setcurrentButon((prev) =>
              prev === pageNumber.length ? prev : prev + 1
            )
          }
        >
          Next
        </a>
      </div>
    </div>
    // <nav aria-label="Page navigation example">
    //   <ul className="pagination">
    //     <li className="page-item">
    //       <a className="page-link" >
    //         Previous
    //       </a>
    //     </li>
    //     {pageNumber.map((page) => {
    //       return (
    //         <li className="page-item" key={page}>
    //           <a className="page-link" on>{page}</a>
    //         </li>
    //       );
    //     })}
    //     <li className="page-item">
    //       <a className="page-link">Next</a>
    //     </li>
    //   </ul>
    // </nav>
  );
};

export default Pagination;

//  <a className="page-link" onClick={() => paginate(page)}>
//    {page}
//  </a>;
