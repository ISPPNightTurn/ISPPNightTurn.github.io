import React from 'react'

function Inicio(){
    const styleDiv = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: 'white',
        fontFamily: 'Montserrat',
        textAlign: 'center'
    }
    const styleHTres = {
        fontSize: 20
    }

    const styleHDos = {
        marginTop: '15%',
        marginBottom: '15%',
        fontSize: 40
    }

    return (
        <div style={styleDiv}>
            <h3 style={styleHTres}>
                ¿Quieres ir de fiesta, pero no sabes donde?        
            </h3>
            <h3 style={styleHTres}>
                ¿Quieres comprar entradas, pero no sabes a quién?
            </h3>
            <h2 style={styleHDos}>
                ¡Prueba Clubby!
            </h2>
        </div>
    )
}

export default Inicio