import React, { useState } from "react";
import { addCustomer as addCustomerAction } from "./slices/customerSlice";
import { useDispatch } from "react-redux";

export default function CustomerAdd() {
    const [input, setInput] = useState("");
    const dispatch = useDispatch();
    function addCustomer() {
        if (input) {
            dispatch(addCustomerAction(input))

            setInput("");
        }
    }

    return <>
        <div>
            <h3>Add New Customer</h3>
            <input type="text" value={input} onChange={(e) => setInput(e.target.value) } />
            <button onClick={addCustomer}>Add</button>
        </div>
       
    </>
}