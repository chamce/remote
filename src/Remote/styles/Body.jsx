import { styles } from ".";

export const Body = ({ children }) => {
  return (
    <>
      <style global jsx>
        {styles}
      </style>
      {children}
    </>
  );
};
