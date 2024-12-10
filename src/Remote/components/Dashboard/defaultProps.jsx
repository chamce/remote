export const defaultProps = {
  children: (
    <>
      <div className="p-3 border border-dark rounded overflow-hidden material-shadow">
        <h5>Table</h5>
        <div className="table-responsive small">
          <table className="table table-striped table-sm table-borderless mb-0">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Header</th>
                <th scope="col">Header</th>
                <th scope="col">Header</th>
                <th scope="col">Header</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1,001</td>
                <td>random</td>
                <td>data</td>
                <td>placeholder</td>
                <td>text</td>
              </tr>
              <tr>
                <td>1,002</td>
                <td>placeholder</td>
                <td>irrelevant</td>
                <td>visual</td>
                <td>layout</td>
              </tr>
              <tr>
                <td>1,003</td>
                <td>data</td>
                <td>rich</td>
                <td>dashboard</td>
                <td>tabular</td>
              </tr>
              <tr>
                <td>1,003</td>
                <td>information</td>
                <td>placeholder</td>
                <td>illustrative</td>
                <td>data</td>
              </tr>
              <tr>
                <td>1,004</td>
                <td>text</td>
                <td>random</td>
                <td>layout</td>
                <td>dashboard</td>
              </tr>
              <tr>
                <td>1,005</td>
                <td>dashboard</td>
                <td>irrelevant</td>
                <td>text</td>
                <td>placeholder</td>
              </tr>
              <tr>
                <td>1,006</td>
                <td>dashboard</td>
                <td>illustrative</td>
                <td>rich</td>
                <td>data</td>
              </tr>
              <tr>
                <td>1,007</td>
                <td>placeholder</td>
                <td>tabular</td>
                <td>information</td>
                <td>irrelevant</td>
              </tr>
              <tr>
                <td>1,008</td>
                <td>random</td>
                <td>data</td>
                <td>placeholder</td>
                <td>text</td>
              </tr>
              <tr>
                <td>1,009</td>
                <td>placeholder</td>
                <td>irrelevant</td>
                <td>visual</td>
                <td>layout</td>
              </tr>
              <tr>
                <td>1,010</td>
                <td>data</td>
                <td>rich</td>
                <td>dashboard</td>
                <td>tabular</td>
              </tr>
              <tr>
                <td>1,011</td>
                <td>information</td>
                <td>placeholder</td>
                <td>illustrative</td>
                <td>data</td>
              </tr>
              <tr>
                <td>1,012</td>
                <td>text</td>
                <td>placeholder</td>
                <td>layout</td>
                <td>dashboard</td>
              </tr>
              <tr>
                <td>1,013</td>
                <td>dashboard</td>
                <td>irrelevant</td>
                <td>text</td>
                <td>visual</td>
              </tr>
              <tr>
                <td>1,014</td>
                <td>dashboard</td>
                <td>illustrative</td>
                <td>rich</td>
                <td>data</td>
              </tr>
              <tr>
                <td>1,015</td>
                <td>random</td>
                <td>tabular</td>
                <td>information</td>
                <td>text</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="card border-dark material-shadow">
        <svg
          className="bd-placeholder-img card-img-top"
          preserveAspectRatio="xMidYMid slice"
          aria-label="Placeholder: Image cap"
          xmlns="http://www.w3.org/2000/svg"
          focusable="false"
          height={180}
          width="100%"
          role="img"
        >
          <title>Placeholder</title>
          <rect fill="#868e96" height="100%" width="100%" />
          <text fill="#dee2e6" dy=".3em" y="50%" x="50%">
            Image cap
          </text>
        </svg>
        <div className="card-body">
          <h5 className="card-title">Image cap card</h5>
          <p className="card-text">
            This is a wider card with supporting text below as a natural lead-in to additional content. This content is
            a little bit longer.
          </p>
          <p className="card-text">
            <small className="text-body-secondary">Last updated 3 mins ago</small>
          </p>
        </div>
      </div>
      <div className="card border-dark text-bg-dark material-shadow">
        <svg
          className="bd-placeholder-img bd-placeholder-img-lg card-img"
          preserveAspectRatio="xMidYMid slice"
          aria-label="Placeholder: Card image"
          xmlns="http://www.w3.org/2000/svg"
          focusable="false"
          height={270}
          width="100%"
          role="img"
        >
          <title>Placeholder</title>
          <rect fill="#868e96" height="100%" width="100%" />
          <text fill="#dee2e6" dy=".3em" y="50%" x="50%">
            Card image
          </text>
        </svg>
        <div className="card-img-overlay">
          <h5 className="card-title">Image overlay card</h5>
          <p className="card-text">
            This is a wider card with supporting text below as a natural lead-in to additional content. This content is
            a little bit longer.
          </p>
          <p className="card-text">
            <small>Last updated 3 mins ago</small>
          </p>
        </div>
      </div>
    </>
  ),
  toolbar:
    // (
    //   <>
    //     <div className="btn-group me-2">
    //       <button className="btn btn-sm btn-outline-secondary" type="button">
    //         Share
    //       </button>
    //       <button className="btn btn-sm btn-outline-secondary" type="button">
    //         Export
    //       </button>
    //     </div>
    //     <button
    //       className="btn btn-sm btn-outline-secondary dropdown-toggle d-flex align-items-center gap-1"
    //       type="button"
    //     >
    //       <svg className="bi">
    //         <use xlinkHref="#calendar3" />
    //       </svg>
    //       This week
    //     </button>
    //   </>
    // )
    false,
  renderer: ({ children, toolbar, heading }) => (
    <>
      {(heading || toolbar) && (
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 border-bottom">
          <h1 className="h2">{heading}</h1>
          <div className="btn-toolbar mb-2 mb-md-0">{toolbar}</div>
        </div>
      )}
      {children}
    </>
  ),
  heading: false,
  className: "",
  vstack: true,
  as: "div",
  gap: 4,
};
