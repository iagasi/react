import React from 'react';
import { LocalStorage } from '../utils/localstorage';
import '../styles/search.scss';
type state = {
  searchText: string;
};
export class SearchBar extends React.Component {
  input: React.LegacyRef<HTMLInputElement> | undefined;
  constructor(props: state) {
    super(props);
    this.add = this.add.bind(this);
    this.input = React.createRef();
  }
  state = {
    searchText: '',
  };

  componentDidMount() {
    const data = LocalStorage.get();
    this.setState({
      searchText: data || '',
    });
  }
  componentDidUpdate() {
    //LocalStorage.set(this.input.current.value)
    LocalStorage.set(this.state.searchText);
  }
  add(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState(() => ({
      searchText: e.target.value,
    }));

    // LocalStorage.set(e.target.value);
  }
  render() {
    return (
      <div className="search" data-testid="test-search">
        <img className="search__icon" src="/search.png" alt="" />
        <input
          ref={this.input}
          className="search__input"
          type="text"
          value={this.state.searchText}
          onChange={(e) => this.add(e)}
        />
      </div>
    );
  }
}
