import chroma from "chroma-js";

const createColorByName = (name) => {
  if (!name) return null;

  if (!chroma.valid(name))
    return (
      <p>
        Couldn't find that color...
        <br />
        Please use a named color from the{" "}
        <a
          href="https://www.w3.org/wiki/CSS/Properties/color/keywords"
          title="W3CX11 specification"
        >
          W3CX11 specification
        </a>{" "}
        or a{" "}
        <a href="https://gka.github.io/chroma.js/#chroma" title="Chroma">
          hexadecimal code.
        </a>
      </p>
    );

  return chroma(name);
};

const useColorByName = (name) => {
  return createColorByName(name);
};

export { useColorByName, createColorByName };
