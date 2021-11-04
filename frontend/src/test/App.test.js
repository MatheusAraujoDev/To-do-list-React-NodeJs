import React from 'react';
import { render, screen, cleanup, waitFor } from '@testing-library/react';
// import axios from 'axios';
import App from '../App';

afterEach(cleanup);
// Dúvida: https://testing-library.com/docs/react-testing-library/api/#cleanup

describe('Testes da aplicação TO DO LIST', () => {
  it('Verifica se os headers da tabela existem', async () => {
    const url = 'http://localhost:3001/create';
    render(<App url={ url } />);
    waitFor(() => {
      expect(screen.getByTestId('table-row')).toBeInTheDocument();
    });
  });

  it('Verifica se existem 4 botões na página', () => {
    render(<App />);
    const length = 4;
    expect(screen.getAllByRole('button')).toHaveLength(length);
  });
});
