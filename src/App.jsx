import appCss from './App.css?raw';
// Bootstrap CSS
import bootstrapCss from 'bootstrap/dist/css/bootstrap.min.css?raw';
// Bootstrap Bundle JS
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const css = bootstrapCss + appCss;

export default function App({ children }) {
  return (
    <HelmetProvider>
      <Helmet>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="https://chamce.github.io/favicons/apple-touch-icon.png"
        ></link>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="https://chamce.github.io/favicons/favicon-32x32.png"
        ></link>
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="https://chamce.github.io/favicons/favicon-16x16.png"
        ></link>
        <link
          rel="manifest"
          href="https://chamce.github.io/favicons/manifest.json"
        ></link>
        <link
          rel="mask-icon"
          href="https://chamce.github.io/favicons/safari-pinned-tab.svg"
          color="#5bbad5"
        ></link>
        <meta name="msapplication-TileColor" content="#da532c"></meta>
        <meta name="theme-color" content="#ffffff"></meta>
      </Helmet>
      <style jsx global>
        {css}
      </style>
      <div className="vstack">
        <p className="text-center">
          I am a remote component containing bootstrap and a demo
          accordion
        </p>
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Accordion Item #1
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">{children}</div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Accordion Item #2
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <strong>
                  This is the second item's accordion body.
                </strong>{' '}
                It is hidden by default, until the collapse plugin
                adds the appropriate classes that we use to style each
                element. These classes control the overall appearance,
                as well as the showing and hiding via CSS transitions.
                You can modify any of this with custom CSS or
                overriding our default variables. It's also worth
                noting that just about any HTML can go within the{' '}
                <code>.accordion-body</code>, though the transition
                does limit overflow.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Accordion Item #3
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <strong>
                  This is the third item's accordion body.
                </strong>{' '}
                It is hidden by default, until the collapse plugin
                adds the appropriate classes that we use to style each
                element. These classes control the overall appearance,
                as well as the showing and hiding via CSS transitions.
                You can modify any of this with custom CSS or
                overriding our default variables. It's also worth
                noting that just about any HTML can go within the{' '}
                <code>.accordion-body</code>, though the transition
                does limit overflow.
              </div>
            </div>
          </div>
        </div>
      </div>
    </HelmetProvider>
  );
}

/*
* need favicons to take priority over vite icon
* remove unwanted css
TODO fix eslint & prettier rules
TODO may have babel jsx loader issue
TODO rewrite wrapper (may want to change sidebar & will want to change fullscreen modal config)
TODO add pages
* need remote component to wrap around host again
*/
