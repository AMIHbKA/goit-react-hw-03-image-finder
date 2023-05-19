import { Button } from 'components/Button/Button';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Loader } from 'components/Loader/Loader';
import { Component } from 'react';

import * as API from 'services/api/api';
export class ImageGallery extends Component {
  state = { data: null, isLoading: false, page: 1, totalPages: 1 };

  async componentDidUpdate(prevProps, prevState) {
    console.log('prevState', prevState);
    if (prevProps.query !== this.props.query) {
      this.setState({ page: 1, data: null });
      const { query } = this.props;
      const { page } = this.state;
      this.getImages(query, page);
    }
  }

  onLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
    console.log('page', this.state.page);
  };

  getImages = async (query, page) => {
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
    // const totalPages

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
        {this.state.data?.total > 0 && !isLoading && (
          <Button onLoad={this.onLoadMore} />
        )}
      </>
    );
  }
}
