import Fold from "./Fold";

const Body = ({ children }) => {
  return (
    <main className="container">
      <div className="my-3 p-3 bg-body rounded box-shadow-1 position-relative">
        <Fold></Fold>
        <h6 className="border-bottom pb-2 mb-0">Recent updates</h6>
        <div className="d-flex text-body-secondary pt-3">
          <svg
            className="bd-placeholder-img flex-shrink-0 me-2 rounded"
            preserveAspectRatio="xMidYMid slice"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="Placeholder: 32x32"
            focusable="false"
            height={32}
            role="img"
            width={32}
          >
            <title>Placeholder</title>
            <rect fill="#007bff" height="100%" width="100%" />
            <text fill="#007bff" dy=".3em" y="50%" x="50%">
              32x32
            </text>
          </svg>
          <p className="pb-3 mb-0 small lh-sm border-bottom">
            <strong className="d-block text-gray-dark">@username</strong>
            Some representative placeholder content, with some information about this user. Imagine this being some sort
            of status update, perhaps?
          </p>
        </div>
        <div className="d-flex text-body-secondary pt-3">
          <svg
            className="bd-placeholder-img flex-shrink-0 me-2 rounded"
            preserveAspectRatio="xMidYMid slice"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="Placeholder: 32x32"
            focusable="false"
            height={32}
            role="img"
            width={32}
          >
            <title>Placeholder</title>
            <rect fill="#e83e8c" height="100%" width="100%" />
            <text fill="#e83e8c" dy=".3em" y="50%" x="50%">
              32x32
            </text>
          </svg>
          <p className="pb-3 mb-0 small lh-sm border-bottom">
            <strong className="d-block text-gray-dark">@username</strong>
            Some more representative placeholder content, related to this other user. Another status update, perhaps.
          </p>
        </div>
        <div className="d-flex text-body-secondary pt-3">
          <svg
            className="bd-placeholder-img flex-shrink-0 me-2 rounded"
            preserveAspectRatio="xMidYMid slice"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="Placeholder: 32x32"
            focusable="false"
            height={32}
            role="img"
            width={32}
          >
            <title>Placeholder</title>
            <rect fill="#6f42c1" height="100%" width="100%" />
            <text fill="#6f42c1" dy=".3em" y="50%" x="50%">
              32x32
            </text>
          </svg>
          <p className="pb-3 mb-0 small lh-sm border-bottom">
            <strong className="d-block text-gray-dark">@username</strong>
            This user also gets some representative placeholder content. Maybe they did something interesting, and you
            really want to highlight this in the recent updates.
          </p>
        </div>
        {/* <div className="d-flex text-body-secondary pt-3">
          <svg
            className="bd-placeholder-img flex-shrink-0 me-2 rounded"
            preserveAspectRatio="xMidYMid slice"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="Placeholder: 32x32"
            focusable="false"
            height={32}
            role="img"
            width={32}
          >
            <title>Placeholder</title>
            <rect fill="orange" height="100%" width="100%" />
            <text fill="orange" dy=".3em" y="50%" x="50%">
              32x32
            </text>
          </svg>
          <p className="pb-3 mb-0 small lh-sm border-bottom">
            <strong className="d-block text-gray-dark">@username</strong>
            {children}
          </p>
        </div> */}
        <small className="d-block text-end mt-3">
          <a href="/#">All updates</a>
        </small>
      </div>
    </main>
  );
};

export default Body;
