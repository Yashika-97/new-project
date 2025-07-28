import axios from "axios";
import { useState } from "react"
import '../style/Delete.css';

export function Delete(){
    const[id,setId]=useState("");
    
    async function deleteData(e)
    {
        e.preventDefault();
        try
        {
const response = await axios.delete(`https://new-project-fh3u.onrender.com/api/employees/${id}`);
alert(response.data.message);
        }
        catch(err)
        {
            alert("Record Not FOund : " + err);

        }
    };
    return(
        <div className="dlt">
            <h3 className="h3">Delete Record </h3>
            <hr/>
            <form onSubmit={deleteData}>
            <input type="text" placeholder="💳Enter Id" value={id} onChange={e => setId(e.target.value)} required/>
            <br/><br/>
            <button className="btn" type="submit">Remove Data</button>
            </form>
        </div>
    )
}
