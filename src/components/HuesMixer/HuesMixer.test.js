import React from "react";
import { render } from "@testing-library/react";
import HuesMixer from "./HuesMixer";

it("has a HuesMixer component", () => {
  const { getByText } = render(<HuesMixer />);
  expect(getByText("HuesMixer")).toBeInTheDocument();
});
