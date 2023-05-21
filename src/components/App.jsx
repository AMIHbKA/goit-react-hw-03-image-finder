import React, { Component } from 'react';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Searchbar } from './Searchbar/Searchbar';
import toast, { Toaster } from 'react-hot-toast';
import { GlobalStyle } from 'UI/GlobalStyles/GlobalStyles';
import { AppContainer } from './App.styled';

export class App extends Component {
  state = {
    query: '',
  };

  onSearch = newQuery => {
    this.setState(prevState => {
      const { query } = prevState;

      if (query === newQuery) {
        toast(
          `Information about the query "${newQuery}" has already been submitted!`,
          { icon: '🙃' }
        );
        return null;
      }

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
        <Toaster
          position="top-right"
          toastOptions={{
            style: {
              color: '#3f51b5',
              fontSize: '1.2em',
            },
            duration: 3000,
          }}
        />
      </AppContainer>
    );
  }
}
