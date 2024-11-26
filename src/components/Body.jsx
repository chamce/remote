import Fold from "./Fold";

const Body = ({ children }) => {
  console.log(window);
  return (
    <main className="container">
      <div className="my-3 p-3 p-sm-4 bg-body rounded box-shadow-2 position-relative">
        <Fold></Fold>
        {children}
      </div>
    </main>
  );
};

export default Body;
