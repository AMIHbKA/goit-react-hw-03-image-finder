import { ModalStyled, Overlay } from './Modal.styled';

export const Modal = ({ onActive, children }) => {
  const handleClick = event => {
    const { target, currentTarget } = event;
    if (target === currentTarget) {
      onActive();
    }
  };

  return (
    <Overlay className="overlay" onClick={handleClick}>
      <ModalStyled className="modal">{children}</ModalStyled>
    </Overlay>
  );
};
