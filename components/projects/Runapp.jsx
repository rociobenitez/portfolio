import { Grid, Image, Spacer } from '@nextui-org/react'
import { projects } from '../../data'
import { CardItems } from '../'

export const Runapp = () => {

    const project = projects[3]
    const entrevistas = [
       {
        name: "Entrevista 1",
        description: "Realizada al director del Máster de Podología Deportiva de la Universidad Autónoma de Madrid, podólogo y fisioterapeuta, especialista en Podología y Biomecánica."
       },
       {
        name: "Entrevista 2",
        description: "Entrevisté a una trabajadora de Decathlon de la sección de Running con dos 2 años de experiencia en ese puesto, triatleta, entrenadora de triatlón y natación y graduada en CAFD."
       }

    ]
    return (
        <>
            <h3>Necesidad percibida</h3>
            <p>Cada día son más los modelos de zapatillas que podemos encontrar en el mercado. Este ofrece tal cantidad que, en ocasiones, puede llegar a <b>abrumarnos</b>.</p>
            <p><em className="white">Encontrar, por tanto, unas zapatillas de running que se amolden perfectamente a nuestros pies no es una tarea fácil</em> (ni para el corredor ni para el profesional de la salud). Es más, suele ser la primera duda que nos planteamos cuando decidimos empezar a correr o cuando vamos a afrontar un nuevo reto (maratón, trail, carreras populares...).</p>
            <p>Las zapatillas de correr juegan un papel fundamental a la hora de absorber y disminuir el impacto que se produce durante la actividad. Para escoger adecuadamente y poder comparar modelos se necesita mucho tiempo.</p>
            <em className="enfasis">¿Qué tal si facilitamos esta tarea?</em>
            <Spacer y={2}/>

            <h3>Design Thinking</h3>
            <p><em className="white">¿Por qué Design Thinking?</em> Esta metodología genera en muy poco tiempo <b>soluciones innovadoras</b>, permite <b>avanzar y testar</b> rápidamente las hipótesis y crear una cultura <b>creativa e innovadora</b> dentro del proyecto.</p>
            <p>En busca de un <em className="white">producto que aporte valor,</em> seguimos las siguientes fases:</p>
            <ul className='list list-lg'>
                <li>Empatizar - Observar</li>
                <li>Definir - Sintetizar</li>
                <li>Idear - Desarrollar</li>
                <li>Prototipar - Diseñar</li>
            </ul>
            <Spacer y={2}/>
            <Grid xs={11} md={10} css={{margin:'0 auto'}}>
                <Image
                    src        = '../assets/runapp/runapp-designthinking.png'
                    objetFit   = 'container'
                    alt        = 'esquema de doble diamante de design thinking'
                    css        = {{ bg: 'transparent' }}
                />
            </Grid>
            <Spacer y={2}/>
            <h3>Mi papel</h3>
            <p>Mi rol en este proyecto fueron tareas y toma de decisiones de diseño de UX, incluida la investigación previa, el diseño del producto y las posteriores pruebas de fidelidad-usabilidad o testing. En definitiva, <em className='white'>diseñar la applicación móvil de RunApp</em></p>
            <p>Además, idee la nueva <span className="enfasis">expresión visual</span> de la applicación <em>(logotipo, isotipo, paleta de colores, tipografía...).</em></p>
            <Spacer y={1}/>
            <blockquote>En el apartado <em className="white">&apos;📝 Details project&apos;</em> del archivo de <a href={ project.buttons[0][1] } target="_blank" rel="noreferrer" className='inline-link'>Figma</a> puedes ver al detalle el proceso de este proyecto.</blockquote>
            
            <h3>Etapa 1 - Observar</h3>
            <p>Esta etapa comienza con una <em className="white">búsqueda en medios y netnografía</em> para conocer y entender el <em>sector del running y del calzado deportivo</em>. De esta forma, tuve un perfil más claro del mercado y de nuestros posibles usuarios.</p>
            <Spacer y={1}/>
            <p><span className="enfasis">Conclusiones que obtuve:</span></p>
            <ul className="list list-lg">
                <li>El <b>running</b> es uno de los deportes más practicados, sobre todo en el ámbito <em>amateur</em>.</li>
                <li>Cada modelo de zapatillas presenta <b>características distintas</b> y es muy difícil que un corredor las conozca todas</li>
                <li>Diferentes artículos de blogs intentan explicar <b>cómo elegir</b> unas zapatillas de running</li>
                <li>Necesidad de <b>asesoramiento</b> en calzado de running</li>
            </ul>
            <Spacer y={2}/>
            <blockquote>Se percibe una necesidad de <em className="white">criterios válidos, individualización y asesoramiento.</em></blockquote>
            <Spacer y={2}/>
            <Grid xs={12} css={{margin:'0 auto'}}>
                <Image
                    src        = '../assets/runapp/runapp-busquedamedios.png'
                    objetFit   = 'container'
                    alt        = 'algunos de los resultados obtenidos de la búsqueda de medios para el proyecto de runapp'
                    css        = {{ bg: 'transparent' }}
                />
            </Grid>
            <Spacer y={1}/>
            <p>En este punto, lanzé todas las preguntas de investigación <em className="enfasis">(Research Question)</em> y las agrupé empleando el <em className="white">Diagrama de Veen</em>.</p>
            <p>A continuación muestro el <em className="enfasis">Benchmarking</em> realizado para comparar otras apps, sacar conclusiones relevantes y definir mejor nuestro producto.</p>
            <Spacer y={2}/>
            <Grid xs={12} md={10} css={{margin:'0 auto'}}>
                <Image
                    src        = '../assets/runapp/runapp-benchmarking.png'
                    objetFit   = 'container'
                    alt        = 'Tabla que esquematica y resume el benchmarking realizado, comparando diferentes aspectos de 8 apps'
                    css        = {{ bg: 'transparent' }}
                />
            </Grid>
            <Spacer y={2}/>
            <p>Esta etapa terminó con un <em className="enfasis">análisis DAFO, dos entrevistas y un formulario,</em> basado en 137 usuarios encuestados.</p>
            <Grid.Container gap={3}>
            {
               entrevistas.map(({ name, description }) => (
                <Grid sm={6} key={ name }>
                    <CardItems name = { name } description = { description } />
                </Grid>
                ))
            }
            </Grid.Container>
            <Spacer y={2}/>
            <Grid xs={12} md={10} css={{margin:'0 auto'}}>
                <Image
                    src        = '../assets/runapp/runapp-encuesta.png'
                    objetFit   = 'container'
                    alt        = 'Resultados de la encuesta pasada a 137 usuarios sobre zapatillas de running'
                    css        = {{ bg: 'transparent' }}
                />
            </Grid>
            <Spacer y={2}/>

            <h3>Etapa 2 - Sintetizar</h3>
            <p>El <em className='white'>objetivo principal</em> de esta fase fue crear una <span className='enfasis'>propuesta de valor</span> que solucionara directamente la necesidad o problema del usuario. <em className='white'>¿Cómo?</em> Buscando <em className='patrones'>patrones</em> en la información recopilada y no dando por hecho que conocemos la solución.</p>
            <Spacer y={2}/>
            <p><b>Puntos clave desarrollados:</b></p>
            <ul className='list list-lg'>
                <li><span className="enfasis">User persona</span>, representación ficticio al <em>máximo detalle</em> de nuestro <b>cliente ideal.</b> Plantee 3 perfiles de user persona.</li>
                <li><span className="enfasis">Mapa de empatía</span>, para entender y averiguar los deseos y necesidades del usuario. <em>Qué piensa, siente, ve, oye, dice y hace.</em></li>
                <li><span className="enfasis">Customer Journey </span> de cada uno de ellos observando los posibles <em>pain points.</em></li>
                <li><span className="enfasis">Matriz de necesidades</span> para obtener una visión <em>clara y concreta</em> de lo que necesita el usuario y por qué.</li>
            </ul>
            <Spacer y={2}/>
            <Grid xs={12} css={{margin:'0 auto'}}>
                <Image
                    src        = '../assets/runapp/runapp-fase2.png'
                    objetFit   = 'container'
                    alt        = 'Algunas conclusiones obtenidas de la fase 2 del design thinking'
                    css        = {{ bg: 'transparent' }}
                />
            </Grid>
            <Spacer y={2}/>

            <h3>Etapa 3 - Idear</h3>
            <blockquote><em>¿Cómo puedo ayudar al usuario a encontrar unas zapatillas de running que se adapten a sus necesidades? ¿Cómo hago para facilitar esta búsqueda?</em></blockquote>
            <Spacer y={2}/>
            <p>Es el momento de <b>idear y desarrollar soluciones.</b> Para ello utilicé las siguientes herramientas:</p>
            <ul className='list list-lg'>
                <li><span className="enfasis">Finding e insights</span>, que me ayudaran a identificar y explicar patrones de comportamiento. Estas ideas se almacenaron en <em>clusters</em> para conseguir mayor claridad.</li>
                <li><span className="enfasis">Matriz de utilidad y viabilidad</span>, para priorizar soluciones.</li>
                <li><span className="enfasis">In-out</span> que visualizara los límites del proyecto. Este mapa visual hizo comprender qué se encontraba dentro del proyecto y que no.</li>
                <li><span className="enfasis">MoSCow</span> para priorizar funcionalidades.</li>
                <li>Con todo lo anterior, definir muy bien la <span className="enfasis">Propuesta de valor.</span></li>
                <li><span className="enfasis">Business Model Canva</span></li>
            </ul>
            <Spacer y={3}/>
            <p className='white'>¿Con qué me quedé?</p>
            <ul className='list list-lg'>
                <li>La experiencia del usuario debía ser <b>fácil e intuitiva</b></li>
                <li>Necesidad de <b>filtros</b> claros de búsqueda</li>
                <li>Conocer al detalle las características de cada modelo</li>
                <li>Personalización de la búsqueda y el perfil</li>
                <li>Poder saber las <b>diferencias</b> entre un modelo y otro</li>
            </ul>
            <blockquote><em>El valor añadido de la app reside en que no está diseñada únicamente para los corredores (de todo tipo) sino también para los profesionales de la salud (especialmente podólogos o especialistas en biomecánica deportiva) que habitualmente recomiendas zapatillas de running a sus pacientes y necesitan una herramienta que les facilite la tarea.</em></blockquote>

            <h3>Etapa 4 - Diseñar</h3>
            <p>Comencé con el <em className="enfasis">site map</em> de la aplicación:</p>
            <Spacer y={1}/>
            <Grid xs={12} md={10} css={{margin:'0 auto'}}>
                <Image
                    src        = '../assets/runapp/runapp-sitemap.png'
                    objetFit   = 'container'
                    alt        = 'Sitemapp de la aplicación'
                    css        = {{ bg: 'transparent' }}
                />
            </Grid>
            <Spacer y={3}/>
            <p><em className="enfasis">Diagrama de flujo</em> de uno de los procesos más relevantes llevados a cabo por el usuario dentro de <em>Runapp</em>, <b>entrar en la app para acabar comprando sus mejores zapatillas.</b></p>
            <Spacer y={1}/>
            <Grid xs={12} md={10} css={{margin:'0 auto'}}>
                <Image
                    src        = '../assets/runapp/runapp-flowchart.png'
                    objetFit   = 'container'
                    alt        = 'Flowchart realizado en la etapa 4 del proyecto'
                    css        = {{ bg: 'transparent' }}
                />
            </Grid>
            <Spacer y={3}/>
            <p>Tras un <em>Moodboard</em> inicial, se construyeron los <span className="enfasis">wireframes</span> de la app</p>
            <Spacer y={2}/>
            <Grid xs={12} md={10} css={{margin:'0 auto'}}>
                <Image
                    src        = '../assets/runapp/runapp-wireframes.png'
                    objetFit   = 'container'
                    alt        = 'wireframes de la aplicación'
                    css        = {{ bg: 'transparent' }}
                />
            </Grid>
            <Spacer y={2}/>

            <h4>Búsqueda personalizada</h4>
            <em className='enfasis'>¿Cuáles van a ser los filtros de búsqueda?</em>
            <ul className='list list-lg'>
                <li><span className='white'>Datos del corredor:</span> zapatillas con horma para hombre o mujer, peso, altura y edad del runner.</li>
                <li><span className='white'>Actividad:</span> <em>¿para qué las quiere? ¿por dónde va a correr? ¿por qué entrena? ¿a qué ritmo va?</em></li>
                <li><span className='white'>Zapatillas:</span> precio, horma, drop, amortiguación...</li>
                <li><span className='white'>Biomecánica y lesiones:</span> tipo de pisada, apoyo en el contacto inicial, movilidad, estabilidad, lesiones, <em>¿lleva plantillas personalizadas?</em></li>
            </ul>
            <Spacer y={3}/>

            <h4>Pantallas en alta</h4>
            <p>Por último realicé el diseño de todas las pantallas de la aplicación, empezando por el diseño y animación que aparece al abrir la app y el <em className='white'>onboarding</em>.</p>
            <Spacer y={2}/>

            <em className='enfasis'>¿Qué secciones tiene la app?</em>
            <ul className='list list-lg'>
                <li>Crear una cuenta <em>(opción básica o pro-premium).</em> La diferencia principal está en las opciones de personalización (filtros).</li>
                <li>Inicio de sesión.</li>
                <li>Crear perfil personalizado.</li>
                <li>Diferenciación de contenido para corredores y para profesionales de la salud.</li>
                <li>Posibilidad de recibir anuncios personalizados basados en las búsquedas y perfil del usuario.</li>
                <li>Sección <em>&apos;Aprende&apos;</em> con información de interés para el deportista.</li>
                <li>Comparador de zapatillas.</li>
                <li>Buscador de zapatillas con filtros.</li>
                <li>Desglose de todas las características de cada modelo.</li>
                <li>Valoraciones de los usuarios de cada modelo de zapatillas.</li>
                <li>Dónde comprar las zapatillas <em>(presencial u online, vista de precios, localización...)</em></li>
                <li>Posibilidad de puntuar y valorar un modelo de zapatillas.</li>
                <li>Resultado de búsqueda <em>(posibilidad de compartir)</em></li>
                <li>Opción de poder guardar un modelo o marcas en favoritos</li>
            </ul>

            <h3>Análisis retrospectivo</h3>
            <p>En el momento del diseño de la app (finales de 2021), estaba más familiarizada con las plataformas web que con el entorno &apos;mobile&apos; <em>(era la primera aplicación que diseñaba).</em></p>
            <Spacer y={2}/>
            <em className='enfasis'>Lo que habría hecho diferente si hubiera sabido lo que sé ahora:</em>

            <h5>Contraste</h5>
            <p>Ahora soy más consciente de las herramientas que existen para guiar a los diseñadores a aumentar la accesibilidad para el contraste de color (basado en los estándares W3C). Todo el contraste entre el texto y el fondo debe ser de al menos 4,5:1 o un estándar AA.</p>
            <p>Con el tiempo he ido adquiriendo mayores conocimientos en <em>accesibilidad</em> que antes no conocía.</p>
            <p>Hoy en día, <em className='white'><a href='https://colorable.jxnblk.com/' target='_blank' rel='noreferrer' className='inline-link'>Colorable</a></em> es una de mis herramientas favoritas para comprobar el contraste.</p>

            <h5>Testing</h5>
            <p>Hubiera necesitado un <em>testing</em> mayor para sacar datos más concluyentes en la última fase del Design Thinking. También quedó pendiente analizar la <em className='white'>intencionalidad de pago</em> de la app.</p>
            <Spacer y={2}/>
        </>
  )
}
