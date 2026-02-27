import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./Screens/Home";
import Counter from "./Screens/counter";
import About from "./Screens/About";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="counter" element={<Counter />} />
        <Route path="about" element={<About />} />
      </Route>
    </Routes>
  );
}

export default App;