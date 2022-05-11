import React from "react";
import { Link } from "react-router-dom";

type Props = {
  gotoNextPage: any;
  gotoPrevPage: any;
  pageNumber: any;
};

const Pagination = ({ gotoNextPage, gotoPrevPage, pageNumber }: Props) => {
  const prevURL: string = `/page/${parseInt(pageNumber) - 20}`;
  const nextURL: string = `/page/${parseInt(pageNumber) + 20}`;
  return (
    <div className="flex space-x-4 place-content-center mt-6">
      {gotoPrevPage && (
        <Link to={prevURL}>
          <button className="rounded-full w-20 h-10">Previous</button>
        </Link>
      )}

      {gotoNextPage && (
        <Link to={nextURL}>
          <button className="rounded-full w-20 h-10">Next</button>
        </Link>
      )}
    </div>
  );
};

export default Pagination;
