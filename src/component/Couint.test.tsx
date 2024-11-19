import { screen, render, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import "@testing-library/jest-dom";
import Count from "./Count";

describe("Test de mon composant Count", () => {
    it("Should render the initial count", () => {
        render(<Count />);

        const button = screen.getByRole("button", { name: /count is 0/i });
        expect(button).toBeInTheDocument();
    });

    it("Should increment the count when the button is clicked", () => {
        render(<Count />);

        const button = screen.getByRole("button", { name: /count is 0/i });

        fireEvent.click(button);

        expect(
            screen.getByRole("button", { name: /count is 1/i })
        ).toBeInTheDocument();
    });

    it("Should increment the count multiple times", () => {
        render(<Count />);

        const button = screen.getByRole("button", { name: /count is 0/i });

        fireEvent.click(button);
        fireEvent.click(button);

        expect(
            screen.getByRole("button", { name: /count is 2/i })
        ).toBeInTheDocument();
    });
});
