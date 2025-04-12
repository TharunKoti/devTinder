import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Profile from "./Profile";

function App() {

  return (
    <>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
