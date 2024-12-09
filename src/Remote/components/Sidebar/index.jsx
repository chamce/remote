import { NavLink } from "./NavLink";
import { lists } from "./lists";

export const Sidebar = () => {
  return (
    <div className="sidebar col-md-3 col-lg-2 p-0 bg-body-tertiary material-shadow-lg shadow-none-max-md">
      <div className="flex w-full d-md-none">
        <div className="bg-eku-maroon w-1/5 h-3" />
        <div className="bg-goldenrod-yellow w-1/5 h-3" />
        <div className="bg-autumn-orange w-1/5 h-3" />
        <div className="bg-kentucky-bluegrass w-1/5 h-3" />
        <div className="bg-boone-bronze w-1/5 h-3" />
      </div>
      <div aria-labelledby="sidebarMenuLabel" className="bg-body-tertiary" id="sidebarMenu" tabIndex={-1}>
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
