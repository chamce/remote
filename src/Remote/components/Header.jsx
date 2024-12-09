export const Header = () => {
  return (
    <div className="w-full material-shadow-lg" style={{ zIndex: 998 }} id="header-group">
      <header className="tw-hidden d-lg-block" id="top-bar-nav">
        <div className="navbar bg-primary text-white text-sm font-light flex items-center min-h-10 lg:px-12">
          <div className="flex justify-between w-full container-xl mx-xl-auto">
            {/* Left side */}
            <div>
              <span>Eastern Kentucky University</span>
              <span className="mx-1.5">|</span>
              <span>859-622-1000</span>
              <span className="mx-1.5">|</span>
              <span>
                <a href="mailto:admissions@eku.edu" className="link">
                  admissions@eku.edu
                </a>
              </span>
            </div>
            {/* Right side */}
            <div>
              <ul className="menu menu-horizontal font-bold text-white text-sm p-0 max-h-6 -my-4" id="menu-top-bar">
                <li
                  className="menu-item menu-item-type-custom menu-item-object-custom menu-item-817"
                  id="menu-item-817"
                >
                  <a href="https://application.eku.edu/portal/apply_eku">Apply</a>
                </li>
                <li
                  className="menu-item menu-item-type-custom menu-item-object-custom menu-item-818"
                  id="menu-item-818"
                >
                  <a href="https://application.eku.edu/portal/campus_visit_portal">Visit</a>
                </li>
                <li
                  className="menu-item menu-item-type-custom menu-item-object-custom menu-item-819"
                  id="menu-item-819"
                >
                  <a href="https://securelb.imodules.com/s/1763/giving19/interior.aspx?sid=1763&gid=2&pgid=524&cid=1360">
                    Donate
                  </a>
                </li>
                <li
                  className="menu-item menu-item-type-custom menu-item-object-custom menu-item-820"
                  id="menu-item-820"
                >
                  <a href="https://experience.elluciancloud.com/eku/">OneLogin</a>
                </li>
                <li
                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-23206"
                  id="menu-item-23206"
                >
                  <a href="https://2025.eku.edu/in/">inEKU</a>
                </li>
              </ul>{" "}
            </div>
          </div>
        </div>
      </header>
      <header className="bg-white tw-hidden d-lg-block" id="primary-nav">
        <div className="mx-xl-auto lg:px-12">
          <div className="flex justify-between align-items-lg-center container-xl py-6 mx-xl-auto w-full">
            {/* Left Side: Logo and Navigation Menu in the same flex container */}
            <div className="flex items-center w-full lg:w-auto">
              {/* Logo */}
              <a href="/">
                <img
                  src="https://2025.eku.edu/wp-content/themes/eku2025/resources/img/eku-wordmark-maroon.svg"
                  className="inline-block w-[125px] xl:w-[150px]"
                  alt="eku"
                />
              </a>
            </div>
            {/* Right Side: Nav, Search Icon */}
            <div className="d-lg-flex align-items-lg-center">
              {/* Navigation Menu */}
              <div className="pl-0">
                {" "}
                {/* Removed xl:pl-12 */}
                <ul
                  className="menu menu-horizontal font-extrabold text-primary text-small xl:text-base"
                  id="menu-primary-navigation"
                >
                  <li
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-15968"
                    id="menu-item-15968"
                  >
                    <a href="https://2025.eku.edu/academics/">Academics</a>
                  </li>
                  <li
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-16018"
                    id="menu-item-16018"
                  >
                    <a href="https://2025.eku.edu/admissions/">Admissions</a>
                  </li>
                  <li
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2619"
                    id="menu-item-2619"
                  >
                    <a href="https://2025.eku.edu/tuition-and-aid/">Tuition &amp; Aid</a>
                  </li>
                  <li
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2618"
                    id="menu-item-2618"
                  >
                    <a href="https://2025.eku.edu/life-at-eku/">Life @ EKU</a>
                  </li>
                  <li
                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-824"
                    id="menu-item-824"
                  >
                    <a href="https://ekusports.com/">Athletics</a>
                  </li>
                  <li
                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-825"
                    id="menu-item-825"
                  >
                    <a href="https://www.alumni.eku.edu/s/1763/24/home.aspx?gid=2&pgid=404">Alumni</a>
                  </li>
                  <li
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2617"
                    id="menu-item-2617"
                  >
                    <a href="https://2025.eku.edu/about/">About</a>
                  </li>
                  <li
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-12917"
                    id="menu-item-12917"
                  >
                    <a href="https://2025.eku.edu/info-for/">Info For</a>
                  </li>
                </ul>{" "}
              </div>
              {/* Search Button and Search Bar */}
              <div className="relative">
                {/* Search Icon Button */}
                <button className="btn btn-ghost btn-circle" aria-label="Search">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    className="h-5 w-5"
                    fill="none"
                  >
                    <path
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      strokeLinejoin="round"
                      strokeLinecap="round"
                      strokeWidth={2}
                    />
                  </svg>
                </button>
                {/* Toggleable Wider Search Bar */}
                <div
                  className="tw-hidden flex items-center space-x-2 absolute right-0 mt-2 transition-all duration-300 ease-in-out bg-white rounded shadow-lg p-4 w-[100vw] lg:w-[50vw] xl:w-[50vw]"
                  id="search-bar"
                >
                  <form
                    className="w-full flex items-center space-x-2"
                    action="https://2025.eku.edu/search/"
                    role="search"
                    method="get"
                  >
                    <input
                      className="input input-bordered w-full text-small"
                      id="search-input-toggleable"
                      aria-label="Search input"
                      placeholder="Search EKU…"
                      type="search"
                      name="s"
                    />
                    <button className="btn bg-primary text-white" type="submit">
                      Search
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <header className="lg:tw-hidden w-full bg-eku-maroon z-49" id="mobile-top-bar-nav">
        <div className="navbar bg-eku-maroon text-white text-lg font-semibold flex items-center px-6 py-3">
          <div className="flex justify-between w-full">
            {/* Left side - Logo */}
            <div>
              <a className="block" href="/">
                <img
                  src="https://2025.eku.edu/wp-content/themes/eku2025/resources/img/eku-wordmark-white.svg"
                  className="h-8"
                  alt="EKU Logo"
                />
              </a>
            </div>
            {/* Right side - Hamburger/Close button */}
            <div className="flex items-center">
              <button className="btn btn-square btn-ghost hover:bg-white" aria-label="Toggle Menu" id="menu-btn">
                {/* Hamburger Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  className="h-6 w-6"
                  id="hamburger-icon"
                  strokeWidth={2}
                  fill="none"
                >
                  <line x2={20} y2={6} y1={6} x1={4} />
                  <line y2={12} x2={20} y1={12} x1={4} />
                  <line y2={18} x2={20} y1={18} x1={4} />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>
      <header
        className="tw-hidden flex flex-col h-screen w-full bg-white shadow-lg z-50"
        id="mobile-top-bar-nav-opened"
      >
        <div className="navbar bg-white text-maroon text-lg font-semibold flex items-center px-6 py-3">
          <div className="flex justify-between w-full">
            {/* Left side - Logo */}
            <div>
              <a className="block" href="/">
                <img
                  src="https://2025.eku.edu/wp-content/themes/eku2025/resources/img/eku-wordmark-maroon.svg"
                  className="h-8"
                  alt="EKU Logo"
                />
              </a>
            </div>
            {/* Right side - Hamburger/Close button */}
            <div className="flex items-center">
              <button
                className="btn btn-square btn-ghost bg-primary text-white"
                aria-label="Toggle Menu"
                id="menu-btn-opened"
              >
                {/* Close Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  className="h-6 w-6"
                  id="close-icon"
                  fill="none"
                >
                  <path d="M6 18L18 6M6 6l12 12" strokeLinejoin="round" strokeLinecap="round" strokeWidth={2} />
                </svg>
              </button>
            </div>
          </div>
        </div>
        {/* Flex-grow container to push footer down and control overflow */}
        <div className="flex-grow px-12 pt-4" id="mobile-nav-menus">
          {/* Main Navigation with wp_nav_menu */}
          <nav className="flex flex-col text-xl font-normal pt-2 mb-8">
            <ul className="flex flex-col divide-y divide-gray-200" id="menu-primary-navigation-1">
              <li className="page_item page-item-15968">
                <a href="https://2025.eku.edu/academics/">
                  <span className="text-eku-maroon font-semibold px-6 py-3 block hover:bg-gray-100 hover:text-black transition-colors duration-200">
                    Academics
                  </span>
                </a>
              </li>
              <li className="page_item page-item-16018">
                <a href="https://2025.eku.edu/admissions/">
                  <span className="text-eku-maroon font-semibold px-6 py-3 block hover:bg-gray-100 hover:text-black transition-colors duration-200">
                    Admissions
                  </span>
                </a>
              </li>
              <li className="page_item page-item-2619">
                <a href="https://2025.eku.edu/tuition-and-aid/">
                  <span className="text-eku-maroon font-semibold px-6 py-3 block hover:bg-gray-100 hover:text-black transition-colors duration-200">
                    Tuition &amp; Aid
                  </span>
                </a>
              </li>
              <li className="page_item page-item-2618">
                <a href="https://2025.eku.edu/life-at-eku/">
                  <span className="text-eku-maroon font-semibold px-6 py-3 block hover:bg-gray-100 hover:text-black transition-colors duration-200">
                    Life @ EKU
                  </span>
                </a>
              </li>
              <li className="page_item page-item-824">
                <a href="https://ekusports.com/">
                  <span className="text-eku-maroon font-semibold px-6 py-3 block hover:bg-gray-100 hover:text-black transition-colors duration-200">
                    Athletics
                  </span>
                </a>
              </li>
              <li className="page_item page-item-825">
                <a href="https://www.alumni.eku.edu/s/1763/24/home.aspx?gid=2&pgid=404">
                  <span className="text-eku-maroon font-semibold px-6 py-3 block hover:bg-gray-100 hover:text-black transition-colors duration-200">
                    Alumni
                  </span>
                </a>
              </li>
              <li className="page_item page-item-2617">
                <a href="https://2025.eku.edu/about/">
                  <span className="text-eku-maroon font-semibold px-6 py-3 block hover:bg-gray-100 hover:text-black transition-colors duration-200">
                    About
                  </span>
                </a>
              </li>
              <li className="page_item page-item-12917">
                <a href="https://2025.eku.edu/info-for/">
                  <span className="text-eku-maroon font-semibold px-6 py-3 block hover:bg-gray-100 hover:text-black transition-colors duration-200">
                    Info For
                  </span>
                </a>
              </li>
            </ul>{" "}
          </nav>
          {/* Mobile Menu Secondary Links */}
          <div className="flex flex-wrap justify-between text-normal text-eku-maroon font-normal px-6 mb-4">
            <div className="space-y-3">
              <a
                href="https://securelb.imodules.com/s/1763/giving19/interior.aspx?sid=1763&gid=2&pgid=524&cid=1360"
                className="block hover:text-black"
              >
                Donate
              </a>
              <a className="block hover:text-black" href="https://ekusports.com/">
                Athletics
              </a>
              <a href="https://2025.eku.edu/info-for/community" className="block hover:text-black">
                Community
              </a>
              <a
                href="https://www.alumni.eku.edu/s/1763/24/home.aspx?gid=2&pgid=404"
                className="block hover:text-black"
              >
                Alumni
              </a>
            </div>
            <div className="space-y-3">
              <a href="https://2025.eku.edu/info-for/current-students/" className="block hover:text-black">
                Students
              </a>
              <a href="https://experience.elluciancloud.com/eku/" className="block hover:text-black">
                Employees
              </a>
              <a
                className="block bg-eku-maroon text-white rounded-lg px-4 py-4 text-center"
                href="https://experience.elluciancloud.com/eku/"
              >
                OneLogin
              </a>
            </div>
          </div>
        </div>
        {/* Footer Buttons at the bottom of the overlay */}
        <div
          className="flex justify-around bg-eku-maroon text-white text-base py-4 divide-x divide-white rounded-t-lg w-full -mt-4"
          id="buttons-section"
        >
          <a href="https://application.eku.edu/portal/apply_eku" className="text-white px-6 py-2 flex items-center">
            Apply Now
          </a>
          <a className="text-white px-6 py-2 flex items-center" href="/">
            Get Info
          </a>
          <a className="text-white px-6 py-2 flex items-center" href="/">
            Search
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2"
              stroke="currentColor"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth={2}
              />
            </svg>
          </a>
        </div>
        {/* Search Bar Section */}
        <div
          className="tw-hidden flex justify-around bg-eku-maroon  text-base py-4 rounded-t-lg w-full -mt-4"
          id="search-section"
        >
          {/* Toggle Back Button */}
          <button className="btn btn-ghost text-white" aria-label="Back">
            Back
          </button>
          {/* Mobile Search Form */}
          <div className="flex space-x-2 w-full mr-4">
            <form
              className="w-full flex items-center space-x-2"
              action="https://2025.eku.edu/search/"
              role="search"
              method="get"
            >
              <input
                className="input input-bordered w-full text-small"
                aria-label="Search input"
                placeholder="Search EKU…"
                id="search-input-mobile"
                type="search"
                name="s"
              />
              {/* Search Icon Button */}
              <button className="btn bg-primary text-white" aria-label="Search" type="submit">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="none"
                >
                  <path
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth={3}
                  />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </header>
    </div>
  );
};
