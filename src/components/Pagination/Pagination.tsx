import React from "react";

type Props = {
  gotoNextPage: any;
  gotoPrevPage: any;
};

const Pagination = ({ gotoNextPage, gotoPrevPage }: Props) => {
  return (
    <div className="flex space-x-4 place-content-center mt-6">
      {gotoPrevPage && (
        <button className="rounded-full w-20 h-10" onClick={gotoPrevPage}>
          Previous
        </button>
      )}
      {gotoNextPage && (
        <button className="rounded-full w-20 h-10" onClick={gotoNextPage}>
          Next
        </button>
      )}
    </div>
  );
};

export default Pagination;
