export const Banner = ({ className, ...rest }) => {
  const entireClassName = ["flex w-full", className].filter((element) => element).join(" ");

  return (
    <div className={entireClassName} {...rest}>
      <div className="bg-eku-maroon w-1/5 h-3" />
      <div className="bg-goldenrod-yellow w-1/5 h-3" />
      <div className="bg-autumn-orange w-1/5 h-3" />
      <div className="bg-kentucky-bluegrass w-1/5 h-3" />
      <div className="bg-boone-bronze w-1/5 h-3" />
    </div>
  );
};
