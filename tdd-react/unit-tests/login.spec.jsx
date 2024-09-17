import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import App from '../src/App';

test("App component is loaded", () => {
  render(<App/>);
  const spanElement = screen.getByTestId("app-span-id");

  expect(spanElement).toBeDefined();
  expect(spanElement).toHaveTextContent("Test Span Here");
});

test("App component loaded and Login component is not loaded", () => {
  render(<App/>);
  const spanElement = screen.getByTestId("app-span-id");
  const loginSpanElement = screen.queryByTestId("login-span-id");

  expect(spanElement).toHaveTextContent("Test Span Here");
  expect(loginSpanElement).toBe(null);
});

test("Login Component is loaded", () => {
  render(<App />);

  const loginButton = screen.getByText("Continue with Login");
  fireEvent.click(loginButton);

  const loginSpanElement = screen.queryByTestId("login-span-id");

  expect(loginSpanElement).toHaveTextContent("Login span id here");
});