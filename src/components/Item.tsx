import { IItem } from 'intefaces';
import React from 'react';
import '../styles/item.scss';
export class Item extends React.Component<{ item: IItem }> {
  render() {
    const item = this.props.item;
    return (
      <div className="item">
        <img className="item__img" src={item.thumbnail} />
        <h2 className="item__price"> $ {item.price}</h2>
        <div className="item__description">
          <p className="item__brand">{item.brand}</p>
          <p className="item__description">{item.description}</p>
          <p className="item__added">{item.title}</p>
        </div>
      </div>
    );
  }
}
