import { Dashboard } from "./components/Dashboard";
import { Sidebar } from "./components/Sidebar";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

export const App = ({ children }) => {
  return (
    <>
      <Header></Header>
      <div className="container-fluid">
        <div className="row">
          <Sidebar></Sidebar>
          <Dashboard>{children}</Dashboard>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};
