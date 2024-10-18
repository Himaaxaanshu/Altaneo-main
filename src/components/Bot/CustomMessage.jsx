import React from "react"
const CustomMessage = ({ message }) => {    
    return (<>
        <div style={{ backgroundColor: "#e0f7fa",}} className="mr-5 mb-2 p-2">
            <p className="text-sm">{message}</p>
        </div>
    </>
    )
}
export default CustomMessage