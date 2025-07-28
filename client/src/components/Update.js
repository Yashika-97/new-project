import axios from "axios";
import { useState } from "react"
import '../style/Update.css';
export function Update(){

    const[id, setId]     = useState("");
    const[empNo, setNo]     = useState("");
    const[empName, setName] = useState("");
    const[empSal, setSal]   = useState("");
    
    async function updateHandler(e)
    {
        e.preventDefault();
        try
        {
const response = await axios.put(`http://localhost:3001/api/employees/${id}`, { empNo,empName,empSal});
            alert('Employee Update');
        }
        catch(err)
        {
            alert(err);
        }
    }

    return(
        <div className="form">
            <h2 className="h2">Update existing Record</h2>
            <hr/>
            <form onSubmit={updateHandler}>
                <input type="text" placeholder="💳 Enter Id"   value={id}      onChange={e => setId(e.target.value)}   required/><br/><br/>
                <input type="text" placeholder="#⃣️Enter No"   value={empNo}   onChange={e => setNo(e.target.value)}   required/><br/><br/>
                <input type="text" placeholder=" 🙋‍♂️Enter Name" value={empName} onChange={e => setName(e.target.value)} required/><br/><br/>
                <input type="text" placeholder="💸Enter Sal"  value={empSal}  onChange={e => setSal(e.target.value)}  required/><br/><br/>
                <button className="btn" type="submit">Update Record</button>

            </form>
        </div>
    )
}