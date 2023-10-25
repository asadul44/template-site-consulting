import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import MyRoute from "./components/MyRoute";
import "react-multi-carousel/lib/styles.css";
import "tailwindcss/tailwind.css";
import "mapbox-gl/dist/mapbox-gl.css";
import "aos/dist/aos.css";

function App() {
  return (
    <div>
      <Router>
        <MyRoute />
      </Router>
    </div>
  );
}

export default App;
