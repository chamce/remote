import bootstrapCss from "bootstrap/dist/css/bootstrap.min.css?raw";
import { HelmetProvider, Helmet } from "react-helmet-async";
import "bootstrap/dist/js/bootstrap.bundle.min";

import appCss from "../styles/App.css?raw";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import Header from "./Header";
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
        <Header></Header>
        <Body></Body>
        <Footer></Footer>
        <Sidebar>{children}</Sidebar>
      </App>
    </HelmetProvider>
  );
};

export default Wrapper;

// ! always keep it simple

/* wrapper todo list
 * floating button position & offcanvas body overflow seem to not be working correctly in host simple browser
 * need floating button opacity to lower on small screen
 * facebook, twitter, and instagram into footer from top of eku.edu
 * add sidebar menu back
 * add icon back to fullscreen option
 * configure fullscreen (don't want to use bs modal anymore)
 * finish footer (do we want to try a different bs example?)
 * finish body (what should the padding be at each breakpoint? is there a bs example we can draw inspiration from?)
 * fix jumpy collapse close (need gap to be removed between collapse button and the list)
 * add color picker back and re-configure (should we still go with updating css variable because it prevents re-renders?)
 * do we care about page shifting when scrollbar gets added to page?
 * do we care about "module has been externalized" error when building the host?
 */

/* other
 TODO tuition discounts
 TODO - fix broken functionalities
 TODO - option for default visible columns & default group by
 TODO - right align numbers & number headers
 TODO - Use build.rollupOptions.output.manualChunks to improve chunking: https://rollupjs.org/configuration-options/#output-manualchunks
 */
