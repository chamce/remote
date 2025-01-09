export const SearchSection = ({ hidden, toggle }) => {
  const className = ["flex justify-around bg-eku-maroon text-base rounded-t-lg w-full", hidden ? "tw-hidden" : ""]
    .filter((element) => element)
    .join(" ");

  return (
    <div style={{ paddingBottom: 20, paddingTop: 20 }} className={className} id="search-section">
      {/* Toggle Back Button */}
      <button className="btn btn-ghost text-white" aria-label="Back" onClick={toggle}>
        Back
      </button>
      {/* Mobile Search Form */}
      <div className="flex space-x-2 w-full mr-4">
        <form
          className="w-full flex items-center space-x-2"
          action="https://eku.edu/search/"
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
  );
};
