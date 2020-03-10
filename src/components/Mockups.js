import React from 'react'
import Media from 'react-media'

function Mockups(){
    const substyle = {
        display: 'inline-block',
        width: '60%',
        height: 'auto',
        fontSize: 30,
        weight: 'bold',
        borderBottom: "1px solid black",
        marginBottom: "5%",
        marginTop: "5%"
    }

    const substyleDesktop = {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '70%',
        height: 'auto',
        fontSize: 40,
        weight: 'bold',
        borderBottom: "1px solid white",
        marginBottom: "5%",
        marginTop: "5%"
    }

    const style = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: 'white',
        fontFamily: 'Montserrat',
        textAlign: 'center'
    }

    

    return (    
            <Media query="(max-width: 768px)">
                {matches => 
                    matches ? (
                        <div style={style}>
                        <div style={substyle}>
                            <img style={{maxWidth: '60%', height: 'auto'}} src={require("./images/Mockup4.png")} alt='Eventos disponibles' />
                            <h4>Revisa los eventos disponibles a tu alrededor</h4>
                        </div>
                        <div style={substyle}>
                            <img  style={{maxWidth: '60%', height: 'auto'}} src={require("./images/Mockup6.png")} alt='Comprar entradas' />
                            <h4>Compra tus entradas desde la misma aplicación</h4>
                        </div>
                        <div style={substyle}>
                            <img  style={{maxWidth: '60%', height: 'auto'}} src={require("./images/Mockup7.png")} alt='Comprar consumiciones' />
                            <h4>¿No se enteran de lo que pides? Compra tus consumiciones desde la app</h4>
                        </div>
                        </div>
                    ) : (
                        <div style={style}>
                        <div style={substyleDesktop}>
                            <img style={{maxWidth: '30%', height: 'auto'}} src={require("./images/Mockup4.png")} alt='Eventos disponibles' />
                            <h4>Revisa los eventos disponibles a tu alrededor</h4>
                        </div>
                        <div style={substyleDesktop}>
                            <img  style={{maxWidth: '30%', height: 'auto'}} src={require("./images/Mockup6.png")} alt='Comprar entradas' />
                            <h4>Compra tus entradas desde la misma aplicación</h4>
                        </div>
                        <div style={substyleDesktop}>
                            <img  style={{maxWidth: '30%', height: 'auto'}} src={require("./images/Mockup7.png")} alt='Comprar consumiciones' />
                            <h4>¿No se enteran de lo que pides? Compra tus consumiciones desde la app</h4>
                        </div>
                        </div>
                    )}
                    </Media>
            
        
    )
}

export default Mockups