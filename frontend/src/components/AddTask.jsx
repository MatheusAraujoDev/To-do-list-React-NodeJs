import React from 'react';
import Button from '@mui/material/Button';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import PropTypes from 'prop-types';

export default function AddTask({ onChange, onClick }) {
  return (
    <label htmlFor="addInput" className="addTask">
      <input
        data-testid="addTask-Input"
        type="text"
        name="addInput"
        id="addInput"
        onChange={ onChange }
      />
      <Button
        color="success"
        data-testid="addTask-Button"
        type="button"
        onClick={ onClick }
        size="small"
        startIcon={ <AddCircleOutlineIcon /> }
        variant="contained"
      >
        Criar Tarefa
      </Button>
    </label>
  );
}

AddTask.propTypes = {
  onChange: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
};
