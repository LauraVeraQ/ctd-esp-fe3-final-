import Layout from "../Components/Layout";
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';

describe("El componenteLayout", () => {
    test("se renderiza correctamente", () => {
        render(<Layout />);
      });
});