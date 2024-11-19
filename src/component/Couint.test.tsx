import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect } from "vitest";
import "@testing-library/jest-dom";
import { useState } from "react";
import Count from "./Count";

// Mock parent component pour gérer l'état
function CountWrapper() {
    const [count, setCount] = useState(0);
    return (
        <Count
            count={count}
            setCount={setCount}
        />
    );
}

describe("Test de mon composant Count", () => {
    it("Should render the initial count", () => {
        render(<CountWrapper />);

        const button = screen.getByRole("button", { name: /count is 0/i });
        expect(button).toBeInTheDocument();
    });

    it("Should increment the count when the button is clicked", async () => {
        render(<CountWrapper />);

        const button = screen.getByRole("button", { name: /count is 0/i });

        await userEvent.click(button);
        expect(
            screen.getByRole("button", { name: /count is 1/i })
        ).toBeInTheDocument();
    });

    it("Should increment the count multiple times", async () => {
        render(<CountWrapper />);

        const button = screen.getByRole("button", { name: /count is 0/i });

        await userEvent.click(button);
        await userEvent.click(button);
        expect(
            screen.getByRole("button", { name: /count is 2/i })
        ).toBeInTheDocument();
    });
});
