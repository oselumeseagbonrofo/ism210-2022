import React, { MutableRefObject, useEffect, useRef, useState } from "react";
import { UserFetched } from "./typedefs";
import ShowUser from "./ShowUser";

type Props = {
    name?: string,
}



const HelloWorld7: React.FC<Props> = ({ name = "Osereme" }) => {
    const [userFetched, setUserFetched] = useState<UserFetched>({ user: null, error: null })

    const userIdInput: MutableRefObject<HTMLInputElement | null> = useRef(null);

    const fetchData = async () => {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userIdInput.current!.value}`);
            if (response.status < 200 || response.status > 299) {
                setUserFetched({ user: null, error: `Response status = ${response.status}` });
                return;
            }
            const data = await response.json();
            setUserFetched({ user: data, error: null });
        }
        catch (error: any) {
            setUserFetched({ user: null, error: error.message });
        }
    }

    useEffect(() => {
        userIdInput.current!.focus();
    }, []);

    return (
        <div className='flex flex-col space-y-3'>
            <p>Hello {name}. This is HelloWorld 7. It illustrates how to fetch data on button click and focus on a field.</p>
            <p>
                <input ref={userIdInput} type="text" placeholder="UserId (1 to 10) here" defaultValue={1} />
            </p>
            <p>
                <button className='bg-red-500 hover:bg-blue-700 text-white py-2 px-4 rounded' onClick={fetchData}>
                    Fetch User</button>
            </p>
            <p>
                {userIdInput.current && userIdInput.current.value && <ShowUser
                    userFetched={userFetched} />}
            </p>
        </div>
    )
}
export default HelloWorld7;