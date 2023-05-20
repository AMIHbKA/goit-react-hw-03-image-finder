import { LoadMore } from './Button.styled';

export const Button = ({ onLoad }) => {
  return (
    <LoadMore type="button" onClick={onLoad}>
      Load more
    </LoadMore>
  );
};
