import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from '/src/Components/Card.jsx';

describe("El componente Card", () => {
  test("se renderiza correctamente", () => {
    render(<Card />);
    const card = screen.getByText(
    "Leanne Graham"
    );
      
      expect(card).toBeInTheDocument();
  });
  });
