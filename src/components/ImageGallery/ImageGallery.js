import { Button } from 'components/Button/Button';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Loader } from 'components/Loader/Loader';
import { Component } from 'react';

import * as API from 'services/api/api';
export class ImageGallery extends Component {
  state = { hits: null, total: 0, isLoading: false, page: 1, totalPages: 1 };

  async componentDidUpdate(prevProps, prevState) {
    if (prevProps.query !== this.props.query) {
      await this.setState({ page: 1, hits: [], total: 0 });
      const { query } = this.props;
      const { page } = this.state;
      console.log('Страница в апдейте перед сбросом', page);
      this.getImages(query, page);
    }
  }

  onLoadMore = async () => {
    await this.setState(prevState => ({ page: prevState.page + 1 }));
    const { query } = this.props;
    const { page } = this.state;
    console.log('Страница лоад мор', page);
    this.getImages(query, page);
  };

  getImages = async (query, page) => {
    try {
      this.setState({ isLoading: true });
      const response = await API.imageSearch(query, page);
      if (page === 1) {
        const { hits, total } = response;
        this.setState({ hits, total, isLoading: false });
      } else {
        // const { hits } = this.state.data;
        this.setState({
          hits: [...this.state.hits, ...response.hits],
          isLoading: false,
        });
      }
      // return response.data;
    } catch (error) {
      this.setState({ isLoading: false });
      console.log(error);
    }
  };

  render() {
    const { isLoading } = this.state;
    // const totalPages
    const { hits, total } = this.state;
    const length = hits?.length;
    return (
      <>
        <ul className="gallery">
          {length &&
            hits.map(({ id, webformatURL, tags, largeImageURL }) => (
              <ImageGalleryItem
                id={id}
                webformatURL={webformatURL}
                tags={tags}
                largeImageURL={largeImageURL}
              />
            ))}
        </ul>
        {isLoading && <Loader />}
        {total > 0 && !isLoading && <Button onLoad={this.onLoadMore} />}
      </>
    );
  }
}
