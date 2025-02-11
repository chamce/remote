import { useCallback, useEffect, useState, useRef, memo } from "react";

const DropdownButton = ({
  children = "Dropdown button",
  variant = "secondary",
  type = "button",
  as = "button",
  className,
  ...rest
}) => {
  const defaultClassName = `btn btn-${variant} dropdown-toggle`;

  const classes = [defaultClassName, className].filter((value) => value).join(" ");

  const As = as;

  return (
    <As className={classes} type={type} {...rest}>
      {children}
    </As>
  );
};

const DropdownMenu = ({ className, as = "ul", children, ...rest }) => {
  const defaultClassName = "dropdown-menu show";

  const classes = [defaultClassName, className].filter((value) => value).join(" ");

  const As = as;

  const listItems = [children].flat().map((child, index) => <li key={index}>{child}</li>);

  return (
    <As className={classes} {...rest}>
      {listItems}
    </As>
  );
};

const Square = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="bi bi-square"
      fill="currentColor"
      viewBox="0 0 16 16"
      height={16}
      width={16}
      {...props}
    >
      <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
    </svg>
  );
};

const CheckSquare = (props) => {
  return (
    <svg
      className="bi bi-check-square-fill"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 16 16"
      height={16}
      width={16}
      {...props}
    >
      <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm10.03 4.97a.75.75 0 0 1 .011 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.75.75 0 0 1 1.08-.022z" />
    </svg>
  );
};

const DropdownItem = ({
  children = "Action",
  type = "button",
  as = "button",
  className,
  checkbox,
  active,
  ...rest
}) => {
  const defaultClassName = "dropdown-item";

  const iconClassName = "dropdown-item d-flex gap-2 align-items-center";

  const classes = [checkbox ? iconClassName : defaultClassName, className, !checkbox && active ? "active" : null]
    .filter((value) => value)
    .join(" ");

  const As = as;

  const box = active ? (
    <CheckSquare className="text-primary"></CheckSquare>
  ) : (
    <Square className="text-primary"></Square>
  );

  return (
    <As className={classes} type={type} {...rest}>
      {checkbox && box}
      {children}
    </As>
  );
};

const Search = ({ handleChange: setValue, value = "", ...rest }) => {
  const onChange = (e) => setValue(e.target.value);

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
    }
  };

  return (
    <form className="p-2 mb-2 bg-body-tertiary border-bottom" {...rest}>
      <input
        placeholder="Type to filter..."
        onKeyDown={handleKeyDown}
        className="form-control"
        autoComplete="false"
        onChange={onChange}
        type="search"
        value={value}
      />
    </form>
  );
};

const defaultOptions = ["option1", "option2", "option3", "option4"];

const defaultSelectedOptions = new Set();

const defaultLabel = "Label";

export const Dropdown = memo(
  ({
    selectedOptions = defaultSelectedOptions,
    handleChange: setSelectedOptions,
    options = defaultOptions,
    label = defaultLabel,
    multiple,
    ...rest
  }) => {
    const handleOptionClick = (clickedOption, isActive) =>
      setSelectedOptions((set) =>
        isActive ? new Set([...set].filter((option) => option !== clickedOption)) : new Set([clickedOption, ...set]),
      );

    if (!multiple && selectedOptions.size > 1) {
      setSelectedOptions((set) => new Set([[...set][0]]));
    }

    const showSelections = selectedOptions.size > 0;

    const selections = [...selectedOptions].join(", ");

    const includeAllOption = multiple && options.length > 1;

    const allActive = options.length === selectedOptions.size;

    const handleAllClick = () => setSelectedOptions(allActive ? new Set() : new Set(options));

    const [searchValue, setSearchValue] = useState("");

    const results = options.filter((option) => option.includes(searchValue));

    return (
      <Popover {...rest}>
        <DropdownButton>{showSelections ? selections : label}</DropdownButton>
        <DropdownMenu className="pt-0 rounded-3 shadow overflow-hidden">
          <Search handleChange={setSearchValue} value={searchValue}></Search>
          {includeAllOption && (
            <DropdownItem onClick={handleAllClick} checkbox={multiple} active={allActive}>
              All
            </DropdownItem>
          )}
          {results.map((option) => (
            <DropdownItem
              onClick={() => handleOptionClick(option, selectedOptions.has(option))}
              active={selectedOptions.has(option)}
              checkbox={multiple}
              key={option}
            >
              {option}
            </DropdownItem>
          ))}
        </DropdownMenu>
      </Popover>
    );
  },
);

Dropdown.displayName = "Dropdown";

const Popover = ({ children }) => {
  const { popover, isOpen, open } = usePopover();

  const [trigger, content] = [children].flat();

  return (
    <div style={{ position: "relative", width: "fit-content" }} onClickCapture={open}>
      {trigger}
      {isOpen && (
        <div style={{ position: "absolute", zIndex: 1000 }} ref={popover}>
          {content}
        </div>
      )}
    </div>
  );
};

const usePopover = () => {
  const popover = useRef();

  const [isOpen, toggle] = useState(false);

  const open = useCallback(() => toggle(true), []);

  const close = useCallback(() => toggle(false), []);

  useClickOutside(popover, close);

  return { popover, isOpen, open };
};

// Improved version of https://usehooks.com/useOnClickOutside/
const useClickOutside = (ref, handler) => {
  useEffect(() => {
    let startedInside = false;
    let startedWhenMounted = false;

    const listener = (event) => {
      // Do nothing if `mousedown` or `touchstart` started inside ref element
      if (startedInside || !startedWhenMounted) return;
      // Do nothing if clicking ref's element or descendent elements
      if (!ref.current || ref.current.contains(event.target)) return;

      handler(event);
    };

    const validateEventStart = (event) => {
      startedWhenMounted = ref.current;
      startedInside = ref.current && ref.current.contains(event.target);
    };

    document.addEventListener("mousedown", validateEventStart);
    document.addEventListener("touchstart", validateEventStart);
    document.addEventListener("click", listener);

    return () => {
      document.removeEventListener("mousedown", validateEventStart);
      document.removeEventListener("touchstart", validateEventStart);
      document.removeEventListener("click", listener);
    };
  }, [ref, handler]);
};
