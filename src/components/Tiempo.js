import React from 'react'

function Tiempo(){
    const date = new Date()
    const hours = date.getHours()
    let tiempo

    if (hours < 12) {
        tiempo = "mañanas"
    }else if (hours >= 12 && hours < 20){
        tiempo = "tardes"
    }else if (hours >= 20) {
        tiempo = "noches"
    }

    const styles = {
        color: "#FF8C00",
        backgroundColor: "#FF2D00"
    }

    return (
    <h1 style={styles}>Buenas {tiempo}</h1>
    )
}

export default Tiempo