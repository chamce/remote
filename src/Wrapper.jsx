import bootstrapCss from "bootstrap/dist/css/bootstrap.min.css?raw";
import { HelmetProvider, Helmet } from "react-helmet-async";
import "bootstrap/dist/js/bootstrap.bundle.min";

import FloatingButton from "./FloatingButton";
import appCss from "./App.css?raw";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Footer from "./Footer";
import Body from "./Body";
import App from "./App";

const css = bootstrapCss + appCss;

const Wrapper = ({ children }) => {
  return (
    <HelmetProvider>
      <App>
        <Helmet>
          <link
            href="https://chamce.github.io/favicons/apple-touch-icon.png"
            rel="apple-touch-icon"
            sizes="180x180"
          ></link>
          <link
            href="https://chamce.github.io/favicons/favicon-32x32.png"
            type="image/png"
            sizes="32x32"
            rel="icon"
          ></link>
          <link
            href="https://chamce.github.io/favicons/favicon-16x16.png"
            type="image/png"
            sizes="16x16"
            rel="icon"
          ></link>
          <link href="https://chamce.github.io/favicons/manifest.json" rel="manifest"></link>
          <link href="https://chamce.github.io/favicons/safari-pinned-tab.svg" color="#5bbad5" rel="mask-icon"></link>
          <meta name="msapplication-TileColor" content="#da532c"></meta>
          <meta name="theme-color" content="#ffffff"></meta>
        </Helmet>
        <style global jsx>
          {css}
        </style>
        <FloatingButton></FloatingButton>
        <Sidebar>{children}</Sidebar>
        <Header></Header>
        <Body></Body>
        <Footer></Footer>
      </App>
    </HelmetProvider>
  );
};

export default Wrapper;

// ! always keep it simple

/*
TODO finish writing wrapper
TODO remember page will shift when y scrollbar appears & disappears
TODO module has been externalized error
TODO redo enrollment frequency page quickly (keep it simple)
*/
