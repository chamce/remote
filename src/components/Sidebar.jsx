import FloatingButton from "./FloatingButton";

const Sidebar = ({ children }) => {
  return (
    <div
      aria-labelledby="offcanvasExampleLabel"
      className="offcanvas offcanvas-start"
      id="offcanvasExample"
      tabIndex={-1}
    >
      <div className="vstack position-relative">
        <div
          className="position-absolute top-50 start-100 visible ms-3 bd-mode-toggle"
          style={{ transform: "translateY(-50%)" }}
        >
          <FloatingButton></FloatingButton>
        </div>
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasExampleLabel">
            Offcanvas
          </h5>
          <button data-bs-dismiss="offcanvas" className="btn-close" aria-label="Close" type="button" />
        </div>
        <div className="offcanvas-body overflow-auto">
          <div>{children}</div>
          <div className="dropdown mt-3">
            <button className="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" type="button">
              Dropdown button
            </button>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="/#">
                  Action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/#">
                  Another action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/#">
                  Something else here
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
