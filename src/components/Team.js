import React from 'react'
import Contact from './Contact'
import Media from 'react-media'
import Grid from '@material-ui/core/Grid'
function Team(){
    return(
        <Media query="(max-width: 768px)">
                {matches => 
                    matches ? (
                        <div>
                            <h1 style={{display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white', fontFamily: 'Montserrat'}}>¿Quienes somos?</h1>

                            <div>
                                <Contact name='Raimundo Flores' imgUrl='https://i.ibb.co/WK5ykcB/cosa11.png' job='Project Manager / Front End' />
                                <Contact name='Pablo Palma' imgUrl='https://i.ibb.co/VSxXdbk/cosa9.png' job='Ministro de Documentación y QA' />
                                <Contact name='Rafael Giráldez' imgUrl='https://i.ibb.co/kgkfjNh/cosa10.png' job='Documentación / QA' />
                                <Contact name='José Minuesa' imgUrl='https://i.ibb.co/S0Rgb6S/cosa3.png' job='Documentación / QA' />
                                <Contact name='Javier Toro' imgUrl='https://i.ibb.co/mNvHTLT/cosa.png' job='Ministro de Front End' />
                                <Contact name='Alfonso Rodriguez' imgUrl='https://i.ibb.co/HqhHx3Q/cosa14.png' job='Front End' />
                                <Contact name='José Sosa' imgUrl='https://i.ibb.co/cFvPrv8/cosa4.png' job='Front End' />
                                <Contact name='Juan de la Cruz' imgUrl='https://i.ibb.co/q7rTq7J/cosa6.png' job='Front End' />
                                <Contact name='Miguel Bermudo' imgUrl='https://i.ibb.co/mcF29HT/cosa8.png' job='Ministro de Back End' />
                                <Contact name='Yassin Lalj' imgUrl='https://i.ibb.co/Vx2NQWC/cosa13.png' job='Back End' />
                                <Contact name='Javier García' imgUrl='https://i.ibb.co/XZLFqzW/cosa2.png' job='Back End' />
                                <Contact name='Victor Rosado' imgUrl='https://i.ibb.co/Mhb4LKM/cosa12.png' job='Back End' />
                                <Contact name='Jose Luis Caro' imgUrl='https://i.ibb.co/K6FZvv7/cosa5.png' job='Back End' />
                                <Contact name='Manuel Recio' imgUrl='https://i.ibb.co/mydttzK/cosa7.png' job='Back End' />
                            </div>

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

                    ) : (
                        <div style={{marginBottom:'100px'}}>
                            <h1 style={{display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white', fontFamily: 'Montserrat'}}>¿Quienes somos?</h1>
                            <Grid container spacing={3} direction="row" justify="center" alignItems="center">
                                <Contact name='Raimundo Flores' imgUrl='https://i.ibb.co/WK5ykcB/cosa11.png' job='Project Manager / Front End' />
                                <Contact name='Pablo Palma' imgUrl='https://i.ibb.co/VSxXdbk/cosa9.png' job='Ministro de Documentación y QA' />
                                <Contact name='Rafael Giráldez' imgUrl='https://i.ibb.co/kgkfjNh/cosa10.png' job='Documentación / QA' />
                                <Contact name='José Minuesa' imgUrl='https://i.ibb.co/S0Rgb6S/cosa3.png' job='Documentación / QA' />
                                <Contact name='Javier Toro' imgUrl='https://i.ibb.co/mNvHTLT/cosa.png' job='Ministro de Front End' />
                                <Contact name='Alfonso Rodriguez' imgUrl='https://i.ibb.co/HqhHx3Q/cosa14.png' job='Front End' />
                                <Contact name='José Sosa' imgUrl='https://i.ibb.co/cFvPrv8/cosa4.png' job='Front End' />
                            </Grid>
                            <Grid container direction='row' justify="center" alignItems="center">
                                <Contact name='Juan de la Cruz' imgUrl='https://i.ibb.co/q7rTq7J/cosa6.png' job='Front End' />
                                <Contact name='Miguel Bermudo' imgUrl='https://i.ibb.co/mcF29HT/cosa8.png' job='Ministro de Back End' />
                                <Contact name='Yassin Lalj' imgUrl='https://i.ibb.co/Vx2NQWC/cosa13.png' job='Back End' />
                                <Contact name='Javier García' imgUrl='https://i.ibb.co/XZLFqzW/cosa2.png' job='Back End' />
                                <Contact name='Victor Rosado' imgUrl='https://i.ibb.co/Mhb4LKM/cosa12.png' job='Back End' />
                                <Contact name='Jose Luis Caro' imgUrl='https://i.ibb.co/K6FZvv7/cosa5.png' job='Back End' />
                                <Contact name='Manuel Recio' imgUrl='https://i.ibb.co/mydttzK/cosa7.png' job='Back End' />
                            </Grid>

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
        </Media>
    )
}
export default Team