/* import '../styles/globals.css' */
import "./style.css";

/* function MyApp({ Component, pageProps }) { */
export default function MyApp({
  Component: Component,
  pageProps: pageProps
}) {
  return <Component {...pageProps} />
}

/* export default MyApp */
