import React from "react";
import { render } from "@testing-library/react";
import SemanticElements from "./SemanticElements";

it("has a SemanticElements component", () => {
  const { getByText } = render(<SemanticElements />);
  expect(getByText("SemanticElements")).toBeInTheDocument();
});
