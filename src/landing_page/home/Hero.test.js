import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Hero from "./Hero";

// Test Suite
describe("Hero Component", () => {
  test("render hero image", () => {
    render(<Hero />);
    const heroImage = screen.getByAltText("Hero Image");
    expect(heroImage).toBeInTheDocument();
    expect(heroImage).toHaveAttribute("src", "media/images/homeHero.png");
  });

  test("render signup button", () => {
    render(<Hero />);

    const signupButton = screen.getByText("Signup Now");

    expect(signupButton).toBeInTheDocument();
  });
});
