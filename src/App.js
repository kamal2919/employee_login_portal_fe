import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginRegWrapper from "./LoginRegWrapper";
import RegisterComponent from './RegisterComponent';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginRegWrapper/>}/>
          <Route path="/login" element={<LoginRegWrapper/>}/>
          <Route path="/register" element={<RegisterComponent/>} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
