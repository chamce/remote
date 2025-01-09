import { useState } from "react";

import { ButtonsSection } from "./ButtonsSection";
import { SearchSection } from "./SearchSection";

export const NavOpened = ({ toggle, hidden }) => {
  const className = ["lg:tw-hidden flex flex-col w-full bg-white z-50", hidden ? "tw-hidden" : ""]
    .filter((element) => element)
    .join(" ");

  const [searchOpened, setSearchOpened] = useState(false);

  const openSearch = () => setSearchOpened(true);

  const closeSearch = () => setSearchOpened(false);

  return (
    <header id="mobile-top-bar-nav-opened" className={className}>
      <div className="navbar bg-white text-maroon text-lg font-semibold flex items-center px-6 py-3">
        <div className="flex justify-between w-full">
          {/* Left side - Logo */}
          <div>
            <a className="block" href="/">
              <img
                src="https://eku.edu/wp-content/themes/eku2025/resources/img/eku-wordmark-maroon.svg"
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
              onClick={toggle}
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
              <a href="https://eku.edu/academics/">
                <span className="text-eku-maroon font-semibold px-6 py-3 block hover:bg-gray-100 hover:text-black transition-colors duration-200">
                  Academics
                </span>
              </a>
            </li>
            <li className="page_item page-item-16018">
              <a href="https://eku.edu/admissions/">
                <span className="text-eku-maroon font-semibold px-6 py-3 block hover:bg-gray-100 hover:text-black transition-colors duration-200">
                  Admissions
                </span>
              </a>
            </li>
            <li className="page_item page-item-2619">
              <a href="https://eku.edu/tuition-and-aid/">
                <span className="text-eku-maroon font-semibold px-6 py-3 block hover:bg-gray-100 hover:text-black transition-colors duration-200">
                  Tuition &amp; Aid
                </span>
              </a>
            </li>
            <li className="page_item page-item-2618">
              <a href="https://eku.edu/life-at-eku/">
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
              <a href="https://eku.edu/about/">
                <span className="text-eku-maroon font-semibold px-6 py-3 block hover:bg-gray-100 hover:text-black transition-colors duration-200">
                  About
                </span>
              </a>
            </li>
            <li className="page_item page-item-12917">
              <a href="https://eku.edu/info-for/">
                <span className="text-eku-maroon font-semibold px-6 py-3 block hover:bg-gray-100 hover:text-black transition-colors duration-200">
                  Info For
                </span>
              </a>
            </li>
          </ul>{" "}
        </nav>
        {/* Mobile Menu Secondary Links */}
        <div
          className="flex flex-wrap justify-between text-normal text-eku-maroon font-normal px-6 mb-4"
          style={{ gap: 12 }}
        >
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
            <a href="https://eku.edu/info-for/community" className="block hover:text-black">
              Community
            </a>
            <a href="https://www.alumni.eku.edu/s/1763/24/home.aspx?gid=2&pgid=404" className="block hover:text-black">
              Alumni
            </a>
          </div>
          <div className="space-y-3">
            <a href="https://eku.edu/info-for/current-students/" className="block hover:text-black">
              Students
            </a>
            <a href="https://experience.elluciancloud.com/eku/" className="block hover:text-black">
              Employees
            </a>
            <a
              href="https://experience.elluciancloud.com/eku/"
              // className="block bg-eku-maroon text-white rounded-lg py-3 px-3 text-center"
              className="block hover:text-black fw-bold"
            >
              OneLogin
            </a>
          </div>
        </div>
      </div>
      {/* Footer Buttons at the bottom of the overlay */}
      <ButtonsSection hidden={searchOpened} toggle={openSearch}></ButtonsSection>
      {/* Search Bar Section */}
      <SearchSection hidden={!searchOpened} toggle={closeSearch}></SearchSection>
    </header>
  );
};
