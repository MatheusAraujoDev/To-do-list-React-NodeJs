import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Button from '@mui/material/Button';
import PropTypes from 'prop-types';
import React from 'react';

export default function AddTask({ onChange, onClick }) {
  return (
    <label htmlFor="addInput" className="addTask">
      <input
        data-testid="addTask-Input"
        type="text"
        name="addInput"
        id="addInput"
        style={ { borderRadius: '8px' } }
        onChange={ onChange }
      />
      <Button
        color="success"
        data-testid="addTask-Button"
        type="button"
        onClick={ onClick }
        startIcon={ <AddCircleOutlineIcon /> }
        variant="contained"
        size="small"
        style={ { fontSize: 'medium' } }
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
