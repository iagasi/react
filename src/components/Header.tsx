import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/header.scss';

// interface IHeaderState {
//   route: string;
// }
export class Header extends React.Component {
  state = {
    route: '',
  };

  componentDidMount(): void {
    const route = window.location.href.split('/')[3];

    this.setState(() => ({
      route: route,
    }));
  }

  render(): React.ReactNode {
    return (
      <header className="header">
        <Link className="link-reset" to={'/'}>
          {' '}
          <h2 className={this.state.route == '' ? 'link-active' : ''}>Main </h2>
        </Link>
        <Link className="link-reset" to={'/about'}>
          {' '}
          <h2 className={this.state.route == 'about' ? 'link-active' : ''}>About</h2>
        </Link>
      </header>
    );
  }
}
