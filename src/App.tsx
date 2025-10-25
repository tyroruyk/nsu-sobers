import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Rover from "./pages/Rover";

function App() {
  return (
    <Router basename="/nsu-sobers">
      <div className="flex flex-col min-h-screen bg-black">
        <Navbar />
        <main className="flex-1 w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/rover" element={<Rover />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
