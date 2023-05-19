import { Modal } from 'components/Modal/Modal';
import { Component } from 'react';
import { createPortal } from 'react-dom';

export class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };

  onShowModal = () => {
    console.log('onShowModal');
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
        <li key={id} className="gallery-item">
          <img src={webformatURL} alt={tags} onClick={this.onShowModal} />
          {showModal &&
            createPortal(
              <Modal src={largeImageURL} alt={tags} />,
              document.body
            )}
        </li>
      </>
    );
  }
}
//largeImageURL
