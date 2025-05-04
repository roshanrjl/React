import React, { useId } from "react";

const Input =React.forwardRef( function Input(
{
    label,
    type = "text",
    className = "",
    ...Prosps

},ref
){
    const id= useId()
return(
    <div className="w-full">
        {label && (
            <label className="text-gray-700 text-sm font-bold mb-2" htmlFor={id}>
                {label}
            </label>
        )}
       <input
       type={type}
         id={id}
         className={`border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
            {...Prosps}
            ref={ref}

       /> 
    </div>
)
}
)


export default Input;