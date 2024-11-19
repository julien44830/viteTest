import { screen, render, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import "@testing-library/jest-dom";
import Count from "./Count";

describe("Test de mon composant Count", () => {
    it("Should render the initial count", () => {
        // Rendu du composant
        render(<Count />);

        // Vérification du texte initial
        const button = screen.getByRole("button", { name: /count is 0/i });
        expect(button).toBeInTheDocument();
    });

    it("Should increment the count when the button is clicked", () => {
        // Rendu du composant
        render(<Count />);

        // Cible le bouton
        const button = screen.getByRole("button", { name: /count is 0/i });

        // Simule un clic
        fireEvent.click(button);

        // Vérifie que le texte est mis à jour
        expect(
            screen.getByRole("button", { name: /count is 1/i })
        ).toBeInTheDocument();
    });

    it("Should increment the count multiple times", () => {
        // Rendu du composant
        render(<Count />);

        // Cible le bouton
        const button = screen.getByRole("button", { name: /count is 0/i });

        // Simule plusieurs clics
        fireEvent.click(button);
        fireEvent.click(button);

        // Vérifie que le texte est mis à jour
        expect(
            screen.getByRole("button", { name: /count is 2/i })
        ).toBeInTheDocument();
    });
});
