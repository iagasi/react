import { Header } from '../components/Header';
import React from 'react';
import '../styles/about.scss';
export class About extends React.Component {
  render(): React.ReactNode {
    return (
      <>
        <Header />
        <div className="about" data-testid="test-about">
          <h1> About</h1>

          <h5>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi nemo quaerat qui
            natus quo consectetur, velit quam modi similique? Sequi Sequi ipsa beatae itaque
            veritatis assumenda repudiandae consequuntur vitae ducimus labore.
          </h5>
        </div>
        ;
      </>
    );
  }
}
