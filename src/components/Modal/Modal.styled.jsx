import styled from 'styled-components';
import { CloseButtonIcon } from 'UI/icons';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(0 0 0 / 0.8);
  z-index: 1200;
`;

export const ModalStyled = styled.div`
  max-width: calc(100vw - 48px);
  max-height: calc(100vh - 24px);
  opacity: 0;
  transform: translateY(-20px);
  transition: opacity 0.5s ease, transform 0.3s ease;

  &.modal-open {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const CloseButton = styled(CloseButtonIcon)`
  content: '';
  position: absolute;
  top: 1.8rem;
  right: 1.8rem;
  background-size: contain;
  background-repeat: no-repeat;
  fill: #fff;
  cursor: pointer;

  &:hover {
    fill: #3f51b5;
  }
`;
