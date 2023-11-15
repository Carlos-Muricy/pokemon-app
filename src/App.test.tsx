import React from 'react';
import { render, screen } from '@testing-library/react';
import PokeApp from './PokeApp';

test('renders learn react link', () => {
  render(<PokeApp />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
