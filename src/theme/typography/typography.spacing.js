/**
 * Every adjacent sibling has a top margin.
 */
const adjacentSiblingsMarginTop = {
  ["& * + *"]: {
    marginTop: `var(--lem)`,
  },
  /**
   * The exceptions
   */
  ["& * + li"]: {
    marginTop: 0,
  },
  ["& tr + tr"]: {
    marginTop: 0,
  },
};

/**
 * Returns a specifing typographic spacing.
 * @param  {string} preset The spacing preset name.
 * @return {object}        The typographic spacing object style.
 */
const spacing = (preset) => {
  switch (preset) {
    case "Adjacent siblings margin top":
    default:
      return adjacentSiblingsMarginTop;
  }
};

export { spacing };
