import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'
import Form from '../Components/Form';

describe("El componente Form", () => {
    test('submit form with valid data', async () => {
    render(<Form />);
    const nameInput = screen.getByLabelText('Nombre completo:');
    const emailInput = screen.getByLabelText('Email:');
    const submitButton = screen.getByText('Enviar');

    fireEvent.change(nameInput, { target: { value: 'Juan Perez' } });
    fireEvent.change(emailInput, { target: { value: 'juanperez@example.com' } });
    fireEvent.click(submitButton);

    const messageElement = await screen.findByText('Gracias Juan Perez, te contactaremos cuando antes vía mail.');
    expect(messageElement).toBeInTheDocument();
    });

    test('submit form with invalid data', async () => {
    render(<Form />);
    const nameInput = screen.getByLabelText('Nombre completo:');
    const emailInput = screen.getByLabelText('Email:');
    const submitButton = screen.getByText('Enviar');

    fireEvent.change(nameInput, { target: { value: 'lv' } });
    fireEvent.change(emailInput, { target: { value: 'invalidemail.com' } });
    fireEvent.click(submitButton);

    const alertElement = await screen.findByText('Por favor verifique su información nuevamente.');
    expect(alertElement).toBeInTheDocument();
    });
});