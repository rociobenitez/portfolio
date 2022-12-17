import { Grid, Image, Spacer } from '@nextui-org/react'
import { projects } from '../../data'

export const ViajeAmarte = () => {

    const project = projects[4]

    return (
        <>
            <h3>Origen - ¿De dónde venimos?</h3>
            <p>Este proyecto web surge de un proyecto real bautizado con el nombre &apos;Viaje aMarte&apos;. Desde cero, se creó tanto su imagen de marca como su nuevo espacio web. &apos;Viaje aMarte&apos; nace de la pasión de dos amigas por la fotografía.</p>
            <p>Ainhoa y Cristina, trabajaron juntas anteriormente bajo la marca “La monería” (un estudio de fotografía de Murcia que finalmente tuvo que cerrar).</p>
            <p>Desde el principio, su <span className='white'>mayor motivación</span> siempre ha sido trabajar con parejas y gran parte de su trabajo es acompañarlas, sobre todo, en el <em className='enfasis'>“viaje” de su boda,</em> de principio a fin.</p>
            <Spacer y={2}/>
            <Grid xs={12} md={10} css={{margin:'0 auto'}}>
                <Image
                    src        = '../assets/viaje-amarte/viajeamarte-inicio.png'
                    objetFit   = 'container'
                    alt        = 'benchmarking de la aplicación, analizando diferentes webs de fotografía y vídeo de bodas'
                    css        = {{ bg: 'transparent' }}
                />
            </Grid>
            <Spacer y={2}/>

            <h3>Enfoque del proyecto</h3>
            <h5>¿Qué se quiere conseguir?</h5>
            <p>El <em className='white'>objetivo</em> principal era crear una web con diseño responsive que principalmente mostrara el trabajo fotográfico y fuera una vía para poder contactar con el equipo.</p>
            <Spacer y={2}/>

            <h5>¿A quién va dirigida la web?</h5>
            <p>A parejas que buscan <b>fotógrafos profesionales</b> para que cuenten su historia de amor a través de la fotografía. Parejas que quieran tener un recuerdo ya sea en papel o en formato digital.</p>
            <p>Son parejas que desean un equipo de fotógrafos <em className='white'>cercano, transparente, alegre y con chispa</em> a la vez que <em className='white'>profesional, perfeccionista y cuidadoso</em> con su trabajo. </p>
            <Spacer y={1}/>
            <blockquote>Nuestros usuarios valoran <span className='enfasis'>la naturalidad, la emoción y el buen rollo.</span></blockquote> 
            <Spacer y={2}/>

            <h3>Investigación</h3>
            <p>Comencé esta fase de investigación con un <em className='white'>briefing inicial.</em>. Realicé un <b>Desk Research</b> y analicé a la <b>competencia (Benchmark)</b> <em>(webs de fotografos con el mismo target tanto de Murcia como de todo el territorio nacional).</em></p>
            <Spacer y={2}/>
            <Grid xs={12} md={10} css={{margin:'0 auto'}}>
                <Image
                    src        = '../assets/viaje-amarte/viajeamarte-benchmarking.png'
                    objetFit   = 'container'
                    alt        = 'benchmarking de la aplicación, analizando diferentes webs de fotografía y vídeo de bodas'
                    css        = {{ bg: 'transparent' }}
                />
            </Grid>
            <Spacer y={2}/>
            <p>Tras revisar las webs que eran una competencia más directa por ubicación, saqué las siguientes <b>conclusiones:</b></p>
            <ul className='list list-lg'>
                <li>No todas las webs tenían una estética demasiado cuidada.</li>
                <li>La mayoría se enfocaba en el portfolio o trabajo realizado.</li>
                <li>Todos cuentan con una página de contacto.</li>
                <li>Se han observado copys con mucha <em>calidez, transparencia y cercanía</em>. <b>Conectan con el usuario.</b></li>
                <li>Solamente una de las webs mostraba las tarifas de sus servicios</li>
                <li>La mayoría no cuentan con un apartado de &apos;blog&apos;</li>
            </ul>
            <Spacer y={2}/>
            <blockquote><em>Buscamos un  <span className='white'>diseño sencillo y elegante,</span> que <em className='enfasis'>conecte</em> con la pareja y que tenga una experiencia de usuario satisfactoria.</em></blockquote> 
            <Spacer y={3}/>

            <h5>¿Quién es nuestro target?</h5>
            <p><em className='enfasis'>Primario:</em> Pareja que está planificando su boda o tiene intención de casarse y quiere contratar un equipo de fotógrafos que les acompañe en esa &apos;aventura&apos; inmortalizando cada momento (preboda, boda y postboda). <em>Pareja de carácter alegre, natural, cercano, jovial y cariñoso, que busca sentirse cómoda con los fotógrafos.</em></p>
            <p><em className='enfasis'>Secundario:</em> Pareja que busca tener fotos profesionales en als que salgan juntos. Fotos que muestren su historia y transmitan su complicidad. Pueden ser parejas con meses de relación, con mascota, con varios años de convivencia o incluso con familia.</p>
            <Spacer y={2}/>

            <Grid xs={12} md={10} css={{margin:'0 auto'}}>
                <Image
                    src        = '../assets/viaje-amarte/viajeamarte-user.png'
                    objetFit   = 'container'
                    alt        = 'Users persona de viaje amarte'
                    css        = {{ bg: 'transparent' }}
                />
            </Grid>
            <Spacer y={2}/>
            <p>Diseño del <em className='white'>moodboard</em> inicial:</p>
            <Spacer y={2}/>
            <Grid xs={12} md={10} css={{margin:'0 auto'}}>
                <Image
                    src        = '../assets/viaje-amarte/viajeamarte-moodboard.png'
                    objetFit   = 'container'
                    alt        = 'moodboard de la aplicación'
                    css        = {{ bg: 'transparent' }}
                />
            </Grid>
            <Spacer y={2}/>
            <h3>Identidad visual y verbal</h3>
            <p><em className='enfasis'>Paleta de colores.</em>Se escogió una combinación de tonos de alto contraste (negro y blanco) con colores pasteles. El <em>negro</em> es sinónimo de elegancia, el <em>blanco</em> crea una impresión de luminosidad y el <em>beige</em> transmite calma, calidez, formalidad, relajación, suavidad y serenidad.</p>
            <p>Elegí estos colores con la intención de que destacara más el trabajo de nuestras fotógrafas.</p>
            <p><em className='enfasis'>Tipografía.</em> Se utilizaron tres fuentes: <em className='white'>Raleway</em> (ideal para títulos, con gran legibilidad, moderna, neutra y elegante) <em className='white'>Karla</em> (con carácter grotesco y toque minimalista, usada para cuerpo de texto) y <em className='white'>Overpass Mono</em> (fuente monoespaciada que cumple una doble función: estética y funcional, se emplea para dar énfasis a pequeños fragmentos de texto).</p>
            <p><em className='enfasis'>Otros aspectos que trabajé:</em></p>
            <ul className='list list-lg'>
                <li>Logotipo e isotipo <em>(imagen gráfica)</em></li>
                <li>Estilo fotográfico para la web</li>
                <li>Tono de voz y messaging <em>(tono de comunicación)</em></li>
            </ul>

            <h3>Estructura y contenido</h3>
            <p>Se planteó una arquitectura muy sencilla <em>(árbol web)</em>, fácil para la navegación del usuario, y <span className='white'>diagramas de flujo (flowchart).</span> La página web consta de los siguientes contenidos:</p>
            <ul className='list list-lg'>
                <li>Menú de navegación: menú hamburguesa para dispositivos móviles y tablet, menú de navegación principal y menú de navegación para la galería de fotos</li>
                <li>Página de bienvenida</li>
                <li>Home o página de inicio</li>
                <li>&apos;Viajes&apos; o portfolio: galería de imágenes</li>
                <li>Equipo</li>
                <li>Formulario de contacto</li>
                <li>Botón <em>scroll to top</em></li>
                <li>Enlaces a RRSS</li>
                <li>Enlace para escribir a través de whatsapp</li>
            </ul>
            <Spacer y={2}/>
            <h5>Hipótesis inicial</h5>
            <p><em className='enfasis'>Diseño de imágenes.</em> En un primer momento, boceté un diseño web más informal, incorporando dibujos o gráficos elaborados manualmente con una tableta gráfica pero al realizar la composición se decidió prescindir de ellos para crear una web más limpia y minimalista.</p>
            <p><em className='enfasis'>Color negro.</em> Otro aspecto a comentar es el color negro escogido para la web. El negro seleccionado para la paleta de colores de la marca, es el #272726. Tras incorporarlo en las variables de color de CSS, se observó que provocaba un contraste insufiente con el blanco, por lo que se decidió cambiarlo por rgb(10, 10, 10).</p>
            <p><em className='enfasis'>Fondos.</em> Por último, valoré dos tipos de diseño, uno con fondo oscuro y otro con fondo claro. Tras hacer pruebas con los wireframes, decidí finalmente optar por el diseño con fondo negro en la mayoría de páginas de la web. Únicamente se dejó el fondo blanco en las páginas donde hay más contenido de texto escrito.Se descartó también incluir el modo claro/oscuro (planteado en un inicio).</p>
            <Spacer y={2}/>
            <Grid xs={12} md={10} css={{margin:'0 auto'}}>
                <Image
                    src        = '../assets/viaje-amarte/viajeamarte-hipotesis.png'
                    objetFit   = 'container'
                    alt        = 'anotaciones de hipótesis iniciales'
                    css        = {{ bg: 'transparent' }}
                />
            </Grid>
            <Spacer y={2}/>
            <h5>Wireframes</h5>
            <p>Los primeros bocetos los hice en <a href="https://whimsical.com/viaje-amarte-5a1k6BzJh5RMQ5udtccz9P" target='_blank' rel='noreferrer'>Whimsical</a> y después en <a href={project.buttons[1][1]} target='_blank' rel='noreferrer'>Figma</a>.</p>
            <Spacer y={2}/>
            <Grid xs={12} md={10} css={{margin:'0 auto'}}>
                <Image
                    src        = '../assets/viaje-amarte/viajeamarte-wireframes.png'
                    objetFit   = 'container'
                    alt        = 'wireframes de la web'
                    css        = {{ bg: 'transparent' }}
                />
            </Grid>
            <Grid xs={12} md={10} css={{margin:'0 auto'}}>
                <Image
                    src        = '../assets/viaje-amarte/viajeamarte-wireframes2.png'
                    objetFit   = 'container'
                    alt        = 'wireframes de la web'
                    css        = {{ bg: 'transparent' }}
                />
            </Grid>
            <Spacer y={2}/>
            <h3>Desarrollo</h3>
            <h5>Organización y estructura de carpetas</h5>
            <p>Puedes ver todo el contenido en mi repositorio de <a href={project.buttons[2][1]} target='_blank' rel='noreferrer'>GitHub</a>.</p> <blockquote>Durante el desarrollo de la web trabajé con prepros para recargar fácilmente el navegador y visualizar los cambios o avances en HTML, CSS y JS.</blockquote>
            <h5>CSS</h5>
            <p>Hice uso tanto de <em className='enfasis'>Flexbox</em> como de <em className='enfasis'>Grid</em>. Aunque CSS Grid permite crear diseños adaptables sin usar Media Queries, se ha detallado la disposición de filas y columnas en el apartado “Responsive” del CSS.</p>

            <h3>Anotaciones</h3>
            <p><em>El proyecto se subió con el dominio &apos;Viaje-a-marte.com&apos;, estuvo activo durante un año pero el equipo decidió no seguir manteniendo la web.</em></p>
            <Spacer y={2}/>
        
        </>
  )
}

