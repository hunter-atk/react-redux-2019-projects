import React, { Component } from 'react';

class Searchbar extends Component {
  render() {
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input type="text" />
          </div>
        </form>
      </div>
    );
  }
}

export default Searchbar;
