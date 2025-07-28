import axios from "axios";
import { useState } from "react";
import "../style/Find.css";

 function Findall(){
const[employees,setEmployees] = useState([]);

    async function findallHandler(e)
    {
        e.preventDefault();
        try{
            const response = await axios.get('https://new-project-fh3u.onrender.com/api/employees');
            setEmployees( response.data);
        }
        catch(err){
            alert("Error fetching employees");
            console.error(err);
        }
    }
    
    return(
        <div className="find">
            <h2 className="recrd">Employee Records</h2>
            <form onSubmit={findallHandler}>
            <button className="fbtn" type="submit">Get All Records</button>
            </form>
            <div>
                <table className="table">
                    <thead>
                        <tr>
                        <th className="th">Id</th>
                        <th className="th">No</th>
                        <th className="th">Name</th>
                        <th className="th">Sal</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            employees.length > 0 ?(
                                employees.map(emp =>(
                                    <tr>
                                        <td>{emp._id}</td>
                                        <td>{emp.empNo}</td>
                                        <td>{emp.empName}</td>
                                        <td>{emp.empSal}</td>
                                    </tr>
                                ))
                            ): <tr><td colspan={'4'}>No Record</td></tr>
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
};

export default Findall;

