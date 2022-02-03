import react from "react";

export default function UserObject(props) {
    console.log(props.userInfo);
    return (
        <div>
            <p>Hello {props.userInfo.name}. 
                Age {props.userInfo.age}.
                Favorite color {props.userInfo.color}
            </p>
        </div>
    )
}