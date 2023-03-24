function Pagination({ itemsPerPage, totalItems, paginate, currentPage, previousPage, nextPage }) {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="flex justify-center">
    <nav>
      <ul className="inline-flex -space-x-px">
        <li>
          <button
            onClick={previousPage}
            className="px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700"
          >
            Previous
          </button>
        </li>
        {pageNumbers.map((number) => (
          <li key={number}>
            <button
              onClick={() => paginate(number)}
              className={`px-3 py-2 leading-tight ${currentPage == number ? 'text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700' : 'text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700'}`}
            >
              {number}
            </button>
          </li>
        ))}
        <li>
          <button
            onClick={nextPage}
            className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700"
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
    </div>
  );
}

export default Pagination;
