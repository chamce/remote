import { SearchButton } from "./SearchButton";
import { SearchBar } from "./SearchBar";
import { Popover } from "./Popover";

export const PopoverSearch = () => {
  return (
    <>
      {/* Search Button and Search Bar */}
      <Popover>
        {/* Search Icon Button */}
        <SearchButton></SearchButton>
        {/* Toggleable Wider Search Bar */}
        <SearchBar></SearchBar>
      </Popover>
    </>
  );
};
