import { Image, Grid, Spacer } from '@nextui-org/react'
import Link from 'next/link'
import styled from 'styled-components'
import { Layout, CardAbout, Button, GalleryAbout } from '../components'
import { about, skills, email, spotify } from '../data'

const StyledAboutSection = styled.div`
  max-width: 1000px;
  margin: 8em auto;
  padding: 0 2em;
  @media (max-width: 768px) {
    padding: 0 1em;
  }
`
const StyledText = styled.div`
  div {
    margin: 0 auto 2em;
    @media(max-width: 768px) {
      margin: 0 1em 2em;
    }
  }
  p.list {
    padding-top: 1em;
  }  
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    grid-gap: 0 20px;
    margin: 20px 0 0 0;
    overflow: hidden;
    li {
      font-family: var(--font-mono);
      font-size: var(--fz-sm);
      color: var(--white);
    }
  }
`
const StyledPic = styled.div`
  max-width: 300px;
  margin: auto;
  .wrapper {
    transition: var(--transition);
    display: block;
    position: relative;
    width: 100%;
    margin: auto;
    &:hover,
    &:focus {
      outline: 0;
      &:after {
        width: 270px;
        height: 270px;
        top: 26px;
        left: 12px;
      }
    }
    .img {
      position: relative;
      transition: var(--transition);
      z-index: 1;
    }
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 260px;
      height: 260px;
      border-radius: 400px;
      transition: var(--transition);
      border: 2px solid var(--primary-color);
      top: 32px;
      left: 17px;
    }
  }
`
const StyledMe = styled.div`
  display: flex;
  max-width: 1000px;
  margin: 0 auto;
  text-align: center;
  align-items: center;
  div {
    text-align: left;
  }
`
const StyledContact = styled.div`
  display: flex;
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
`
const AboutPage = () => {

  return (
    <Layout
      title    = "Sobre mi"
      content  = "Esta es la página 'Sobre mi' del portfolio de Rocío Benítez"
      keywords = "about, sobre mi"
    >
        <Grid.Container gap={2} direction = 'column' justify="center" css={{maxWidth: '1000px', m:'auto'}}>
          <StyledAboutSection>
            <Grid.Container gap={2}>
              <Grid md={8} sm={12} >
                <StyledText> 
                  <h3 className="medium-heading">About Me</h3>
                  <h6 className="subtitle">Esta es mi historia</h6>
                  <p>Vengo del <span className="white">sector sanitario,</span> pero siempre me ha atraído el diseño y el mundo digital. Cuando monté mi propia clínica, quise poder crear su web corporativa. Desde ese momento no pude parar. Todos los conocimientos nuevos que adquiría sobre desarrollo web hacían aumentar mi motivación y curiosidad por seguir dando pasos en ese camino.</p>
                  <p>Pierdo la noción del tiempo cuando <em className="enfasis"> diseño, investigo, analizo y programo una idea.</em> Podría decir que tengo un <em className="white">lado creativo y un lado lógico</em> que trabajan en sintonía.</p>
                  <p className="list">Estas son algunas de las <span className="white">tecnologías y lenguajes</span> que conozco:</p>
                  <ul className="skills-list list">
                    { skills && skills.map((skill, i) => <li key={i}>{skill}</li>) } 
                  </ul>
                </ StyledText>
              </Grid>

              <Grid md={4} sm={12}>
                <StyledPic>
                  <div className="wrapper">
                    <Image
                      className = "img"
                      src       = "/assets/ilustracion-rocio.png"
                      width     = { 300 }
                      height    = { 300 }
                      alt       = "Ilustración de Rocío Benítez"
                    />
                  </div>
                </StyledPic>
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
            
            <Grid.Container gap={4} alignItems='center' justify='center' css={{}}>
              <Grid xs={0} sm={4}>
                <GalleryAbout/>
              </Grid>
              <Grid xs={12} sm={8}>
                <StyledText>
                  <h4 className="small-heading">Quién soy</h4>
                  <h6 className="subtitle">Cuando no estoy delante del ordenador</h6>
                  <p>Soy muy activa e inquieta, no podría vivir sin <em className="white">deporte</em>. Me encanta conocer lugares nuevos y probar todo tipo de <em className="white">comida</em> <em>(sobre todo si es con queso).</em></p><p>Me relaja mucho <em className="white">dibujar</em> y la <em className="white">música</em>, me quedo con aquellas canciones que me erizan la piel <em>(<span className="enfasis"><Link href={ spotify }target='_blank'>esta</Link></span> es una de mis playlist favoritas).</em></p>
                  <p>Desde 2016 me acompaña <em>&apos;Noa&apos;</em> 🐕‍🦺 , gracias a ella acabo dando más paseos por el campo. </p>
                </ StyledText> 
              </Grid>
              <Grid xs={12} sm={0} css={{marginTop:'2em'}}>
                <GalleryAbout/>
              </Grid>
            </ Grid.Container>

            <Spacer y = {4} />

            <StyledContact>
              <StyledText>
                <h4 className="small-heading">Contacto</h4>
                <h6 className="subtitle">¿Hablamos?</h6>
                <div>
                  <p>Me alegrará ver tu mensaje en mi bandeja de entrada. Puedes contactar conmigo para hacerme llegar un comentario o sugerencia. Responderé lo más rápido posible.</p>
                </div>
                <>
                  <Button
                    href={`mailto:${email}`}
                    texto="Escríbeme"
                  />
                </>
              </ StyledText> 
            </ StyledContact>
          </ StyledAboutSection>
        </Grid.Container>
    </Layout>  
  )
}


export default AboutPage;
