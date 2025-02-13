import { HelmetProvider as Html, Helmet as Head } from "react-helmet-async";
// included so legacy apps operate normally (dropdowns & other bs components were using bs js)
import "bootstrap/dist/js/bootstrap.bundle.min";

import { Dashboard } from "./components/Dashboard";
import { Dropdown } from "./components/Dropdown";
import { Sidebar } from "./components/Sidebar";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Body } from "./styles/Body";

// header functionality needs to work

const Remote = (props) => {
  return (
    <Html>
      <Head>
        <link
          href="https://irserver2.eku.edu/libraries/favicons/apple-touch-icon.png"
          rel="apple-touch-icon"
          sizes="180x180"
        ></link>
        <link
          href="https://irserver2.eku.edu/libraries/favicons/favicon-32x32.png"
          type="image/png"
          sizes="32x32"
          rel="icon"
        ></link>
        <link
          href="https://irserver2.eku.edu/libraries/favicons/favicon-16x16.png"
          type="image/png"
          sizes="16x16"
          rel="icon"
        ></link>
        <link href="https://irserver2.eku.edu/libraries/favicons/manifest.json" rel="manifest"></link>
        <link
          href="https://irserver2.eku.edu/libraries/favicons/safari-pinned-tab.svg"
          color="#5bbad5"
          rel="mask-icon"
        ></link>
        <meta name="msapplication-TileColor" content="#da532c"></meta>
        <meta name="theme-color" content="#ffffff"></meta>
      </Head>
      <Body>
        <Header></Header>
        <div className="container-fluid">
          <div className="row">
            <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4 py-3">
              <Dashboard {...props}></Dashboard>
            </main>
            <Sidebar></Sidebar>
          </div>
        </div>
        <Footer></Footer>
      </Body>
    </Html>
  );
};

export default Object.assign(Remote, { Dropdown });

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
 */
