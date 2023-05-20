import React, { Component } from 'react';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Searchbar } from './Searchbar/Searchbar';
import toast, { Toaster } from 'react-hot-toast';
import { GlobalStyle } from 'UI/GlobalStyles/GlobalStyles';
import { AppContainer } from './App.styled';
const notify = () => toast('Here is your toast.');
export class App extends Component {
  state = {
    query: '',
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
      };
    });
  };

  render() {
    const { query } = this.state;
    return (
      <AppContainer>
        <GlobalStyle />
        <Searchbar onSearch={this.onSearch} />
        <ImageGallery query={query} />
        <Toaster />
      </AppContainer>
    );
  }
}
