const { render, screen } = require("@testing-library/react")
import React from 'react';
import { Page404 } from '../pages/Page404';

describe("Page404", () => {
  it("renders 404 page", () => {
    render(<Page404 />)

    expect(screen.getByRole("heading")).toHaveTextContent("404")
  })
})