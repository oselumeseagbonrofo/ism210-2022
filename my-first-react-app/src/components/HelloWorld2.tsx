import React from "react";

type Props = {
    name: string;
    other?: string;
}

const HelloWorld2: React.FC<Props> = ({name="Ehizode", other}) =>{
    return(
        <>
            <p>Hello {name} {other}. React Function component with Properties. HelloWorld2</p>
        </>
    )
}

export default HelloWorld2;