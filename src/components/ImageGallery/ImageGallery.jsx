import { Button } from 'components/Button/Button';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Loader } from 'components/Loader/Loader';
import { Component } from 'react';
import toast from 'react-hot-toast';

import * as API from 'services/api/api';
import { GalleryList } from './ImageGallery.styled';

const initialState = {
  hits: [],
  totalHits: 0,
  isLoading: false,
  page: 1,
  error: false,
};

export class ImageGallery extends Component {
  state = {
    ...initialState,
  };

  componentDidUpdate(prevProps) {
    if (prevProps.query !== this.props.query) {
      this.resetStateAndFetchImages();
    }
  }

  resetStateAndFetchImages = async () => {
    try {
      this.setState({ ...initialState }, () => {
        const { query } = this.props;
        this.fetchImages(query);
      });
    } catch (error) {}
  };

  onLoadMore = () => {
    this.setState(
      prevState => ({ page: prevState.page + 1 }),
      () => {
        const { query } = this.props;
        this.fetchImages(query);
      }
    );
  };

  fetchImages = async query => {
    try {
      this.setState({ isLoading: true });
      const { page } = this.state;
      const response = await API.imageSearch(query, page);

      if (page === 1) {
        const { hits, total, totalHits } = response;

        if (total) {
          toast.success(
            `Great! The "${query}" request was successful. ${total} images were found!`,
            { style: { backgroundColor: 'green', color: '#fff' } }
          );
        } else {
          toast(`Sorry. No images were found for your query "${query}"!`, {
            icon: '😥',
            style: { backgroundColor: 'red', color: '#fff' },
          });
        }

        this.setState({ hits, totalHits });
      } else {
        this.setState(prevState => ({
          hits: [...prevState.hits, ...response.hits],
        }));
      }

      this.setState({ isLoading: false, error: false });
    } catch (error) {
      this.setState({ ...initialState });
      console.log('error', error);
      toast.error(error.message, {
        style: { backgroundColor: 'red', color: '#fff' },
      });
    }
  };

  render() {
    const { isLoading, hits, totalHits, page } = this.state;
    const showButton = totalHits !== hits.length && !isLoading;
    const isNoMoreImages = page > 1 && totalHits === hits.length;
    console.log('page', page);
    console.log('isNoMoreImages', isNoMoreImages);
    console.log('totalHits', totalHits);
    return (
      <>
        <GalleryList className="gallery">
          {totalHits > 0 &&
            hits.map(({ id, webformatURL, tags, largeImageURL }) => (
              <ImageGalleryItem
                id={id}
                webformatURL={webformatURL}
                tags={tags}
                largeImageURL={largeImageURL}
              />
            ))}
        </GalleryList>
        <Loader isLoading={isLoading} />
        <Button onLoad={this.onLoadMore} isShow={showButton} />
      </>
    );
  }
}
