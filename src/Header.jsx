const Header = () => {
  return (
    <nav
      className="z-2 navbar navbar-expand-lg navbar-dark bg-dark box-shadow-2 bg-gradient"
      aria-label="Eighth navbar example"
    >
      <div className="container">
        <a className="navbar-brand" href="/#">
          Container
        </a>
        <button
          className="navbar-toggler box-shadow-1"
          data-bs-target="#navbarsExample07"
          aria-controls="navbarsExample07"
          aria-label="Toggle navigation"
          data-bs-toggle="collapse"
          aria-expanded="false"
          type="button"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarsExample07">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#">
                Link
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" aria-disabled="true" href="/#">
                Disabled
              </a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" href="/#">
                Dropdown
              </a>
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
            </li>
          </ul>
          <form role="search">
            <input className="form-control" placeholder="Search" aria-label="Search" type="search" />
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Header;
