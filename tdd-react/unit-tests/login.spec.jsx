import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import App from '../src/App';

test("App component is loaded", () => {
  renderApp();
  const spanElement = screen.getByTestId("app-span-id");

  expect(spanElement).toBeDefined();
  expect(spanElement).toHaveTextContent("Test Span Here");
});

test("App component loaded and Login component is not loaded", () => {
  renderApp();
  const spanElement = screen.getByTestId("app-span-id");
  const loginSpanElement = screen.queryByTestId("login-span-id");

  expect(spanElement).toHaveTextContent("Test Span Here");
  expect(loginSpanElement).toBe(null);
});

test("Login Component is loaded", () => {
  triggerContinueLoginBtnClick();

  const loginSpanElement = screen.queryByTestId("login-span-id");

  expect(loginSpanElement).toHaveTextContent("Login span id here");
});

test("Login button disabled", () => {
  triggerContinueLoginBtnClick();

  const loginBtn = screen.getByText("Login");

  expect(loginBtn.disabled).toBe(true)
});

test("Login button enabled", async () => {
  triggerContinueLoginBtnClick();

  const emailCtrl = screen.getByTestId("email-id");
  const passwordCtrl = screen.getByTestId("password-id");

  expect(emailCtrl.value).toBe("");
  expect(passwordCtrl.value).toBe("");

  const mockObj = { email: "test-email@email.com", password: "test-password-value" }
  fireEvent.change(emailCtrl, {target: {value: mockObj.email}});
  fireEvent.change(passwordCtrl, {target: {value: mockObj.password}});

  expect(emailCtrl.value).toBe(mockObj.email);
  expect(passwordCtrl.value).toBe(mockObj.password);

  const loginBtn = screen.getByText("Login");

  expect(loginBtn.disabled).toBe(false);
});

const triggerContinueLoginBtnClick = () => {
  renderApp();

  const continueloginButton = screen.getByText("Continue with Login");
  fireEvent.click(continueloginButton);

  
}

const renderApp = () => {
  render(<App/>);
}