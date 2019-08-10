import React from 'react';
import {render, fireEvent} from '@testing-library/react';

import App from '../App/App';

describe('Login Page', () => {
  it('Goes back to home page when logging in successfully', () => {
    let {getByText, getByLabelText} = render(<App />);
    
    //Navigate to login page
    fireEvent.click(getByText('Log In'));

    //Fill in username and password fields and click 'Log In'
    fireEvent.change(getByLabelText(/username/i) , { target: { value: 'test' } });
    fireEvent.change(getByLabelText(/password/i) , { target: { value: 'test' } });
    fireEvent.click(getByText('Log In'));

    //Back on the home page
    expect(getByText('Salsaron')).toBeInTheDocument()
  });
});