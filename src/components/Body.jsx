import Fold from "./Fold";

const Body = ({ children }) => {
  return (
    <main className="container">
      <div className="my-3 p-3 p-sm-4 bg-body rounded box-shadow-2 position-relative">
        <Fold></Fold>
        {children}
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                data-bs-target="#collapseOne"
                className="accordion-button"
                aria-controls="collapseOne"
                data-bs-toggle="collapse"
                aria-expanded="true"
                type="button"
              >
                Accordion Item #1
              </button>
            </h2>
            <div className="accordion-collapse collapse show" data-bs-parent="#accordionExample" id="collapseOne">
              <div className="accordion-body">
                <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse
                plugin adds the appropriate classes that we use to style each element. These classes control the overall
                appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with
                custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go
                within the <code>.accordion-body</code>, though the transition does limit overflow.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                data-bs-target="#collapseTwo"
                aria-controls="collapseTwo"
                data-bs-toggle="collapse"
                aria-expanded="false"
                type="button"
              >
                Accordion Item #2
              </button>
            </h2>
            <div className="accordion-collapse collapse" data-bs-parent="#accordionExample" id="collapseTwo">
              <div className="accordion-body">
                <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse
                plugin adds the appropriate classes that we use to style each element. These classes control the overall
                appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with
                custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go
                within the <code>.accordion-body</code>, though the transition does limit overflow.
              </div>
            </div>
          </div>
        </div>
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                data-bs-target="#collapseOne"
                className="accordion-button"
                aria-controls="collapseOne"
                data-bs-toggle="collapse"
                aria-expanded="true"
                type="button"
              >
                Accordion Item #1
              </button>
            </h2>
            <div className="accordion-collapse collapse show" data-bs-parent="#accordionExample" id="collapseOne">
              <div className="accordion-body">
                <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse
                plugin adds the appropriate classes that we use to style each element. These classes control the overall
                appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with
                custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go
                within the <code>.accordion-body</code>, though the transition does limit overflow.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                data-bs-target="#collapseTwo"
                aria-controls="collapseTwo"
                data-bs-toggle="collapse"
                aria-expanded="false"
                type="button"
              >
                Accordion Item #2
              </button>
            </h2>
            <div className="accordion-collapse collapse" data-bs-parent="#accordionExample" id="collapseTwo">
              <div className="accordion-body">
                <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse
                plugin adds the appropriate classes that we use to style each element. These classes control the overall
                appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with
                custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go
                within the <code>.accordion-body</code>, though the transition does limit overflow.
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Body;
