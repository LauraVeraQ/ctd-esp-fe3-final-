import { render, screen } from '@testing-library/react';
import Card from '../Components/Card';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';

describe("El componente Card", () => {
    test('renders name, username, and id', () => {
        render(<BrowserRouter><Card name="Leanne Graham" username="Bret" id="1" /></BrowserRouter>);
        const nameElement = screen.getByText('Leanne Graham');
        const usernameElement = screen.getByText('Bret');
        const idElement = screen.getByText('1');
        expect(nameElement).toBeInTheDocument();
        expect(usernameElement).toBeInTheDocument();
        expect(idElement).toBeInTheDocument();
      });
});