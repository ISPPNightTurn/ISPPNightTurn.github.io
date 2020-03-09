import React from 'react'

function Contact(props){
    return(
        <div className='contact-card'>
            <img style={{maxWidth: '20%', height: 'auto'}} src={props.imgUrl} alt='Imagen de perfil' />
            <h3>{props.name}</h3>
            <p>{props.job}</p>
        </div>
    )
}

export default Contact