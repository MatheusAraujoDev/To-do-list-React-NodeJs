import React from 'react';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import PropTypes from 'prop-types';

export default function DeleteTaskButton({ onClick }) {
  return (
    <IconButton
      type="button"
      size="small"
      onClick={ onClick }
      style={ { color: 'black', verticalAlign: 'middle' } }
    >
      <DeleteIcon />
    </IconButton>
  );
}

DeleteTaskButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};
