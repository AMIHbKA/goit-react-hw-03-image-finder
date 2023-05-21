import { RiseLoader } from 'react-spinners';
import PropTypes from 'prop-types';

export const Loader = ({ isLoading }) => {
  return (
    <RiseLoader
      color="#3f51b5"
      cssOverride={{
        display: 'block',
        margin: '7px auto',
      }}
      margin={7}
      size={15}
      loading={isLoading}
    />
  );
};

Loader.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};
