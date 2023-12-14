import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('should render 3 columns', () => {
  render(<App />);
  expect(screen.getByText('Todo')).toBeInTheDocument();
  expect(screen.getByText('InProgress')).toBeInTheDocument();
  expect(screen.getByText('Done')).toBeInTheDocument();
});
