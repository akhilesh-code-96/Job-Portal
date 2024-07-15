import React from 'react';

interface PaginationProps {
  totalJobs: number;
  jobsPerPage: number;
  currentPage: number;
  paginate: (pageNumber: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  totalJobs,
  jobsPerPage,
  currentPage,
  paginate,
}) => {
  const pageNumbers: number[] = [];

  for (let i = 1; i <= Math.ceil(totalJobs / jobsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="flex justify-center space-x-2 mt-4">
      {pageNumbers.map((number) => (
        <button
          key={number}
          onClick={() => paginate(number)}
          className={`px-4 py-2 rounded-lg h-10 ${
            number === currentPage
              ? 'bg-blue-500 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          {number}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
