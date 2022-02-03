import react from "react";

export default function AdiosMundo(props) {
    console.log(props);
    return (
        <div>
            <p>Adios {props.name} gracias por venir a {props.place}</p>
        </div>
    );
}