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
      this.setState({ ...initialState }, this.fetchImages);
    } catch (error) {
      console.log(error.message);
    }
  };

  onLoadMore = () => {
    this.setState(
      prevState => ({ page: prevState.page + 1 }),
      this.fetchImages
    );
  };

  onLastPage = () => {
    const { totalHits, hits } = this.state;
    const isLastPage = hits.length >= totalHits;
    if (isLastPage) {
      toast(`You have reached the last page!`, {
        icon: '😅',
        style: { backgroundColor: '#3f51b5', color: '#fff' },
        position: 'bottom-center',
      });
    }
  };

  fetchImages = async () => {
    try {
      this.setState({ isLoading: true });
      const { query } = this.props;
      const { page } = this.state;
      const response = await API.imageSearch(query, page);

      if (page === 1) {
        const { hits, total, totalHits } = response;

        if (total) {
          toast.success(
            `Great! The "${query}" request was successful. ${total} images were found!`,
            { style: { backgroundColor: 'green', color: '#fff' } }
          );
          this.setState({ hits, totalHits });
        } else {
          toast(`Sorry. No images were found for your query "${query}"!`, {
            icon: '😥',
            style: { backgroundColor: 'red', color: '#fff' },
          });
        }
      } else {
        this.setState(
          prevState => ({
            hits: [...prevState.hits, ...response.hits],
          }),
          this.onLastPage
        );
        setTimeout(() => {
          window.scrollBy({
            top: window.innerHeight,
            behavior: 'smooth',
          });
        }, 200);
      }
    } catch (error) {
      this.setState({ ...initialState });
      toast.error(error.message, {
        style: { backgroundColor: 'red', color: '#fff' },
      });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  render() {
    const { isLoading, hits, totalHits } = this.state;
    const showButton = totalHits !== hits.length && !isLoading;

    return (
      <>
        <GalleryList>
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
