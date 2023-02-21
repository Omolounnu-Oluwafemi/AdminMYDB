import React from "react";
import Admin from "./pages/admin";
import Users from "./pages/users";
import AdminLogin from "./pages/adminLogin";
import Messages from "./pages/messages";
import ProtectedRoute from "./pages/protectedRoute";
import { BrowserRouter as Router, Route, Routes
} from "react-router-dom"; 



function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route element={<ProtectedRoute />}>
            <Route element={<Admin/>} path="/home" exact/>
            <Route element={<Users/>} path="/users"/>
            <Route element={<Messages/>} path="/messages"/>
          </Route>
          <Route exact element={<AdminLogin/>} path="/"/>
        </Routes>
      </Router>
      </div>
  );
}

export default App;
