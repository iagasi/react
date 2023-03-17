import React from 'react';
import '../styles/search.scss';
type state = {
  searchText: string;
};
export class SearchBar extends React.Component {
  constructor(props: state) {
    super(props);
    this.add = this.add.bind(this);
  }
  state = {
    searchText: '',
  };
  add(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({
      searchText: e.target.value,
    });
  }
  render() {
    return (
      <h2 className="search">
        <img className="search__icon" src="/search.png" alt="" />
        <input
          className="search__input"
          type="text"
          value={this.state.searchText}
          onChange={(e) => this.add(e)}
        />
      </h2>
    );
  }
}
