import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Do not alter the given mock tempering with it won't give the required test results/i);
  expect(linkElement).toBeInTheDocument();
});
