import Structure from "../components";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Structure>
        <Component {...pageProps} />
      </Structure>
    </>
  );
}

export default MyApp;
