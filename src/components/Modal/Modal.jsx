import { Component } from 'react';
import { CloseButton, ModalStyled, Overlay } from './Modal.styled';

export class Modal extends Component {
  state = {
    isOpen: false,
  };

  componentDidMount() {
    document.addEventListener('keydown', this.onEscKey);
    document.documentElement.style.overflowY = 'hidden';
    setTimeout(() => {
      this.setState({ isOpen: true });
    }, 500);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.onEscKey);
    document.documentElement.style.overflowY = 'auto';
  }

  onEscKey = event => {
    if (event.code !== 'Escape') {
      return;
    }

    this.props.onActive();
  };

  handleClick = event => {
    const { target, currentTarget } = event;
    if (target === currentTarget) {
      this.props.onActive();
    }
  };

  render() {
    const { isOpen } = this.state;
    const modalClassName = isOpen ? 'modal-open' : '';

    return (
      <Overlay onClick={this.handleClick}>
        <ModalStyled className={modalClassName}>
          {this.props.children}
        </ModalStyled>
        <CloseButton
          width={48}
          height={48}
          type="button"
          onClick={this.handleClick}
        />
      </Overlay>
    );
  }
}
