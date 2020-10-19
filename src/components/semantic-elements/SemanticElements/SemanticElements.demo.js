import React from "react";

/**
 * Imports other components and hooks
 */
import SemanticElements, {
  Article,
  Aside,
  Footer,
  Header,
  Heading,
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  Nav,
  Section,
} from ".";

/**
 * Displays the demo.
 */
const SemanticElementsDemo = (props) => {
  return (
    <Section title="Demo" className="SemanticElementsDemo">
      <Header title="Semantic Elements Demo (header)" display={true}>
        <Nav title="Menu navigation">Menu navigation (nav)</Nav>
      </Header>
      <SemanticElements as="article">Article (article)</SemanticElements>
      <Article title="Another article (article)">
        <H1>Heading level 1</H1>
        <Heading level={1}>Heading level 1</Heading>
        <H2>Heading level 2</H2>
        <H3>Heading level 3</H3>
        <H4>Heading level 4</H4>
        <H5>Heading level 5</H5>
        <H6>Heading level 6</H6>
        <p>Article body.</p>
        <Aside title="Aside">An aside inside the article. (aside)</Aside>
      </Article>
      <Footer title="Footer">Footer (footer)</Footer>
    </Section>
  );
};

export default SemanticElementsDemo;
