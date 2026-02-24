import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Homepage";
import Login from "./login";
import Register from "./Register";

function App() {
  return (
    <BrowserRouter basename="/Bike-Booking">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;