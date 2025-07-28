import axios from "axios";
import { useState } from "react"
import '../style/Find.css';

export function Findid(){
    const[id,setId]=useState("");
    const[employee,setEmployee] =useState(null);

    async function getData(e)
    {
        //e.preventDefault();
        try
        {
const response = await axios.get(`https://new-project-fh3u.onrender.com/api/employees/${id}`);
setEmployee(response.data);
        }
        catch(err)
        {
            setEmployee(null);
            alert("Employee Not Found : " + err);

        }
    };
    return(
        <div className="div1">
            <h3 color="h3">Find Record By ID</h3>
            <hr/>
            
            <input type="text" placeholder="💳Enter Id" value={id} onChange={e => setId ( e.target.value)} required/>
            <br/><br/>
            <button className="fbtn" onClick={getData}>Find Data</button>
            <br/>
                { employee && (
                <div className="div2">
                    <h4 className="h4">Employee Details</h4>
                    <hr/>
                    <p className="p">Emp No is : {employee.empNo}</p>
                    <p className="p">Emp Name is : {employee.empName}</p>
                    <p className="p">Emp Sal is : {employee.empSal}</p>
            </div>)}
        </div>
    )
}
