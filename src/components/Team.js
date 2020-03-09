import React from 'react'
import Contact from './Contact'
import Media from 'react-media'
function Team(){
    return(
        <Media query="(max-width: 768px)">
                {matches => 
                    matches ? (
                        <div>
                            <h1>¿Quienes somos?</h1>

                            <div>
                                <Contact name='Raimundo Flores' imgUrl='https://i.imgur.com/VYgalRZ.jpg' job='Project Manager / Front End' />
                                <Contact name='Pablo Palma' imgUrl='https://i.imgur.com/rdf7qAr.jpg' job='Ministro de Documentación y QA' />
                                <Contact name='Rafael Giráldez' imgUrl='https://i.imgur.com/hHPVYBT.png' job='Documentación / QA' />
                                <Contact name='José Minuesa' imgUrl='https://i.imgur.com/o0pyV0I.png' job='Documentación / QA' />
                                <Contact name='Javier Toro' imgUrl='https://i.imgur.com/6Zcw6e9.png' job='Ministro de Front End' />
                                <Contact name='Alfonso Rodriguez' imgUrl='https://i.imgur.com/f31edjl.png' job='Front End' />
                                <Contact name='José Sosa' imgUrl='https://i.imgur.com/clgKoye.jpg' job='Front End' />
                                <Contact name='Juan de la Cruz' imgUrl='https://i.imgur.com/4ZI0E5Z.jpg' job='Front End' />
                                <Contact name='Miguel Bermudo' imgUrl='https://i.imgur.com/0gAHji6.png' job='Ministro de Back End' />
                                <Contact name='Yassin Lalj' imgUrl='https://i.imgur.com/Z4vnqkj.png' job='Back End' />
                                <Contact name='Javier García' imgUrl='https://i.imgur.com/exH71MT.png' job='Back End' />
                                <Contact name='Victor Rosado' imgUrl='https://i.imgur.com/qZf6ZMo.png' job='Back End' />
                                <Contact name='Jose Luis Caro' imgUrl='https://i.imgur.com/Oj8JEjb.png' job='Back End' />
                                <Contact name='Manuel Recio' imgUrl='https://i.imgur.com/OI6sCQR.png' job='Back End' />
                            </div>
                        </div>    

                    ) : (
                        <div>
                            <h1 style={{display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white', fontFamily: 'Montserrat'}}>¿Quienes somos?</h1>

                            <div>
                                <Contact name='Raimundo Flores' imgUrl='https://i.imgur.com/VYgalRZ.jpg' job='Project Manager / Front End' />
                                <Contact name='Pablo Palma' imgUrl='https://i.imgur.com/rdf7qAr.jpg' job='Ministro de Documentación y QA' />
                                <Contact name='Rafael Giráldez' imgUrl='https://i.imgur.com/hHPVYBT.png' job='Documentación / QA' />
                                <Contact name='José Minuesa' imgUrl='https://i.imgur.com/o0pyV0I.png' job='Documentación / QA' />
                                <Contact name='Javier Toro' imgUrl='https://i.imgur.com/6Zcw6e9.png' job='Ministro de Front End' />
                                <Contact name='Alfonso Rodriguez' imgUrl='https://i.imgur.com/f31edjl.png' job='Front End' />
                                <Contact name='José Sosa' imgUrl='https://i.imgur.com/clgKoye.jpg' job='Front End' />
                                <Contact name='Juan de la Cruz' imgUrl='https://i.imgur.com/4ZI0E5Z.jpg' job='Front End' />
                                <Contact name='Miguel Bermudo' imgUrl='https://i.imgur.com/0gAHji6.png' job='Ministro de Back End' />
                                <Contact name='Yassin Lalj' imgUrl='https://i.imgur.com/Z4vnqkj.png' job='Back End' />
                                <Contact name='Javier García' imgUrl='https://i.imgur.com/exH71MT.png' job='Back End' />
                                <Contact name='Victor Rosado' imgUrl='https://i.imgur.com/qZf6ZMo.png' job='Back End' />
                                <Contact name='Jose Luis Caro' imgUrl='https://i.imgur.com/Oj8JEjb.png' job='Back End' />
                                <Contact name='Manuel Recio' imgUrl='https://i.imgur.com/OI6sCQR.png' job='Back End' />
                            </div>
                        </div> 
                    )
                }
        </Media>
    )
}
export default Team