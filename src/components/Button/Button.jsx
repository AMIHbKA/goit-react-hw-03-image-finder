import { LoadMore } from './Button.styled';
import PropTypes from 'prop-types';

export const Button = ({ onLoad, isShow }) => {
  if (!isShow) {
    return null;
  }

  return (
    <LoadMore type="button" onClick={onLoad}>
      Load more
    </LoadMore>
  );
};

Button.propTypes = {
  onLoad: PropTypes.func.isRequired,
  isShow: PropTypes.bool,
};
