const Footer = () => {
  return (
    <div className="container">
      <footer className="py-3 my-4">
        <ul
          className="nav justify-content-center pb-3 mb-3 text-center"
          style={{ borderBottom: "1px solid #212529bf" }}
        >
          <li className="nav-item">
            <a
              href="https://equity.eku.edu/equal-opportunity-statement"
              className="nav-link px-2 text-body-secondary"
              rel="noreferrer"
              target="_blank"
            >
              Equal Opportunity Statement
            </a>
          </li>
          <li className="nav-item">
            <a
              href="https://www.eku.edu/eku-privacy-statement/"
              className="nav-link px-2 text-body-secondary"
              rel="noreferrer"
              target="_blank"
            >
              Privacy Statement
            </a>
          </li>
          <li className="nav-item">
            <a
              href="https://form.asana.com/?k=I67xQySiqf7J19FAstuZ_A&d=28839040002083"
              className="nav-link px-2 text-body-secondary"
              rel="noreferrer"
              target="_blank"
            >
              Website Feedback
            </a>
          </li>
          <li className="nav-item">
            <a
              href="https://www.google.com/maps/dir//Eastern+Kentucky+University,+Lancaster+Ave,+Richmond,+KY/@37.7353841,-84.3336913,13z"
              className="nav-link px-2 text-body-secondary"
              rel="noreferrer"
              target="_blank"
            >
              521 Lancaster Ave. Richmond, KY 40475
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link px-2 text-body-secondary" href="tel:8596221000" rel="noreferrer" target="_blank">
              859-622-1000
            </a>
          </li>
        </ul>
        <p className="text-center text-body-secondary">© 2023 Eastern Kentucky University. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Footer;
