import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from '../Components/Footer.jsx';
import '@testing-library/jest-dom'

describe("El componente Footer", () => {
  test("se renderiza correctamente", () => {
    render(<Footer />);
    const footer = screen.getByText(
    "Powered by"
    );
      
      expect(footer).toBeInTheDocument();
  });
  });
