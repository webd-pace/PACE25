import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Pace home page', () => {
  render(<App />);
  expect(
    screen.getByRole('heading', { name: /welcome to pace/i })
  ).toBeInTheDocument();
});
