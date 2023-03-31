import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/header.scss';

export function Header() {
  const [route, setRoute] = useState('');
  useEffect(() => {
    const path = window.location.href.split('/')[3];
    setRoute(path);
  }, []);

  return (
    <header className="header" data-testid="test-header">
      <Link className="link-reset" to={'/'}>
        <h2 className={route == '' ? 'link-active' : ''}>Main </h2>
      </Link>
      <Link className="link-reset" to={'/about'}>
        <h2 className={route == 'about' ? 'link-active' : ''}>About</h2>
      </Link>
      <Link className="link-reset" to={'/form'}>
        <h2 className={route == 'form' ? 'link-active' : ''}>Form</h2>
      </Link>
    </header>
  );
}
