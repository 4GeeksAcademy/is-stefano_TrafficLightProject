import React, { useState } from "react"
import '/workspaces/is-stefano_TrafficLightProject/src/styles/index.css';


export const TrafficLight = () => {

    const [color, setColor] = useState('hola')

    return (
        <div className="container m-auto mt-5 p-3 col-2 rounded-3 bg-black">
            <div className="row d-flex flex-column my-5">
                <div className={`light col-1 m-auto btn btn-danger btn-lg rounded-5 ${color == 'rojo' ? 'glow-red' : ''}`}
                    onClick={() => setColor('rojo')}>
                </div>
                <div className={`light col-1 m-auto mt-2 btn btn-warning btn-lg rounded-5 ${color == 'amarillo' ? 'glow-yellow' : ''}`}
                    onClick={() => setColor('amarillo')}>
                </div>
                <div className={`light col-1 m-auto mt-2 btn btn-success btn-lg rounded-5 ${color == 'verde' ? 'glow-green' : ''}`}
                    onClick={() => setColor('verde')}>
                </div>
            </div>
        </div>
    )
}
















