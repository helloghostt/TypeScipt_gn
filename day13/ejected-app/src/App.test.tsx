import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  const { baseElement } = render(<App />);
  expect(baseElement).toBeInTheDocument();
});


test("renders learn react link", () => {
  render(<App/>)
  const linkElement = screen.getByText(/Show Message/i);
  expect(linkElement).toBeInTheDocument();
});
test("renders learn react link", () => {
  render(<App/>)
  const linkElement = screen.getByText(/enter your name/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders learn react link", () => {
  render(<App/>)
  const linkElement = screen.getByRole("heading",{ level : 2 });
  expect(linkElement).toBeInTheDocument();
});

test("renders learn react link", () => {
  render(<App/>)
  const linkElement = screen.getByLabelText(/heading test/i);
  expect(linkElement).toBeInTheDocument();
});

test("placeholder 찾기", () => {
  render(<App/>)
  const linkElement = screen.getByPlaceholderText(/username/i);
  expect(linkElement).toBeInTheDocument();
});

test ("getByDisplayName", () => {
  render(<App/>)
  const lastNameInput = screen.getByDisplayValue("Norris");
  expect(lastNameInput).toBeInTheDocument();
  // const linkElement = screen.getAllByPlaceholderText(/username/i);
  // expect(linkElement).toBeInTheDocument();
});