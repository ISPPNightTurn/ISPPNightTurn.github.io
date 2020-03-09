import React from 'react'

function Contact(props){
    const style = {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center', 
        color: 'white',
        fontFamily: 'Montserrat'
    }
    return(
        <div style={style} className='contact-card'>
            <img style={{maxWidth: '20%', height: 'auto', borderRadius: '50%'}} src={props.imgUrl} alt='Imagen de perfil' />
            <h3 style={{fontSize: 25, borderLeft: '50px solid transparent'}}>{props.name}</h3>
            <h4 style={{borderLeft: '50px solid transparent'}}>{props.job}</h4>
        </div>
    )
}

export default Contact