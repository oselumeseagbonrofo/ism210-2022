import React from "react";
import HelloWorld from "./components/HelloWorld";
import HelloWorld2 from "./components/HelloWorld2";
import HelloWorld3 from "./components/HelloWorld3";
import HelloWorld4 from "./components/HelloWorld4";
import HelloWorld5 from "./components/HelloWorld5";
import HelloWorld5_2 from "./components/HelloWorld5_2";
import HelloWorld6 from "./components/helloworld6/HelloWorld6";
import HelloWorld7 from "./components/helloworld7/HelloWorld7";
import HelloWorld8 from "./components/HelloWorld8";

export const App: React.FC = () => {
    return (
        <>
            <div className="bg-red-100 h-48 flex justify-center items-center">
                <HelloWorld />
            </div>
            <div className="bg-blue-100 h-48 flex justify-center items-center">
                <HelloWorld2 name="Oselumese" other="Agbonrofo" />
            </div>
            <div className="bg-yellow-100 h-56 flex justify-center items-center">
                <div className="bg-green-100 h-full w-full flex p-6">
                    <HelloWorld3 name="Ehizode" />
                </div>
                <div className="bg-white-100 h-full w-full p-6">
                    <HelloWorld4 name="Aluya" />
                </div>
            </div>
            <div className="bg-emerald-500 h-48 flex justify-center items-center">
                    <HelloWorld5 name="Iyangbe"/>
            </div>
            <div className="bg-white h-48 flex justify-center items-center">
                    <HelloWorld5_2 name="Idemudia"/>
            </div>
            <div className="h-screen flex">    
            <div className="bg-teal-300 flex h-full w-full">
                <HelloWorld6 /> 
            </div>
            <div className="bg-sky-400 flex h-full w-full">
                <HelloWorld7 /> 
            </div>
            </div>
            <div className="bg-slate-300 flex justify-center align-items">
                <HelloWorld8 /> 
            </div>
        </>
    );
};

export default App;
