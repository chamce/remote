import Fold from "./Fold";

const Body = ({ children }) => {
  return (
    <main className="container py-3">
      <div className="p-3 bg-body rounded box-shadow">
        {/* <Fold></Fold> */}
        {children}
      </div>
    </main>
  );
};

export default Body;
