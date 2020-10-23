import React from "react";
import { render } from "@testing-library/react";
import Text from "./Text";

it("has a Text component", () => {
  const { getByText } = render(<Text />);
  expect(getByText("Text")).toBeInTheDocument();
});
