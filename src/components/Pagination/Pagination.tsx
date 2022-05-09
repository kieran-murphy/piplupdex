import React from "react";
import { Link } from "react-router-dom";

type Props = {
  gotoNextPage: any;
  gotoPrevPage: any;
};

const Pagination = ({ gotoNextPage, gotoPrevPage }: Props) => {
  return (
    <div className="flex space-x-4 place-content-center mt-6">
      {gotoPrevPage && (
        <Link to="/page/0">
          <button className="rounded-full w-20 h-10">Previous</button>
        </Link>
      )}

      {gotoNextPage && (
        <Link to="/page/40">
          <button className="rounded-full w-20 h-10">Next</button>
        </Link>
      )}
    </div>
  );
};

export default Pagination;
