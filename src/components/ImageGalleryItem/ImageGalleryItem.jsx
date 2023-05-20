import { Modal } from 'components/Modal/Modal';
import { Component } from 'react';
import { createPortal } from 'react-dom';
import { Item } from './ImageGalleryItem.styled';

export class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };

  onShowModal = () => {
    this.setState(prevState => {
      return { showModal: !prevState.showModal };
    });
  };

  render() {
    const { id, webformatURL, tags, largeImageURL } = this.props;
    const { showModal } = this.state;
    console.log('showModal', showModal);
    return (
      <>
        <Item key={id} className="gallery-item">
          <img src={webformatURL} alt={tags} onClick={this.onShowModal} />
          {showModal &&
            createPortal(
              <Modal onActive={this.onShowModal}>
                <img src={largeImageURL} alt={tags} />
              </Modal>,
              document.body
            )}
        </Item>
      </>
    );
  }
}
//largeImageURL
