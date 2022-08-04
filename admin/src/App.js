// import logo from './logo.svg';
import './App.css';
import Login from "./components/Login";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <h1>hello</h1>
      <BrowserRouter>
      <Routes>
      
       
          <Route path="/login" element={<Login />} />
               
        
      </Routes>
    </BrowserRouter>
    </div>
  );
}


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);
export default App;
