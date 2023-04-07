import React from 'react';
import { userType } from 'types/userType';
import '../styles/openedCard.scss';
type propsType = {
  item: userType;
};
export const OpenedCard = (props: propsType) => {
  const item = props.item;
  console.log(item);

  return (
    <div className="opened-card">
      <button className="opened-card__closeBtn">X</button>
      <div className="openedCard__short-info">
        <img className="opened-card__img" src={item.image} />
        <h2 className="opened-card__main-info"> {item.name}</h2>
        <h2 className="opened-card__main-info">Planet: {item.origin.name}</h2>
      </div>
      <div className="opened-card__long-info">
        <h2 className="opened-card__main-info">About Me</h2>

        <div>
          <p className=" opened-card__about-me flexgap20px">
            <span className=" font20colorblue">Gender</span>
            {item.gender}
          </p>
          <p className="  opened-card__about-me flexgap20px">
            <span className="font20colorblue">Species</span>
            {item.species}
          </p>
          <p className="  opened-card__about-me flexgap20px">
            <span className="font20colorblue">Status</span>
            {item.status}
          </p>
          <p className="  opened-card__about-me flexgap20px">
            <span className="font20colorblue">Location</span>
            {item.location.name}
            <span className="opened-card__load-more">More</span>
          </p>
        </div>
        <div></div>
      </div>
      <img className="opened-card__messageImg" src="/message.png" alt="" />
    </div>
  );
};

export default OpenedCard;
