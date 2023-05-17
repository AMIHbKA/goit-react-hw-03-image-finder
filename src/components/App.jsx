import React, { Component } from 'react';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Searchbar } from './Searchbar/Searchbar';
import * as API from 'services/api/api';

export class App extends Component {
  getImages = async () => {
    try {
      const response = await API.imageSearch('cars', 21);
    } catch (error) {}
  };

  render() {
    return (
      <>
        <Searchbar />
        <ImageGallery />
        <button onClick={this.getImages}>xxxx</button>
      </>
    );
  }
}
