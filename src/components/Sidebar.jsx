import FloatingButton from "./FloatingButton";

const Sidebar = ({ children }) => {
  return (
    <div
      aria-labelledby="offcanvasExampleLabel"
      className="offcanvas offcanvas-start"
      id="offcanvasExample"
      tabIndex={-1}
    >
      <div className="position-relative d-flex flex-column h-100">
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
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
