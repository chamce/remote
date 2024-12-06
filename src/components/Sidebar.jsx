const NavLink = ({
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

  const entireClassName = ["nav-link d-flex align-items-center gap-2 text-primary", className]
    .filter((element) => element)
    .join(" ");

  return (
    <As className={entireClassName} href={href} {...rest}>
      {children}
    </As>
  );
};

export const Sidebar = () => {
  return (
    <div className="sidebar border border-right col-md-3 col-lg-2 p-0 bg-body-tertiary">
      <div
        className="offcanvas-sm offcanvas-end bg-body-tertiary"
        aria-labelledby="sidebarMenuLabel"
        id="sidebarMenu"
        tabIndex={-1}
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="sidebarMenuLabel">
            Company name
          </h5>
          <button
            data-bs-target="#sidebarMenu"
            data-bs-dismiss="offcanvas"
            className="btn-close"
            aria-label="Close"
            type="button"
          />
        </div>
        <div className="offcanvas-body d-md-flex flex-column p-0 py-lg-3 overflow-y-auto">
          <ul className="nav flex-column">
            <li className="nav-item">
              <NavLink aria-current="page" className="active">
                Dashboard
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink>Orders</NavLink>
            </li>
            <li className="nav-item">
              <NavLink>Products</NavLink>
            </li>
            <li className="nav-item">
              <NavLink>Customers</NavLink>
            </li>
            <li className="nav-item">
              <NavLink>Reports</NavLink>
            </li>
            <li className="nav-item">
              <NavLink>Integrations</NavLink>
            </li>
          </ul>
          <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-body-secondary text-uppercase">
            <span>Saved reports</span>
            <a aria-label="Add a new report" className="link-secondary" href="#">
              <svg className="bi">
                <use xlinkHref="#plus-circle" />
              </svg>
            </a>
          </h6>
          <ul className="nav flex-column mb-auto">
            <li className="nav-item">
              <NavLink>Current month</NavLink>
            </li>
            <li className="nav-item">
              <NavLink>Last quarter</NavLink>
            </li>
            <li className="nav-item">
              <NavLink>Social engagement</NavLink>
            </li>
            <li className="nav-item">
              <NavLink>Year-end sale</NavLink>
            </li>
          </ul>
          <hr className="my-3" />
          <ul className="nav flex-column mb-auto">
            <li className="nav-item">
              <NavLink>Settings</NavLink>
            </li>
            <li className="nav-item">
              <NavLink>Sign out</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
