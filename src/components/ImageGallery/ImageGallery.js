import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Component } from 'react';
import * as API from 'services/api/api';
export class ImageGallery extends Component {
  state = { data: null }; //[]

  async componentDidUpdate(prevProps, prevState) {
    console.log('prevProps', prevProps);
    if (prevProps.query !== this.props.query) {
      const { query, page } = this.props;
      this.getImages(query, page);
    }
  }

  getImages = async (query, page) => {
    try {
      const response = await API.imageSearch(query, page);
      console.log('getImages', response);
      this.setState({ data: response });
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
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
    );
  }
}
