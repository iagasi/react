import { products } from '../data.json';
import pr from '../d.json';
import React, { useEffect, useState } from 'react';
import { SearchBar } from '../components/SearchBar';
import { Item } from '../components/Item';
import '../styles/main.scss';
import { MainComponent } from '../components/Main';
import { userType } from 'types/userType';

type x = {
  results: userType[];
};
function getData(): Promise<x> {
  return new Promise((res) => res(pr));
}
export function Main() {
  const [products, setProducts] = useState<userType[]>([]);
  useEffect(() => {
    async function load() {
      const t = await getData();

      setProducts(t.results);
    }
    load();
  }, []);
  return (
    <div className="main__wrapper">
      <SearchBar />
      <div className="main">
        <MainComponent users={products} />
        {/* {products.map((product) => {
          return <Item item={product} key={product.id} />;
        })} */}
      </div>
    </div>
  );
}
