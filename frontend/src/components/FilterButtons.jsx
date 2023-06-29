import PropTypes from 'prop-types';
import React from 'react';

export default function FilterButtons({ onClick1, onClick2, onClick3 }) {
  return (
    <div className="filter-buttons">
      <button
        type="button"
        id="filterBtn"
        onClick={ onClick1 }
        className="filter-button"
      >
        Todas as Tarefas
      </button>
      <button
        type="button"
        id="filterBtn"
        onClick={ onClick2 }
        className="filter-button"
      >
        Apenas concluídas
      </button>
      <button
        type="button"
        id="filterBtn"
        onClick={ onClick3 }
        className="filter-button"
      >
        Tarefas Pendentes
      </button>
    </div>
  );
}

FilterButtons.propTypes = {
  onClick1: PropTypes.func.isRequired,
  onClick2: PropTypes.func.isRequired,
  onClick3: PropTypes.func.isRequired,
};
