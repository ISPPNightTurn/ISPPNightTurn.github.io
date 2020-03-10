import React from 'react'
import Media from 'react-media'
import Grid from '@material-ui/core/Grid'
function Contact(props){
    const styleDesktop = {
        color: 'white',
        fontFamily: 'Montserrat'
    }

    const style = {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center', 
        color: 'white',
        fontFamily: 'Montserrat'
    }
    return(
        <Media query="(max-width: 768px)">
            {matches =>
                matches ? (
                    <div style={style}>
                        <img style={{maxWidth: '20%', height: 'auto', borderRadius: '45%', borderTop: '50px solid transparent'}} src={props.imgUrl} alt='Imagen de perfil' />
                        <h3 style={{fontSize: 25, borderLeft: '50px solid transparent'}}>{props.name}</h3>
                        <h4 style={{borderLeft: '50px solid transparent'}}>{props.job}</h4>
                    </div>
                ) : (
                    <Grid item direction='column' justify="center" alignItems="center" xs={1} >
                        <div style={styleDesktop}>
                            <img style={{maxWidth: '90%', height: 'auto', borderRadius: '45%', borderTop: '50px solid transparent'}} src={props.imgUrl} alt='Imagen de perfil' />
                            <h3 style={{fontSize: 20}}>{props.name}</h3>
                            <h4 style={{fontSize: 13}}>{props.job}</h4>
                        </div>
                    </Grid>
                )
            }
        </Media>
        
            
    )
}

export default Contact