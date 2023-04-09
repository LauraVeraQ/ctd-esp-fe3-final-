import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'
import Form from '../Components/Form';

describe('Form component', () => {
        test('submit button is disabled if nombre and email are not provided', () => {
            const { getByTestId, getByText } = render(<Form />);
            const submitButton = getByText('Enviar');
        
            const nameInput = getByTestId('nombre-input');
            const emailInput = getByTestId('email-input');
        
            fireEvent.change(nameInput, { target: { value: 'John Doe' } });
            fireEvent.change(emailInput, { target: { value: 'johndoe@example.com' } });
            fireEvent.click(submitButton);
        
        expect(submitButton.disabled).toBe(false);
    });
});