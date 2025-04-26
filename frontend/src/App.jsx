import Home from "./components/Home/Home";
import { Navbar, Footer } from "./components/Navbar/Navbar";
// import CreatePage from "./components/CreatePage";

function App() {
  return (
    <div className="font-sans">
      <Navbar/>
      <Home />
      {/* <CreatePage /> */}
      <Footer />
    </div>
  );
}

export default App;
