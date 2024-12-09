export const Nav = ({ toggle, hidden }) => {
  const className = ["lg:tw-hidden w-full bg-eku-maroon z-49", hidden ? "tw-hidden" : ""]
    .filter((element) => element)
    .join(" ");

  return (
    <header id="mobile-top-bar-nav" className={className}>
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
            <button
              className="btn btn-square btn-ghost hover:bg-white"
              aria-label="Toggle Menu"
              onClick={toggle}
              id="menu-btn"
            >
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
  );
};
