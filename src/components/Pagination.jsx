function Pagination({ itemsPerPage, totalItems, paginate, currentPage }) {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
      pageNumbers.push(i);
    }
  
    return (
      <nav>
        <ul className="pagination">
          {pageNumbers.map((number) => (
            <li key={number} className={`page-item ${currentPage === number ? "active" : ""}`}>
              <button className="page-link" onClick={() => paginate(number)}>{number}</button>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
  
  export default Pagination;