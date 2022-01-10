import Textfield from "@mui/material/TextField";
import { useState } from "react";
import useMergeState from "../hook/useMergeState";
const Form = () => {
    
    const {initState,setInitState,handleChange} = useMergeState();
   
    return(
        <><br /><br />
          <label>userName : </label>
          <Textfield  placeholder="UserName" size="small" value={initState.username} name="username" onChange={handleChange}  /><br /><br />
          <label>Email   :   </label>
          <Textfield placeholder="Email" size="small" value={initState.email} name="email" onChange={handleChange} /><br /><br />
          <label>Password : </label>
          <Textfield  placeholder="Password" type="password"  size="small" value={initState.password} name="password" onChange={handleChange}/>
        
        </>
    )
}
export {Form};