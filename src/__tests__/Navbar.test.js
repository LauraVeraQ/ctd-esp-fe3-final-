
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import { GlobalContextProvider } from '../Components/utils/context';
import '@testing-library/jest-dom'

describe("El componente NavBar", () => {
    test('renders navbar links and theme button', () => {
        render(
          <GlobalContextProvider>
            <BrowserRouter>
              <Navbar />
            </BrowserRouter>
          </GlobalContextProvider>
        );
        const homeLink = screen.getByText('Home');
        const favoritesLink = screen.getByText('Favorites');
        const contactLink = screen.getByText('Contact us');
        const themeButton = screen.getByRole('button', { name: 'Change Theme' });
        expect(homeLink).toBeInTheDocument();
        expect(favoritesLink).toBeInTheDocument();
        expect(contactLink).toBeInTheDocument();
        expect(themeButton).toBeInTheDocument();
      });
});
