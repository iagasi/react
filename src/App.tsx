

import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Page404 } from "./pages/Page404"
import { Main } from './pages/Main'
import { Header } from './components/Header'
import { About } from './pages/About'

export class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Main />
      </>

    )
  }
}

export class RoutedApp extends React.Component {
  render() {

    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    )
  }

}

