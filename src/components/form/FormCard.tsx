import React, { Component } from 'react';
import { IFormCard } from './types';
import '../../styles/card.scss';
type propsType = {
  data: IFormCard;
};
export function FormCard(props: propsType) {
  return (
    <div className="card">
      <img className="card__img" src={props.data.img} alt="" />
      <div className="card__personal-data">
        <div className="personal-data__left">
          <div className="card__name sec-span-bigger">
            name:<span>{props.data.name}</span>
          </div>
          <div className="card__surname sec-span-bigger">
            surname: <span>{props.data.surname}</span>
          </div>
        </div>
        <div className="persinal-data__right">
          <div className="sec-span-bigger">
            Countries:<span>{props.data.countries}</span>
          </div>
          <div className="sec-span-bigger">
            Birdth: <span>{props.data.dateOfBorn}</span>
          </div>
        </div>
      </div>
      <h4>Gender:{props.data.gender}</h4>
      <h4>Personal data will be</h4>
      <ul className="card__permissions">
        {props.data.permissions.map((e, i) => {
          if (e) {
            return (
              <li className="card__permissions-item" key={i}>
                {e}
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
}
