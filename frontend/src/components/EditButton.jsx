import React from 'react';
import Button from '@mui/material/Button';
import PropTypes from 'prop-types';

export default function EditButton({ onClick }) {
  return (
    <Button
      color="secondary"
      type="button"
      onClick={ onClick }
      size="small"
      variant="text"
    >
      Editar
    </Button>
  );
}

EditButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};
