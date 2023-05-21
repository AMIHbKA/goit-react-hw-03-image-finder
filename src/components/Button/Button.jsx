import { LoadMore } from './Button.styled';

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
