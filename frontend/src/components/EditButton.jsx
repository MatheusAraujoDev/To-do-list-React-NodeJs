import EditIcon from '@mui/icons-material/Edit';
import PropTypes from 'prop-types';
import React from 'react';

export default function EditButton({ onClick }) {
  return (
    <EditIcon
      type="button"
      onClick={ onClick }
      size="small"
      style={ { verticalAlign: 'middle', cursor: 'pointer' } }
    />
  );
}

EditButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};
