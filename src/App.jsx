import Remote from "./Remote";

export default function App() {
  return (
    <Remote heading={"Heading"} toolbar={false}>
      <div style={{ height: 500 }} className="bg-dark"></div>
      <div style={{ height: 500 }} className="bg-dark"></div>
      <div style={{ height: 500 }} className="bg-dark"></div>
    </Remote>
  );
}
