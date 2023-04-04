import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Page404 } from './pages/Page404';
import { Main } from './pages/Main';
import { Header } from './components/Header';
import { About } from './pages/About';
import { FormPage } from './pages/Form';

export function App() {
  return (
    <>
      <Header />
      <Main />
    </>
  );
}

export function RoutedApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="about" element={<About />} />
        <Route path="form" element={<FormPage />} />

        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
}
