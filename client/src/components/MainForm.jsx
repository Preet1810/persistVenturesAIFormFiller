import React from 'react'
import { useDispatch } from "react-redux";
import { setLogout } from "../state/index";
const MainForm=() => {
    const dispatch=useDispatch();
    return (
        <div>
            <button onClick={() => dispatch(setLogout())}>Logout</button>
        </div>
    )
}

export default MainForm