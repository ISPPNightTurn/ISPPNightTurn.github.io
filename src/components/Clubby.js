import React from 'react'

function Clubby(){
    const styles = {
        marginTop: "15%",
        marginBottom: "15%",
        backgroundColor: "#FA5151",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
    }
    return(
        <div style={styles}>
            <img style={{width: "60%", height: "auto"}} src='https://i.imgur.com/CTEvwCV.png' alt='Clubby' />
        </div>
    )
}

export default Clubby