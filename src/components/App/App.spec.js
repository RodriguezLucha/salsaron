import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import ReactDOM from 'react-dom';
import App from './App';
import {wait} from '@testing-library/dom';
const axios = require('axios');
const MockAdapter = require('axios-mock-adapter');
const mock = new MockAdapter(axios);

describe('App Home Page', () => {
  it('Renders without crashing', () => {
    render(<App />);
  });

  it('Has Salsaron title', () => {
    let {getByText} = render(<App />);
    expect(getByText('Salsaron')).toBeInTheDocument();
  });
  
});