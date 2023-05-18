import React, { Component } from 'react';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Searchbar } from './Searchbar/Searchbar';
import toast, { Toaster } from 'react-hot-toast';
const notify = () => toast('Here is your toast.');
export class App extends Component {
  state = {
    query: '',
    page: 1,
    isLoading: false,
  };

  onSearch = newQuery => {
    notify();
    this.setState(prevState => {
      const { query } = prevState;

      if (query === newQuery) {
        console.log('запрос одинаковый');
        return null;
      }
      console.log('newQuery', newQuery);
      return {
        query: newQuery,
        page: 1,
      };
    });
  };

  render() {
    const { query, page } = this.state;
    return (
      <>
        <Searchbar onSearch={this.onSearch} />
        <ImageGallery query={query} page={page} onLoadMore={this.nextPage} />
        <Toaster />
      </>
    );
  }
}
