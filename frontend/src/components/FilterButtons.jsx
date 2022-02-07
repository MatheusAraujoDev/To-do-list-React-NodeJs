import React from 'react';
import PropTypes from 'prop-types';

export default function FilterButtons({ onClick1, onClick2, onClick3 }) {
  return (
    <div className="filter-buttons">
      <button
        type="button"
        id="filterBtn"
        onClick={ onClick1 }
      >
        Todas as Tarefas
      </button>
      <button
        type="button"
        id="filterBtn"
        onClick={ onClick2 }
      >
        Apenas concluídas
      </button>
      <button
        type="button"
        id="filterBtn"
        onClick={ onClick3 }
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
