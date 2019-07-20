import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import ReactDOM from 'react-dom';
import App from './App';
import {wait} from '@testing-library/dom';
const axios = require('axios');
const MockAdapter = require('axios-mock-adapter');
const mock = new MockAdapter(axios);

describe('App home page', () => {

  let getByText = null;

  beforeEach(() => {
    let rendered = render(<App />);
    getByText = rendered.getByText;
  });

  it('Has Salsaron title', () => {
    expect(getByText('Salsaron')).toBeInTheDocument();
  });
});