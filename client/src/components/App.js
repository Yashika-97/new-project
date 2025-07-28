import { NavLink,Route,Routes } from "react-router-dom";
import { Add } from "./Add";
import Findall from "./Findall" 
import { Delete } from "./Delete";
import { Update } from "./Update"
import { Findid } from "./Findid";
import "../style/App.css";


 function App(){
    return(
        <div className="main">
          <header className="header">
            <h1>Employee screen</h1>
          </header>
          <nav className="nav">
          <NavLink to={"/"}>📝Add </NavLink>
          <NavLink to={"/Findid"}>❔Find by Id</NavLink>
          <NavLink to={"/Update"}>🔄Update</NavLink>
          <NavLink to={"/Delete"}>✂️Delete </NavLink>
          <NavLink to={"/Findall"}>🔎Find All </NavLink>
         </nav>
        

        <Routes>
          <Route path="/" element={<Add/>}/>
          <Route path="/Findid" element={<Findid/>}/>
          <Route path="/Update" element={<Update/>}/>
          <Route path="/Delete" element={<Delete/>}/>
          <Route path="/Findall" element={<Findall/>}/>
        </Routes>

        <footer className="footer">
          <p>@copyright.employee.Record</p>
        </footer>
        </div>
    )
}
export default App;
