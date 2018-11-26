import axios from 'axios';
import React, { Component } from 'react';
import Searchbar from './SearchBar';

class App extends Component {
  state = { images: [] };

  onSearchSubmit = async term => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
      params: { query: term },
      headers: {
        Authorization:
          'Client-ID 252c964e842d0c64a49e0efb2a8e9da67f8b48f7d65ea3306ee888fd3df00955'
      }
    });

    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <Searchbar onSubmit={this.onSearchSubmit} />
        Found: {this.state.images.length} images.
      </div>
    );
  }
}

export default App;
