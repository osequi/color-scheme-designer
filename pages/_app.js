/**
 * Global CSS imports.
 */
import "normalize.css";
import "../src/theme/typography/typography.reset.css";
import "../src/theme/typography/fonts/fonts.css";

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
