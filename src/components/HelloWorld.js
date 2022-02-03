import react from "react";

export default function HelloWorld(props) {
    return (
        <div>
            <p>Hello {props.name}. You have {props.age}</p>
        </div>
    )
}