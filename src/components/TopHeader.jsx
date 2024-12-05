export const TopHeader = () => {
  return (
    <div id="top-header">
      {/* START RAVE Alert */}
      {/* END RAVE Alert */}
      <div className="container clearfix">
        <div id="et-info">
          <span id="et-info-phone">859-622-1000</span>
          <a href="mailto:admissions@eku.edu" role="link">
            <span id="et-info-email">admissions@eku.edu</span>
          </a>
          <ul className="et-social-icons">
            <li className="et-social-icon et-social-facebook">
              <a href="https://www.facebook.com/easternkentuckyuniversity" className="icon" role="button">
                <span>Facebook</span>
              </a>
            </li>
            <li className="et-social-icon et-social-twitter">
              <a
                href="https://twitter.com/eku?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
                className="icon"
                role="button"
              >
                <span>Twitter</span>
              </a>
            </li>
            <li className="et-social-icon et-social-instagram">
              <a href="https://www.instagram.com/easternkentuckyu/?hl=en" className="icon" role="button">
                <span>Instagram</span>
              </a>
            </li>
          </ul>{" "}
        </div>
        <div id="et-secondary-menu">
          <div className="et_duplicate_social_icons">
            <ul className="et-social-icons">
              <li className="et-social-icon et-social-facebook">
                <a href="https://www.facebook.com/easternkentuckyuniversity" className="icon" role="button">
                  <span>Facebook</span>
                </a>
              </li>
              <li className="et-social-icon et-social-twitter">
                <a
                  href="https://twitter.com/eku?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
                  className="icon"
                  role="button"
                >
                  <span>Twitter</span>
                </a>
              </li>
              <li className="et-social-icon et-social-instagram">
                <a href="https://www.instagram.com/easternkentuckyu/?hl=en" className="icon" role="button">
                  <span>Instagram</span>
                </a>
              </li>
            </ul>
          </div>
          <ul id="et-secondary-nav" className="menu">
            <li className="menu-item menu-item-type-custom menu-item-object-custom dbdb_secondary-menu menu-item-3972">
              <a href="https://eku.university-tour.com/" rel="noopener noreferrer" target="_blank" role="link">
                Explore the Campus Beautiful
              </a>
            </li>
            <li className="menu-item menu-item-type-custom menu-item-object-custom dbdb_secondary-menu menu-item-3973">
              <a
                href="https://securelb.imodules.com/s/1763/giving19/interior.aspx?sid=1763&gid=2&pgid=524&cid=1360"
                role="link"
              >
                Make a Gift
              </a>
            </li>
            <li className="menu-item menu-item-type-custom menu-item-object-custom dbdb_secondary-menu menu-item-6095">
              <a href="/admissions/getconnected/" role="link">
                More Information
              </a>
            </li>
            <li className="menu-item menu-item-type-custom menu-item-object-custom dbdb_secondary-menu menu-item-6096">
              <a href="/admissions/apply/" role="link">
                Apply Now!
              </a>
            </li>
          </ul>{" "}
        </div>
      </div>
    </div>
  );
};
