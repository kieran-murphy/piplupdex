import React from "react";

type Props = {
  gotoNextPage: any;
  gotoPrevPage: any;
};

const Pagination = ({ gotoNextPage, gotoPrevPage }: Props) => {
  return (
    <div className="flex space-x-4 place-content-center mt-6">
      {gotoPrevPage && (
        <button className="" onClick={gotoPrevPage}>
          Previous
        </button>
      )}
      {gotoNextPage && (
        <button className="" onClick={gotoNextPage}>
          Next
        </button>
      )}
    </div>
  );
};

export default Pagination;
