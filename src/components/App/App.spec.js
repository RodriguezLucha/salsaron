import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import ReactDOM from 'react-dom';
import App from './App';
import {wait} from '@testing-library/dom';
var axios = require('axios');
var MockAdapter = require('axios-mock-adapter');
var mock = new MockAdapter(axios);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('Has Salsaron title', () => {
  const {getByText} = render(<App />);
  expect(getByText('Salsaron')).toBeInTheDocument();
});

it('Can perform a login', async() => {
  mock.onPost('/api/users/login').reply(200, {"success": true});

  const {getByText, getByLabelText, debug} = render(<App />);
  fireEvent.change(getByLabelText(/Email/i), { target: { value: 'test@test.com' } })
  fireEvent.change(getByLabelText(/Password/i), { target: { value: 'password' } })
  getByText('Login').click();
  await wait( () => getByText('Logout'));
});