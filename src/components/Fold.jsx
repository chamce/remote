const Fold = () => {
  return (
    <div className="position-absolute top-0 start-0 d-none d-sm-block" id="corner-absolute-position">
      <div className="position-relative folded-corner" id="corner-container">
        <div className="z-1 h-100 position-absolute bottom-100 end-0 hypotenuse bg-picker" id="fold-hypotenuse">
          <div className="position-relative w-100 h-75 bg-picker" id="hypotenuse-excess-shadow-cover"></div>
        </div>
        <div className="z-1 h-100 w-100 position-absolute bottom-100 end-0 bg-picker" id="above-corner"></div>
        <div
          className="z-1 h-100 w-100 position-absolute rotate-negative-90-bottom-left bg-picker rounded-bottom-1"
          id="left-of-corner"
        ></div>
      </div>
    </div>
  );
};

export default Fold;
