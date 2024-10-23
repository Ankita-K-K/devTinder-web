import { BrowserRouter, Routes, Route } from "react-router-dom";
import Body from "../src/components/Body";
import Login from "../src/components/Login";
import Profile from "../src/components/Profile";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Body />}>
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
