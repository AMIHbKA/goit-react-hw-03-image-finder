import React, { Component } from 'react';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Searchbar } from './Searchbar/Searchbar';
import * as API from 'services/api/api';

export class App extends Component {
  state = {
    query: '',
    page: 1,
    collectionData: [],
    isLoading: false,
    error: false,
  };

  onSearch = newQuery => {
    this.setState(prevState => {
      const { query } = prevState;

      if (query === newQuery) {
        console.log('запрос одинаковый');
        return null;
      }

      return {
        query: newQuery,
      };
    });
  };

  getImages = async () => {
    try {
      const response = await API.imageSearch('cars', 21);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <>
        <Searchbar onSearch={this.onSearch} />
        <ImageGallery />
        <button onClick={this.getImages}>xxxx</button>
      </>
    );
  }
}
