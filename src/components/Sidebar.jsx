import FloatingButton from "./FloatingButton";

const offcanvasId = "rcso49fnvs8ll3yh4710sjzfuvds4all3yh471b0qbtjukcojll3yh471";
const offcanvasLabelId = offcanvasId + "Label";

const Sidebar = ({ children }) => {
  return (
    <div className="offcanvas offcanvas-start" aria-labelledby={offcanvasLabelId} id={offcanvasId} tabIndex={-1}>
      <div className="position-relative d-flex flex-column h-100">
        <div
          className="position-absolute top-50 start-100 visible ms-3 bd-mode-toggle"
          style={{ transform: "translateY(-50%)" }}
        >
          <FloatingButton offcanvasId={offcanvasId}></FloatingButton>
        </div>
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id={offcanvasLabelId}>
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
