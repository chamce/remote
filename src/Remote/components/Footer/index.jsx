import { Banner } from "./Banner";

export const Footer = () => {
  return (
    <footer className="bg-dark-gray text-white w-full material-shadow-lg">
      <Banner></Banner>
      <div className="px-6 lg:px-12 mx-xl-auto">
        <div className="mt-16 pb-6 flex justify-between align-items-lg-center container-xl mx-xl-auto">
          <div className="w-full">
            <div className="flex flex-wrap justify-between items-start gap-12 flex-md-nowrap md:gap-16 lg:gap-24">
              {/* Logo */}
              {/* Logo */}
              <div className="w-full md:w-fit mb-8 text-center md:text-left text-md-start">
                <div className="mb-6">
                  <a className="inline-block mx-auto mx-md-0" href="/">
                    <img
                      src="https://2025.eku.edu/wp-content/themes/eku2025/resources/img/eku-wordmark-white.svg"
                      className="mx-auto mx-md-0"
                      width={150}
                      alt="eku"
                    />
                  </a>
                </div>
                <address className="xl:text-lg text-sm mb-6 leading-normal not-italic text-center md:text-left text-md-start">
                  521 Lancaster Ave.
                  <br />
                  Richmond, KY 40475
                </address>
                <div className="flex flex-row justify-center justify-content-md-start space-x-4">
                  <a href="https://facebook.com" aria-label="Facebook" rel="noreferrer" target="_blank">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      strokeLinejoin="round"
                      strokeLinecap="round"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="white"
                      fill="none"
                      height={24}
                      width={24}
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v9h4v-9h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    </svg>
                  </a>
                  <a aria-label="X (formerly Twitter)" href="https://x.com" rel="noreferrer" target="_blank">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      strokeLinejoin="round"
                      strokeLinecap="round"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="white"
                      fill="none"
                      height={24}
                      width={24}
                    >
                      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 0 22.43.36a9 9 0 0 1-2.85 1.09A4.52 4.52 0 0 0 16.84 0c-2.5 0-4.53 2.07-4.53 4.61 0 .36.04.71.12 1.05A12.9 12.9 0 0 1 2.23 1.17a4.6 4.6 0 0 0-.61 2.32c0 1.6.8 3.01 2.03 3.83a4.45 4.45 0 0 1-2.06-.59v.06c0 2.24 1.57 4.1 3.65 4.52-.38.1-.79.16-1.2.16-.3 0-.58-.03-.87-.08a4.53 4.53 0 0 0 4.24 3.17A9.05 9.05 0 0 1 1 20.07 12.84 12.84 0 0 0 7.29 22c8.8 0 13.61-7.47 13.61-13.95 0-.21 0-.42-.02-.63A9.72 9.72 0 0 0 23 3z" />
                    </svg>
                  </a>
                  <a href="https://instagram.com" aria-label="Instagram" rel="noreferrer" target="_blank">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      strokeLinejoin="round"
                      strokeLinecap="round"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="white"
                      fill="none"
                      height={24}
                      width={24}
                    >
                      <rect height={20} width={20} ry={5} rx={5} y={2} x={2} />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x2="17.5" x1="17.5" y2="6.5" y1="6.5" />
                    </svg>
                  </a>
                  <a href="https://linkedin.com" aria-label="LinkedIn" rel="noreferrer" target="_blank">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      strokeLinejoin="round"
                      strokeLinecap="round"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="white"
                      fill="none"
                      height={24}
                      width={24}
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect height={12} width={4} y={9} x={2} />
                      <circle cx={4} cy={4} r={2} />
                    </svg>
                  </a>
                </div>
              </div>
              {/* Navigation Menus */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 justify-items-start mx-auto max-w-lg md:max-w-full mx-md-0">
                {/* About Menu */}
                <div className="w-full mb-8">
                  <h2 className="font-bold xl:text-2xl text-lg mb-4">About</h2>
                  <ul className="flex flex-col xl:text-base text-sm gap-1.5" id="menu-footer-about">
                    <li
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-17834"
                      id="menu-item-17834"
                    >
                      <a href="https://2025.eku.edu/directory/">Office &amp; Department Directory</a>
                    </li>
                    <li
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-17835"
                      id="menu-item-17835"
                    >
                      <a href="https://2025.eku.edu/people/">EKU Faculty &amp; Staff</a>
                    </li>
                    <li
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-17870"
                      id="menu-item-17870"
                    >
                      <a href="https://2025.eku.edu/state-authorization/">State Authorization</a>
                    </li>
                    <li
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-20884"
                      id="menu-item-20884"
                    >
                      <a href="https://2025.eku.edu/accreditation/">Accreditation</a>
                    </li>
                    <li
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-21426"
                      id="menu-item-21426"
                    >
                      <a href="https://2025.eku.edu/contact-us/">Contact Us</a>
                    </li>
                  </ul>{" "}
                </div>
                {/* Resources Menu */}
                <div className="w-full mb-8">
                  <h2 className="font-bold xl:text-2xl text-lg mb-4">Resources</h2>
                  <ul className="flex flex-col xl:text-base text-sm gap-1.5" id="menu-footer-resources">
                    <li
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-17826"
                      id="menu-item-17826"
                    >
                      <a href="https://2025.eku.edu/it/">Information Technology</a>
                    </li>
                    <li
                      className="menu-item menu-item-type-post_type menu-item-object-help_guide menu-item-17855"
                      id="menu-item-17855"
                    >
                      <a href="https://2025.eku.edu/in/guides/cares-fund-distribution-student-plan/">
                        CARES Fund Distribution
                      </a>
                    </li>
                    <li
                      className="menu-item menu-item-type-custom menu-item-object-custom menu-item-811"
                      id="menu-item-811"
                    >
                      <a href="https://careers.eku.edu/jobs/search">Jobs at EKU</a>
                    </li>
                    <li
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-17838"
                      id="menu-item-17838"
                    >
                      <a href="https://2025.eku.edu/in/">inEKU</a>
                    </li>
                  </ul>{" "}
                </div>
                {/* News Menu */}
                <div className="w-full mb-8">
                  <h2 className="font-bold xl:text-2xl text-lg mb-4">News</h2>
                  <ul className="flex flex-col xl:text-base text-sm gap-1.5" id="menu-footer-news">
                    <li
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-19301"
                      id="menu-item-19301"
                    >
                      <a href="https://2025.eku.edu/press-and-media/">Press and Media</a>
                    </li>
                    <li
                      className="menu-item menu-item-type-custom menu-item-object-custom menu-item-17836"
                      id="menu-item-17836"
                    >
                      <a href="http://alumni.eku.edu/magazine">Alumni Magazine</a>
                    </li>
                    <li
                      className="menu-item menu-item-type-custom menu-item-object-custom menu-item-17837"
                      id="menu-item-17837"
                    >
                      <a href="http://www.easternprogress.com/">The Eastern Progress</a>
                    </li>
                  </ul>{" "}
                </div>
                {/* Related Sites Menu */}
                <div className="w-full">
                  <h2 className="font-bold xl:text-2xl text-lg mb-4">Related Sites</h2>
                  <ul className="flex flex-col xl:text-base text-sm gap-1.5" id="menu-footer-related-sites">
                    <li
                      className="menu-item menu-item-type-custom menu-item-object-custom menu-item-815"
                      id="menu-item-815"
                    >
                      <a href="https://www.weku.org/">WEKU 88.9</a>
                    </li>
                    <li
                      className="menu-item menu-item-type-custom menu-item-object-custom menu-item-816"
                      id="menu-item-816"
                    >
                      <a href="https://www.universityclub-arlington.com/">The University Club at Arlington</a>
                    </li>
                  </ul>{" "}
                </div>
              </div>
            </div>
            <div className="px-6 text-center md:text-left text-md-start px-md-0 mt-3 text-sm font-extralight">
              <span>© 2024 All rights reserved Eastern Kentucky University</span>
              <span className="mx-1.5">|</span>
              <a className="link" href="/">
                Equal Opportunity Statement
              </a>
              <span className="mx-1.5">|</span>
              <a className="link" href="/">
                Privacy Statement
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
