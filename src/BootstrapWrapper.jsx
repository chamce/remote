import bootstrapCss from "bootstrap/dist/css/bootstrap.min.css?raw";
import { HelmetProvider, Helmet } from "react-helmet-async";
import "bootstrap/dist/js/bootstrap.bundle.min";

import appCss from "./App.css?raw";
import App from "./App";

const css = bootstrapCss + appCss;

function BootstrapWrapper({ children }) {
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
        <div className="vstack">
          <p className="text-center">I am a remote component containing bootstrap and a demo accordion</p>
          <div className="accordion" id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  data-bs-target="#collapseOne"
                  className="accordion-button"
                  aria-controls="collapseOne"
                  data-bs-toggle="collapse"
                  aria-expanded="true"
                  type="button"
                >
                  Accordion Item #1
                </button>
              </h2>
              <div className="accordion-collapse collapse show" data-bs-parent="#accordionExample" id="collapseOne">
                <div className="accordion-body">{children}</div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  data-bs-target="#collapseTwo"
                  aria-controls="collapseTwo"
                  data-bs-toggle="collapse"
                  aria-expanded="false"
                  type="button"
                >
                  Accordion Item #2
                </button>
              </h2>
              <div className="accordion-collapse collapse" data-bs-parent="#accordionExample" id="collapseTwo">
                <div className="accordion-body">
                  <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse
                  plugin adds the appropriate classes that we use to style each element. These classes control the
                  overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this
                  with custom CSS or overriding our default variables. It's also worth noting that just about any HTML
                  can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  data-bs-target="#collapseThree"
                  aria-controls="collapseThree"
                  data-bs-toggle="collapse"
                  aria-expanded="false"
                  type="button"
                >
                  Accordion Item #3
                </button>
              </h2>
              <div className="accordion-collapse collapse" data-bs-parent="#accordionExample" id="collapseThree">
                <div className="accordion-body">
                  <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse
                  plugin adds the appropriate classes that we use to style each element. These classes control the
                  overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this
                  with custom CSS or overriding our default variables. It's also worth noting that just about any HTML
                  can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
              </div>
            </div>
          </div>
        </div>
      </App>
    </HelmetProvider>
  );
}

export default BootstrapWrapper;

/*
* need favicons to take priority over vite icon
* remove unwanted css
* fix eslint & prettier rules
* may have babel jsx loader issue
* make sure react helmet config is standard
* make sure styled jsx config is standard
TODO rewrite wrapper (may want to change sidebar & will want to change fullscreen modal config)
TODO add pages
TODO proper folder structure
* setup host to read from github
* need remote component to wrap around host again
*/
