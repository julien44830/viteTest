import { screen, render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import "@testing-library/jest-dom";
import Count from "./Count";

describe("Test de mon composant Count", () => {
    it("Should render a title", async () => {
        await render(<Count />);

        const btn = screen.getByRole("button");
        expect(btn).toHaveTextContent("count is");
    });
});
