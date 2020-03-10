import React from 'react'

function Clubby(){
    const styles = {
        backgroundColor: "#FA5151",
        marginBottom: "20%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Montserrat",
        color: "white"
    }

    return(
        <div style={styles}>
            <video id="background-video" loop autoPlay>
                <source src={require("./party.webm")} type="video/mp4" />
                <source src={require("./party.webm")} type="video/ogg" />
            </video>
            <p style={{fontWeight: "bolder"}}>Imágenes cogidas de <a style={
                {
                    color: 'white'
                }
            } href="https://www.youtube.com/watch?v=8Xs6DZG0ouM">aquí</a> y <a style={
                {
                    color: 'white',

                }
            } href="https://www.youtube.com/watch?v=sMdGzAlQPbU">aquí</a>.</p>
        </div>
    )
}

//<img style={{width: "60%", height: "auto"}} src='https://i.imgur.com/mVcN4QK.png' alt='Clubby' />
            

export default Clubby