import { useState } from "react";

const useMergeState = () => {
    const [initState,setInitState] = useState( {
        username: "",
        email: "",
        password: "",
      });

      const handleChange = (e) => {
        const {name  ,value} = e.target;
        setInitState({
            ...initState,
            [name] : value
        })
    }
    
      return {initState,setInitState , handleChange}
}
export default useMergeState;