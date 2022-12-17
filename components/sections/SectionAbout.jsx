import Link from 'next/link'
import { Image, Grid, Spacer } from '@nextui-org/react'
import { CardAbout, Button, GalleryAbout } from '../'
import { about, skills, email, spotify } from '../../data'
import styles from './SectionAbout.module.css'

export const SectionAbout = () => {
  return (
    <section className={styles.sectionAbout}>
        <Grid.Container gap={2}>
            <Grid md={8} sm={12} >
                <div className={styles.aboutMe}> 
                    <h3 className="medium-heading">About Me</h3>
                    <h6 className="subtitle">Esta es mi historia</h6>
                    <p>Vengo del <span className="white">sector sanitario,</span> pero siempre me ha atraído el diseño y el mundo digital. Cuando monté mi propia clínica, quise poder crear su web corporativa. Desde ese momento no pude parar. Todos los conocimientos nuevos que adquiría sobre desarrollo web hacían aumentar mi motivación y curiosidad por seguir dando pasos en ese camino.</p>
                    <p>Pierdo la noción del tiempo cuando <em className="enfasis"> diseño, investigo, analizo y programo una idea.</em> Podría decir que tengo un <em className="white">lado creativo y un lado lógico</em> que trabajan en sintonía.</p>
                    <p className={styles.list}>Estas son algunas de las <span className="white">tecnologías y lenguajes</span> que conozco:</p>
                    <ul className={styles.skillsList}  >
                        { skills && skills.map((skill, i) => <li key={i}>{ skill }</li>) } 
                    </ul>
                </ div>
            </Grid>

            <Grid md={4} sm={12}>
            <div className={styles.aboutMeImage}>
                <div className={styles.wrapper}>
                    <Image
                        className = {styles.img}
                        src       = "/assets/ilustracion-rocio.png"
                        width     = { 300 }
                        height    = { 300 }
                        alt       = "Ilustración de Rocío Benítez"
                    />
                </div>
            </div>
            </Grid>
        </Grid.Container>
        <Spacer y = {4} />
        <Grid.Container gap={2}>
            {
                about.map((item,index) => (
                    <Grid xs={12} sm={6} key={ index } justify="center">
                    <CardAbout
                        title = { item.title }
                        intro = { item.intro }
                        path1 = { item.path[0] }
                        path2 = { item.path[1] }
                        tools = { item.tools }
                    />
                    </Grid>
                ))
            }
        </Grid.Container>

        <Spacer y = {4} />
        
        <Grid.Container gap={4} alignItems='center' justify='center'>
            <Grid xs={0} sm={4}>
            <GalleryAbout/>
            </Grid>
            <Grid xs={12} sm={8}>
                <div className={styles.me}>
                    <h4 className="small-heading">Quién soy</h4>
                    <h6 className="subtitle">Cuando no estoy delante del ordenador</h6>
                    <p>Soy muy activa e inquieta, no podría vivir sin <em className="white">deporte</em>. Me encanta conocer lugares nuevos y probar todo tipo de <em className="white">comida</em> <em>(sobre todo si es con queso).</em></p><p>Me relaja mucho <em className="white">dibujar</em> y la <em className="white">música</em>, me quedo con aquellas canciones que me erizan la piel <em>(<span className="enfasis"><Link href={ spotify }target='_blank'>esta</Link></span> es una de mis playlist favoritas).</em></p>
                    <p>Desde 2016 me acompaña <em>&apos;Noa&apos;</em> 🐕‍🦺 , gracias a ella acabo dando más paseos por el campo. </p>
                </ div> 
            </Grid>
            <Grid xs={12} sm={0} css={{marginTop:'2em'}}>
                <GalleryAbout/>
            </Grid>
        </ Grid.Container>

        <Spacer y = {4} />

        <div className={styles.contact}>
            <div className={styles.aboutMe}>
                <h4 className = "small-heading">Contacto</h4>
                <h6 className = "subtitle">¿Hablamos?</h6>
                <div className={styles.contactText}>
                    <p>Me alegrará ver tu mensaje en mi bandeja de entrada. Puedes contactar conmigo para hacerme llegar un comentario o sugerencia. Responderé lo más rápido posible.</p>
                </div>
                <>
                    <Button
                    href = {`mailto:${email}`}
                    text = "Escríbeme"
                    />
                </>
            </ div> 
        </ div>
    </section>
  )
}
