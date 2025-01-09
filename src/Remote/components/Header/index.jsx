import { PopoverSearch } from "./PopoverSearch";
import { MobileNav } from "./MobileNav";

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
                  <a href="https://eku.edu/in/">inEKU</a>
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
                  src="https://eku.edu/wp-content/themes/eku2025/resources/img/eku-wordmark-maroon.svg"
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
                    <a href="https://eku.edu/academics/">Academics</a>
                  </li>
                  <li
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-16018"
                    id="menu-item-16018"
                  >
                    <a href="https://eku.edu/admissions/">Admissions</a>
                  </li>
                  <li
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2619"
                    id="menu-item-2619"
                  >
                    <a href="https://eku.edu/tuition-and-aid/">Tuition &amp; Aid</a>
                  </li>
                  <li
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2618"
                    id="menu-item-2618"
                  >
                    <a href="https://eku.edu/life-at-eku/">Life @ EKU</a>
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
                    <a href="https://eku.edu/about/">About</a>
                  </li>
                  <li
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-12917"
                    id="menu-item-12917"
                  >
                    <a href="https://eku.edu/info-for/">Info For</a>
                  </li>
                </ul>{" "}
              </div>
              <PopoverSearch></PopoverSearch>
            </div>
          </div>
        </div>
      </header>
      <MobileNav></MobileNav>
    </div>
  );
};
