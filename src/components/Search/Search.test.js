import React from "react";
import { render } from "@testing-library/react";
import Search from "./Search";

it("has a Search component", () => {
  const { getByText } = render(<Search />);
  expect(getByText("Search")).toBeInTheDocument();
});
