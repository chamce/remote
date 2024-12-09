export const NavLink = ({
  children = (
    <>
      <svg className="bi">
        <use xlinkHref="#file-earmark" />
      </svg>
      Orders
    </>
  ),
  className = "",
  href = "#",
  as = "a",
  ...rest
}) => {
  const As = as;

  const entireClassName = ["font-size-small nav-link d-flex align-items-center gap-2 text-primary", className]
    .filter((element) => element)
    .join(" ");

  return (
    <As className={entireClassName} href={href} {...rest}>
      <svg className="bi"></svg>
      {children}
    </As>
  );
};
