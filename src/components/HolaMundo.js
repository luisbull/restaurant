import react from "react";

export default function HolaMundo(props){
    // console.log(props);
    return (
        <div>
            <p>Hola {props.nombre} eres de {props.lugar}</p>
        </div>
    );
}

/* If we want to export another component we don't use default
   Bellow is just an example of how would it be done*/

   // export function AdiosMundo() {
//     return (
//         <div>Adios</div>
//     );
// }