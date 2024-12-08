import { defaultProps } from "./defaultProps";

export const Dashboard = ({
  className = defaultProps.className,
  children = defaultProps.children,
  renderer = defaultProps.renderer,
  toolbar = defaultProps.toolbar,
  heading = defaultProps.heading,
  vstack = defaultProps.vstack,
  gap = defaultProps.gap,
  as = defaultProps.as,
  ...rest
}) => {
  const As = as;

  const entireClassName = [vstack ? "vstack" : "", `gap-${gap}`, className].filter((element) => element).join(" ");

  const stack = renderer({ children, toolbar, heading });

  return (
    <As className={entireClassName} {...rest}>
      {stack}
    </As>
  );
};
