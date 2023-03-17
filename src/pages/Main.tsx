import { products } from '../data.json';
import React from 'react';
import { SearchBar } from '../components/SearchBar';
import { Item } from '../components/Item';
export class Main extends React.Component {
  componentDidMount(): void {
    const y = '';
  }
  render(): React.ReactNode {
    return (
      <div>
        <SearchBar />

        <Item item={products[0]} />
      </div>
    );
  }
}
