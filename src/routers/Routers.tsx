import { Routes, Route, Navigate } from "react-router-dom";
import Favorites from "../pages/Favorites/Favorites";
import Home from "../pages/Home/Home";

const Routers = () => {
  return(
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="/" element={<Navigate to="/home" />} />{/*redirect to home*/}
    </Routes>
  )
}

export default Routers