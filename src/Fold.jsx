const Fold = () => {
  return (
    <div className="position-absolute top-0 start-0">
      <div className="position-relative fold">
        <div className="z-1 h-100 position-absolute bottom-100 end-0 bg-light fold-hypotenuse"></div>
        <div className="z-1 h-100 w-100 position-absolute bottom-100 end-0 bg-light"></div>
        <div className="z-1 h-100 w-100 position-absolute bg-light rounded-bottom upright-and-left"></div>
        <div className="z-1 h-100 position-absolute bottom-100 end-0 bg-light hypotenuse-shadow-cover"></div>
      </div>
    </div>
  );
};

export default Fold;
