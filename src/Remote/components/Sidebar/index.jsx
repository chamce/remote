import { NavLink } from "./NavLink";
import { lists } from "./lists";

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
          <div className="vstack gap-3">
            {lists.map(({ heading, items }) => (
              <div key={heading}>
                <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-2 mb-1 text-body-secondary text-uppercase">
                  <span>{heading}</span>
                </h6>
                <ul className="nav flex-column">
                  {items.map(({ label, href }) => (
                    <li className="nav-item" key={label}>
                      <NavLink href={href}>{label}</NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
