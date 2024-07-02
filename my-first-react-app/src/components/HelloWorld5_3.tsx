import React, {useState, useEffect} from "react";

type Props = {
    name: string,
    count?: number
};

const HelloWorld5: React.FC<Props> = ({name="Osereme"}) =>{
    const [Name, setName] = useState(name);
    const [count, setCount] = useState(0);

    useEffect(()=> {
        document.title = `Your name is ${Name}`;
        alert(`Your name is ${Name}`);
    }, [Name]);

    useEffect(() =>{
        alert(`You have clicked ${count} times`)
    }, [count]);

    const changeName = (event:any) =>{
        setName(event.target.value);
    };

    return(
        <>
            <p>Enter name {Name}</p>
            <input type="text"/>
            <p>
                <button className="bg-lime-300 p-2 m-4 justify-center flex" onClick={changeName}>Submit name</button>
            </p>
            <p>Count: {count}</p>
            <p>
                <button onClick={()=> setCount(count + 1)}>Click</button>
            </p>
        </>
    )
};

export default HelloWorld5;