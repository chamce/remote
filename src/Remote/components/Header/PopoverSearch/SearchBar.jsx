export const SearchBar = () => {
  return (
    <div
      className="z-1 flex items-center space-x-2 absolute right-0 mt-2 transition-all duration-300 ease-in-out bg-white rounded shadow-lg p-4 w-[100vw] lg:w-[50vw] xl:w-[50vw]"
      id="search-bar"
    >
      <form className="w-full flex items-center space-x-2" action="https://eku.edu/search/" role="search" method="get">
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
  );
};
