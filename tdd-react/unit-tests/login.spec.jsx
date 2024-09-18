import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';
import '@testing-library/jest-dom'
import App from '../src/App';
import { DashboardData } from '../src/shared/mock-data';

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

test("Login button enabled [Requirements: We add Email & Password, Then Login Btn is enabled] ", async () => {
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

test("validate credentials success [Requirements: We add Valid Email & password]", () => {
  triggerContinueLoginBtnClick();
  const emailCtrl = screen.getByTestId("email-id");
  const passwordCtrl = screen.getByTestId("password-id");

  const mockObj = { email: "test-email@email.com", password: "test-password-value" }
  fireEvent.change(emailCtrl, {target: {value: mockObj.email}});
  fireEvent.change(passwordCtrl, {target: {value: mockObj.password}});

  const loginBtn = screen.getByText("Login");

  fireEvent.click(loginBtn);

  const status = screen.getByTestId("login-status-id");
  expect(status.getAttribute("value")).toBe("true");
});

test("Login failed due to invalid credentials [Failed Test due to Invalid Email & Password]", () => {
  triggerContinueLoginBtnClick();
  const emailCtrl = screen.getByTestId("email-id");
  const passwordCtrl = screen.getByTestId("password-id");

  const mockObj = { email: "test-email123@email.com", password: "test-password-value" }
  fireEvent.change(emailCtrl, {target: {value: mockObj.email}});
  fireEvent.change(passwordCtrl, {target: {value: mockObj.password}});

  const loginBtn = screen.getByText("Login");

  fireEvent.click(loginBtn);

  const status = screen.getByTestId("login-status-id");
  expect(status.getAttribute("value")).toBe("false");
})

test("Dashboard should not be loaded when invalid credentials are provided [No Dashboard UI due to invalid Email & Password]", () => {
  triggerContinueLoginBtnClick();
  const emailCtrl = screen.getByTestId("email-id");
  const passwordCtrl = screen.getByTestId("password-id");

  const mockObj = { email: "test-email123@email.com", password: "test-password-value" }
  fireEvent.change(emailCtrl, {target: {value: mockObj.email}});
  fireEvent.change(passwordCtrl, {target: {value: mockObj.password}});

  const loginBtn = screen.getByText("Login");

  fireEvent.click(loginBtn);
  
  const dashboardComponent = screen.queryByTestId("dashboard-id");

  expect(dashboardComponent).toBe(null);

})

test("Dashboard loaded when valid credentials are provided [Requirements: Valid Email & Password. Success UI Flow to Dashboard]", () => {
  triggerContinueLoginBtnClick();
  const emailCtrl = screen.getByTestId("email-id");
  const passwordCtrl = screen.getByTestId("password-id");

  const mockObj = { email: "test-email@email.com", password: "test-password-value" }
  fireEvent.change(emailCtrl, {target: {value: mockObj.email}});
  fireEvent.change(passwordCtrl, {target: {value: mockObj.password}});

  const loginBtn = screen.getByText("Login");

  fireEvent.click(loginBtn);
  
  const dashboardComponent = screen.queryByTestId("dashboard-id");

  expect(dashboardComponent).not.toBe(null);

  const mockDashboardData = DashboardData;

  const tdItems = screen.getAllByRole('row');
  expect(tdItems.length).toBe(mockDashboardData.length + 1);

})



// Utilites
const triggerContinueLoginBtnClick = () => {
  renderApp();

  const continueloginButton = screen.getByText("Continue with Login");
  fireEvent.click(continueloginButton);
}

const renderApp = () => {
  render(<App/>);
}