import React from 'react';

const Pagination = ({
  currentPage,
  totalPages,
  changePage,
  rowsPerPage,
  handleRowsPerPageChange
}) => {
  return (
    <div className="d-flex align-items-center">
      <span className="page-info me-3">Página {currentPage} de {totalPages}</span>
      <button
        className="btn-outline-dark me-1"
        onClick={() => changePage('prev')}
        disabled={currentPage === 1}
        style={{ height: '36px' }}
      >
        Anterior
      </button>
      <div className="pagination-number-box d-flex justify-content-center align-items-center me-1">
        {currentPage}
      </div>
      <button
        className="btn-outline-dark me-1"
        onClick={() => changePage('next')}
        disabled={currentPage === totalPages}
        style={{ height: '36px' }}
      >
        Seguinte
      </button>
      <select className="form-select" value={rowsPerPage} onChange={handleRowsPerPageChange}>
        <option value="8">8</option>
        <option value="16">16</option>
        <option value="24">24</option>
      </select>
    </div>
  );
};

export default Pagination;