import React from 'react';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import App from '../src/App';

test('App component is loaded', () => {
  render(<App/>)
  expect(screen.getByTestId("span-id")).toBeDefined();
  expect(screen.getByTestId("span-id")).toHaveTextContent("Test Span Here");
})