import { BrowserRouter, Routes, Route } from "react-router-dom";
import Body from "../src/components/Body";
import Login from "../src/components/Login";
import Profile from "../src/components/Profile";
import { Provider } from "react-redux";
import Feed from "../src/components/Feed";
import Connections from "../src/components/Connections";
import appStore from "../src/utils/appStore"
import Requests from "../src/components/Requests";

function App() {
  return (
    <div>
      <Provider store={appStore}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Body />}>
            <Route path="/" element={<Feed />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/connections" element={<Connections />} />
            <Route path="/requests" element={<Requests />} />
          </Route>
        </Routes>
      </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
