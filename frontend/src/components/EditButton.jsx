import React from 'react';
import PropTypes from 'prop-types';
import EditIcon from '@mui/icons-material/Edit';

export default function EditButton({ onClick }) {
  return (
    <EditIcon
      type="button"
      onClick={ onClick }
      size="small"
      style={ { verticalAlign: 'middle' } }
    />
  );
}

EditButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};
