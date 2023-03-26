import { products } from '../data.json';
import React from 'react';
import { SearchBar } from '../components/SearchBar';
import { Item } from '../components/Item';
import '../styles/main.scss';
export class Main extends React.Component {
  render() {
    return (
      <div className="main__wrapper">
        <SearchBar />
        <div className="main">
          {products.map((product) => {
            return <Item item={product} key={product.id} />;
          })}
        </div>
      </div>
    );
  }
}
