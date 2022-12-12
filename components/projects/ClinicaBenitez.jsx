import { Grid, Image, Spacer } from '@nextui-org/react'
import { pluggins, projects } from '../../data'
import { CardItems } from '../'

export const ClinicaBenitez = () => {

    const project = projects[2]

    return (
        <>
            <h3>Introducción</h3>
            <p>El objetivo principal del projecto era crear un página web que visibilizara la imagen, los servicios y las instalaciones de &apos;Clínica Benítez&apos;. Se trata de un negocio local que pretende transmitir innovación, profesionalidad y actualización constante a la vez que cercanía y confianza.</p>
            <Spacer y={1}/>
            <blockquote>Se decidió crear la web con <b>WordPress </b>para facilitar el posterior uso y mantenimiento de la misma por parte de los clientes.</blockquote>
            <h4>Objetivos</h4>
            <ul className="list">
                <li>Visibilizar y posicionar la marca</li>
                <li>Dar a conocer sus sercicios y tratamientos</li>
                <li>Generar confianza y conectar emocionalmente con los potenciales clientes</li>
                <li>Posibilitar que los usuarios/pacientes contacten fácilmente con la clínica</li>
            </ul>

            <h3>Conceptualizando la web</h3>
            <p>Primero se elaboró un <em className='enfasis'>Moodboard</em> inicial para lasmar la idea y el concepto de la nueva web. El cliente nos facilitó la conceptualización aportando fotografías de la clínica.</p>
            <p>El centro ya partía de una página web antigua que deseaba renovar, a la par que la identidad visual y el logotipo.</p>

            <h4>¿Cuál es nuestro buyer persona?</h4>
            <ul className="list">
                <li>Mujer o varón de 25-45 años</li>
                <li>Persona activa o deportista</li>
                <li>Que le guste cuidarse y se preocupe por su salud</li>
                <li>Intereses: viajar, deporte, alimentación, tecnología</li>
                <li>Con nivel socio-cultural alto y con poder adquisitivo</li>
            </ul>
            <Spacer y={2}/>
            <Grid xs={10} css={{margin:'0 auto'}}>
                <Image
                    src        = '../assets/clinica-benitez/clinica-benitez-buyer-persona.png'
                    objetFit   = 'container'
                    alt        = 'buyer persona de COPOE'
                    css        = {{ bg: 'transparent' }}
                />
            </Grid>
            <Spacer y={2}/>

            <h4>Identidad corporativa</h4>
            <p>Se diseñó un nuevo logotipo para la clínica y se escogió una paleta de colores y tipografía que fueran en sintonía con la nueva imagen de marca. También se definió el estilos de los logos que aparecerían en la web.</p>
            <blockquote>Se deseaba transmitir un aire <em>formal, cercano, atemporal, moderno, elegante y minimalista.</em></blockquote>
            <Spacer y={2}/>
            <Grid xs={11} md={9} css={{margin:'0 auto'}}>
                <Image
                    src        = '../assets/clinica-benitez/clinica-benitez-identidad.png'
                    objetFit   = 'container'
                    alt        = 'buyer persona de COPOE'
                    css        = {{ bg: 'transparent' }}
                />
            </Grid>

            <h3>Arquitectura de contenidos</h3>
            <p>El árbol de contenidos se estructuró pensando en la jerarquización, navegabilidad y experiencia de usuario. Se utilizó <span className="enfasis">Figma</span> para bocetar y representar la web antes de crearla en WordPress.</p>
            <Spacer y={2}/>
            <Grid xs={12} css={{margin:'0 auto'}}>
                <Image
                    src        = '../assets/clinica-benitez/clinicabenitez-arbol.png'
                    objetFit   = 'container'
                    alt        = 'Árbol de contenidos de la web de Clínica Benítez'
                    css        = {{ bg: 'transparent' }}
                />
            </Grid>
            <Spacer y={2}/>
            <Grid xs={12} css={{margin:'0 auto'}}>
                <Image
                    src        = '../assets/clinica-benitez/clinica-benitez-wireframes.png'
                    objetFit   = 'container'
                    alt        = 'Wireframes de la web de Clínica Benítez'
                    css        = {{ bg: 'transparent' }}
                />
            </Grid>
            <Spacer y={2}/>

            <h3>Desarrollo</h3>
            <h4>¿Cómo se trabajó en WordPress?</h4>
            <p>Después de personalizar los <em className="white">ajustes generales</em>, se escogió el tema <em>(theme)</em> de la página web. Me decanté por <span className="enfasis">Astra</span> por ser un tema optimizado para tener una buena velocidad de carga, tener una gran cantidad de opciones de personalización y configuración, buena integración con Elementor <em>(Theme Builder elegido para contruir la mayor parte del contenido de la web)</em> y disponer de plugins gratuitos.</p> 
            <Spacer y={1}/>
            <blockquote>Se trabaja con un tema hijo <em>(child theme)</em> para evitar alterar los archivos del tema padre. El código agregado con el tema hijo no se verá afectado por las actualizaciones del tema padre.</blockquote> 
            <Spacer y={1}/>
            <p>El paso siguiente fue crear <em className="white">las páginas, los menús y las entradas.</em> Se añaden categorías para organizar mejor el contenido del blog.</p> 
            <Spacer y={2}/>

            <h4>Plugins instalados</h4>
            <p>En el momento de la entrega, la página web tenía los siguientes <em className="enfasis">plugins</em> instalados:</p> 
            <Spacer y={2}/>

            <Grid.Container gap={1}>
            {
               pluggins.map(({ name, description }) => (
                <Grid sm={12} md={4} key={ name }>
                    <CardItems name = { name } description = { description } />
                </Grid>
                )) 
            }
            </Grid.Container>
        </>   
  )
}

