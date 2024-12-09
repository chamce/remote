export const ButtonsSection = ({ toggle, hidden }) => {
  const className = [
    "flex justify-around bg-eku-maroon text-white text-base py-4 divide-x divide-white rounded-t-lg w-full",
    hidden ? "tw-hidden" : "",
  ]
    .filter((element) => element)
    .join(" ");

  return (
    <div className={className} id="buttons-section">
      <a href="https://application.eku.edu/portal/apply_eku" className="text-white px-6 py-2 flex items-center">
        Apply Now
      </a>
      <a className="text-white px-6 py-2 flex items-center" href="/">
        Get Info
      </a>
      <a
        onClick={(e) => {
          e.preventDefault();

          toggle();
        }}
        className="text-white px-6 py-2 flex items-center"
        href="/"
      >
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
  );
};
