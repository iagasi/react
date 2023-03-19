import { render, screen } from "@testing-library/react";
import { Main } from "../pages/Main";
import React from "react";
import { vi } from "vitest";
import { mockItem } from "./mockData";

vi.mock("../data.json", () => {
    return { products: [{}] }

})



//data.mockReturvalue()

describe('Main', () => {
    it('Renders List Items', () => {
        render(<Main />)
        // expect(screen.getByText("MockTitle"))
    })
})
