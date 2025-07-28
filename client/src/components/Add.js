import { useState } from 'react'; 
import'../style/Add.css';
import axios from "axios"; 
export function Add(){ 
 
    const [empNo,setEmpNo]=useState(" "); 
    const [empName,setEmpName]=useState(" "); 
    const[empSal,setEmpSal] = useState(" "); 
 
    async function addHandler(e) 
    { 
    
        e.preventDefault(); 
        try{ 
            const response=await axios.post('https://new-project-fh3u.onrender.com/api/employees', {empNo,empName,empSal}); 
                alert('Employee Add'); 
        } 
        catch(err){ 
            alert(err); 
        } 
     } 
    return( 
        <div id="div1"> 
            <form> 
                <h1 className='h1'> Add new Employee</h1> 
                 <input  type="number" placeholder="#⃣️enter No" className="inputs" onChange={(e)=>setEmpNo(e.target.value)}></input> <br/><br/> 
                <input  type="text" placeholder=" 🙋‍♂️ enter Name" className="inputs" onChange={(e)=>setEmpName(e.target.value)}></input><br/><br/> 
                <input  type="number" placeholder="💸enter salary" className="inputs" onChange={(e)=>setEmpSal(e.target.value)}></input><br/><br/> 
                <input  type="submit" value="Add" id="login" onClick={addHandler}></input><br/><br/> 
            </form> 
        </div> 
    ) 
 
}
