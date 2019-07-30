import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import ReactDOM from 'react-dom';
import App from '../App/App';
import {wait} from '@testing-library/dom';
const axios = require('axios');
const MockAdapter = require('axios-mock-adapter');
const mock = new MockAdapter(axios);

describe('Home Page', () => {

  it('Has a Log In button', () => {
    let {getByText} = render(<App />);
    expect(getByText('Log In')).toBeInTheDocument();
  });
  it('Has a Log Out button', () => {
    let {getByText} = render(<App />);
    expect(getByText('Log In')).toBeInTheDocument();
  });
  
});