const Footer = () => {
  return (
    <div className="container">
      <footer className="py-3 my-4">
        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
          <li className="nav-item">
            <a className="nav-link px-2 text-body-secondary" href="/#">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link px-2 text-body-secondary" href="/#">
              Features
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link px-2 text-body-secondary" href="/#">
              Pricing
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link px-2 text-body-secondary" href="/#">
              FAQs
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link px-2 text-body-secondary" href="/#">
              About
            </a>
          </li>
        </ul>
        <p className="text-center text-body-secondary">© 2023 Company, Inc</p>
      </footer>
    </div>
  );
};

export default Footer;
