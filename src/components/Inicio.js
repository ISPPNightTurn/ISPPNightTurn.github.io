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

            <a style={
                                {
                                    backgroundColor: 'purple', 
                                    textDecoration: 'none',
                                    border: 'none',
                                    padding: '15px 32px', 
                                    borderRadius: '12px', 
                                    fontSize: 20, 
                                    fontWeight: 'bold', 
                                    width: '200px', 
                                    display: 'flex', 
                                    margin: 'auto', 
                                    justifyContent: 'center', 
                                    alignItems: 'center', 
                                    color: 'white', 
                                    fontFamily: 'Montserrat',
                                    textAlign: 'center'
                                }
                            } href="https://clubby-sprint1.herokuapp.com/clubby/">¡Pruébalo aquí!</a> 
        </div>
    )
}

export default Inicio