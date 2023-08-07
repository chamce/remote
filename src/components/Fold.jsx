const Fold = () => {
  return (
    <div className="position-absolute top-0 start-0">
      <div className="position-relative fold">
        <div className="z-1 h-100 position-absolute bottom-100 end-0 bg-picker fold-hypotenuse"></div>
        <div className="z-1 h-100 w-100 position-absolute bottom-100 end-0 bg-picker"></div>
        <div className="z-1 h-100 w-100 position-absolute bg-picker rotated-90-to-the-left"></div>
        <div className="z-1 h-100 position-absolute bottom-100 end-0 bg-picker hypotenuse-shadow-cover"></div>
      </div>
    </div>
  );
};

export default Fold;
