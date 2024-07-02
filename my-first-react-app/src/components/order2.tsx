import React from "react";

type Props = {
    firstName: string;
    Age?: number;
    sex: string;
}

const order:React.FC<Props> = ({firstName, Age,sex})=>{
    return(
        <>
            <p>My first name is {firstName}. Age is {Age}. Sex is {sex} </p>
        </>
    )
}

export default order;