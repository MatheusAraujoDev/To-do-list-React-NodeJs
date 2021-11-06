import React from 'react';
import { act, wait, cleanup, render, screen, fireEvent } from '@testing-library/react';
import axios from 'axios';
import App from '../App';
import { axiosGet, axiosPost, axiosPut, axiosDelete } from './TestsMock';

const mockAxiosGet = () => {
  jest.spyOn(axios, 'get').mockResolvedValue({
    status: 200, statusText: 'OK', data: axiosGet,
  });
};

const mockAxiosByParams = (params) => {
  jest.spyOn(axios, 'get').mockResolvedValue({
    status: 200, statusText: 'OK', data: params,
  });
};

const mockAxiosPut = () => {
  const { task, check } = axiosPut;
  jest.spyOn(axios, 'put').mockResolvedValue({
    status: 200, statusText: 'OK', data: { task, check },
  });
};

const mockAxiosPost = () => {
  const { task, check } = axiosPut;
  jest.spyOn(axios, 'post').mockResolvedValue({
    status: 200, statusText: 'Created', data: { task, check },
  });
};

const mockAxiosDelete = () => {
  jest.spyOn(axios, 'delete').mockResolvedValue({
    status: 204, statusText: 'No Content', data: '',
  });
};

// Dúvida cleanup: https://testing-library.com/docs/react-testing-library/api/#cleanup

describe('Testes da aplicação TO DO LIST', () => {
  beforeAll(mockAxiosDelete);
  beforeEach(cleanup);

  it('Se ao iniciar o projeto realiza requisição do tipo GET para a API', async () => {
    mockAxiosByParams(axiosGet);
    await act(async () => { render(<App />); });

    expect(axios.get).toHaveBeenCalled();
  });

  it('Renderiza o título na tela', async () => {
    mockAxiosByParams(axiosGet);
    await act(async () => { render(<App />); });

    const title = screen.getByText(/To Do List/i);
    expect(title).toBeInTheDocument();
  });

  it('Renderiza os headers da tabela com o "status", "tarefa" e "opções"', async () => {
    mockAxiosByParams(axiosGet);
    await act(async () => { render(<App />); });

    const tableHeaders = screen.getByTestId('table-row');
    expect(tableHeaders).toBeInTheDocument();
  });
});
