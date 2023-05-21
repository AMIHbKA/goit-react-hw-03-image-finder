import { Modal } from 'components/Modal/Modal';
import { Component } from 'react';
import { createPortal } from 'react-dom';
import { Item } from './ImageGalleryItem.styled';
import PropTypes from 'prop-types';

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

ImageGalleryItem.propTypes = {
  id: PropTypes.number.isRequired,
  webformatURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
};
