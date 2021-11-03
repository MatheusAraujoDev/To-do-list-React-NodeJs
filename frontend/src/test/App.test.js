import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

describe('Testes da aplicação TO DO LIST', () => {
  it('Verifica se aparece na tela o título "To Do List"', () => {
    render(<App />);
    const h1 = screen.getByRole('heading', { level: 1 });
    expect(h1).toBeInTheDocument();
    expect(h1).toHaveTextContent(/To Do List/i);
  });
});