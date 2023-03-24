import React, { Component } from 'react';
import { IFormCard } from './types';
import '../../styles/card.scss';
export class FormCard extends Component<{ data: IFormCard }> {
  render() {
    return (
      <div className="card">
        <img className="card__img" src={this.props.data.img} alt="" />
        <div className="card__personal-data">
          <div className="personal-data__left">
            <div className="card__name sec-span-bigger">
              name:<span>{this.props.data.name}</span>
            </div>
            <div className="card__surname sec-span-bigger">
              surname: <span>{this.props.data.surname}</span>
            </div>
          </div>
          <div className="persinal-data__right">
            <div className="sec-span-bigger">
              Gender:<span>{this.props.data.gender}</span>
            </div>
            <div className="sec-span-bigger">
              Birdth: <span>{this.props.data.dateOfBorn}</span>
            </div>
          </div>
        </div>
        <h4>Personal data will be</h4>
        <ul className="card__permissions">
          {this.props.data.permissions.map((e, i) => {
            return (
              <li className="card__permissions-item" key={i}>
                {e}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
