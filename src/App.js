import { Routes, Route } from "react-router-dom";

//components
import MyNavBar  from "./components/Navbar";

//Pages
import RegisterPage from "./pages/Register";
 import LoginPage from"./pages/Login";

//css
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
 
 import ListingPage from "./pages/List";

function App() {
  return (
  
     <div>
       <MyNavBar/>
         <Routes>
           <Route path="/" element={<h1> Home</h1>}></Route>
           <Route path="/login" element={< LoginPage/>}></Route>
           <Route path="/register" element={<RegisterPage />}> </Route>
           <Route path="/book/list" element={<ListingPage />}></Route>
         
         </Routes>
     </div>
  
  );
}

export default App;
