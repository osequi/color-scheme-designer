import React from "react";
import { render } from "@testing-library/react";
import Footer from "./Footer";

it("has a Footer component", () => {
  const { getByText } = render(<Footer />);
  expect(getByText("Footer")).toBeInTheDocument();
});
