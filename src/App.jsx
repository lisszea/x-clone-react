import { Route, BrowserRouter, Routes } from "react-router-dom";
import "./App.css";
import TabbedTemplate from "./views/TabbedTemplate";
import Login from "./views/Login";
import Register from './views/Register';
import PrivateRoute from "./components/PrivateRoute";
import MainApp from "./views/MainApp";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<TabbedTemplate />} exact></Route>       
        </Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/PageUser" element={<MainApp />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

