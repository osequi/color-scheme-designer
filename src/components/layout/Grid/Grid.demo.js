import React from "react";
import shortid from "shortid";

/**
 * Imports other components and hooks.
 */
import Grid from ".";
import Cell from "../Cell";

/**
 * Displays the Grid demo.
 */
const GridDemo = (props) => {
  const items = Array(10)
    .fill("")
    .map((item, index) => {
      return <Cell key={shortid.generate()}>Item {index + 1}</Cell>;
    });

  return (
    <Grid columns={3} gap={3} fauxLines="both">
      {items}
    </Grid>
  );
};

export default GridDemo;
