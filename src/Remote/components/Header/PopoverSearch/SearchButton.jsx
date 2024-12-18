export const SearchButton = () => {
  return (
    <button className="btn btn-ghost btn-circle" aria-label="Search">
      <svg xmlns="http://www.w3.org/2000/svg" stroke="currentColor" viewBox="0 0 24 24" className="h-5 w-5" fill="none">
        <path
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          strokeLinejoin="round"
          strokeLinecap="round"
          strokeWidth={2}
        />
      </svg>
    </button>
  );
};
