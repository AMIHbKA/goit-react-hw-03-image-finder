import { Button } from 'components/Button/Button';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Loader } from 'components/Loader/Loader';
import { Component } from 'react';

import * as API from 'services/api/api';
export class ImageGallery extends Component {
  state = { data: null, isLoading: false };

  async componentDidUpdate(prevProps, prevState) {
    console.log('prevProps', prevProps);
    console.log('prevState', prevState);

    if (prevProps.query !== this.props.query) {
      const { query, page } = this.props;
      this.getImages(query, page);
    }
  }

  getImages = async (query, page) => {
    console.log('props', this.props);
    try {
      this.setState({ isLoading: true });
      const response = await API.imageSearch(query, page);
      this.setState({ data: response, isLoading: false });
      return response.data;
    } catch (error) {
      this.setState({ isLoading: false });
      console.log(error);
    }
  };

  render() {
    const { isLoading } = this.state;
    console.log('isLoading', isLoading);
    return (
      <>
        <ul className="gallery">
          {this.state.data &&
            this.state.data.hits.map(
              ({ id, webformatURL, tags, largeImageURL }) => (
                <ImageGalleryItem
                  id={id}
                  webformatURL={webformatURL}
                  tags={tags}
                  largeImageURL={largeImageURL}
                />
              )
            )}
        </ul>
        {isLoading && <Loader />}
        {this.state.data && !isLoading && <Button />}
      </>
    );
  }
}
