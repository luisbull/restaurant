import react from "react";

export default function FnHello(props) {
    console.log(props);
    const { userInfo, saludarFn} = props;
    console.log(userInfo);
    const { name="Anonimous"} = userInfo; // Anonimous as default
    
    return (
        <div>
            <button onClick={() => saludarFn(name)}>Hello</button>
        </div>
    );
}