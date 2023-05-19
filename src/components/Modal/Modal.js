import { ModalStyled, Overlay } from './Modal.styled';

export const Modal = ({ src, alt }) => {
  return (
    <Overlay className="overlay">
      <ModalStyled className="modal">
        <img src={src} alt={alt} />
      </ModalStyled>
    </Overlay>
  );
};
