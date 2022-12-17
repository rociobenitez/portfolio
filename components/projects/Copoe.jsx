import { Grid, Image, Spacer } from '@nextui-org/react'
import { projects } from '../../data'

export const Copoe = () => {

    const project = projects[1]

    return (
        <>
            <h3>Objetivos</h3>
            <p>El desarrollar este proyecto tiene como objetivo poner en práctica los conocimientos de <b>desarrollo FulllStack.</b></p>
            <p>Esta membership site <em>se crea</em> con el objetivo de conseguir <em className="enfasis">ventajas y descuentos</em> únicos y exclusivos para sus asociados mediante la colaboración con los mejores proveedores del mercado, ofrecer <em className="enfasis">formación de calidad,</em> basada en evidencia científica y muy orientada a la práctica clínica diaria, y <em className="enfasis">luchar por los intereses</em> tanto de los podólogos como de las clínicas de podología de España.</p>
            <Spacer y={2}/>
            <blockquote><em>La finalidad principal era mejorar las habilidades en <b>php,</b> trabajando tanto la parte <b>de Frontend como de Backend.</b></em></blockquote>
            <Spacer y={3}/>

            <h3>Investigación</h3>
            <p>El foco principal de esta fase estuvo en el desarrollo del <em className="white">buyer persona</em> <em>(¿a quién va dirigida la web?)</em> y el <b>análisis y comparación</b> de las diferentes webs del ámbito sanitario, ya fuera de membresía o no, para poder, finalmente elaborar un <em className="white">moodboard</em> de referencia.</p>
            <Spacer y={2}/>
            <Grid xs={12} md={10} css={{margin:'0 auto'}}>
                <Image
                    src        = '../assets/copoe/copoe-12.png'
                    objetFit   = 'container'
                    alt        = 'buyer persona de COPOE'
                    css        = {{ bg: 'transparent' }}
                />
            </Grid>
            <Spacer y={2}/>
            <h3>Identidad visual y verbal</h3>
            <p>La paleta de colores escogida para la web evoca tranquilidad y claridad mental. Se optó por el color turquesa para huir de la frialdad extrema del azul (entre las propiedades psicológicas que se le atribuye al turquesa están la comunicación y la claridad, ideal para el proyecto). <em className="white">Se pretende asociar la marca a la salud y a la educación.</em></p>
            <h4>¿Por qué <em>&apos;Poppins&apos;</em>?</h4>
            <p>Es una tipografía neutra y moderna, con toques minimalistas y de muy fácil lectura. Muy versátil, con 9 estulos diferentes.</p>
            <h4>Tono de voz y messaging</h4>
            <p>Se trabaja el texto de la web huyendo de párrafos aburridos y demasiado largos, buscando captar la atención del usuario y transmitirle confianza, transparencia y profesionalidad. El copy es <em className="enfasis">profesional pero a la vez cercano.</em></p>
            <Spacer y={2}/>
            <Grid xs={12} md={10} css={{margin:'0 auto'}}>
                <Image
                    src        = '../assets/copoe/copoe-2.png'
                    objetFit   = 'container'
                    alt        = 'Tipography and colors COPOE'
                    css        = {{ bg: 'transparent' }}
                />
            </Grid>
            <Spacer y={2}/>

            <h3>Desarrollo</h3>
            <h4>Arquitectura de la información</h4>
            <p>En la fase de desarrollo del proyecto elaboré los siguientes apartados:</p>
            <ul className='list list-lg'>
                <li><span className="enfasis">Árbol web</span>, con una estructura lo más <em>sencilla e intuitiva</em> posible, fácil para la navegación del usuario.</li>
                <li><span className="enfasis">Diagrama de flujo (flowchart)</span>, desde que el usuario entra en la página, clica en un curso, decide asociarse, se inscribe al curso, accede al área privada y cierra sesión.</li>
                <li><span className="enfasis">Inventario de contenido.</span> La estructura de <b>carpetas</b> del proyecto está formada por <em>&apos;admin&apos; (backend), &apos;api&apos; (datos de la BBDD), &apos;css&apos; (styles), &apos;fonts&apos;, &apos;img&apos;, &apos;js&apos; (archivos de JavaScript), &apos;views&apos; (frontend), &apos;templates&apos; y el archivo &apos;functions.php&apos;, que reúne todas las funciones php.</em></li>
                <li><span className="enfasis">Wireframes.</span> Se diseñan los primeros bocetos de la web pensando en el diseño <em>responsive.</em></li>
            </ul>
            <Spacer y={1}/>
            <blockquote><em>Puedes ver la estructura del proyecto en <a href={ project.buttons[1][1] } target="_blank" rel="noreferrer" className='inline-link'>GitHub</a></em></blockquote>
            <Spacer y={2}/>

            <h4>Base de datos</h4>
            <p>Se hace uso de <span className="enfasis">phpMyAdmin</span> para administrar los datos de la web. Las opciones disponibles son amplias, desde la creación de la base de datos, la creación de tablas, la modificación de su estructura, la búsqueda y edición de los registros, hasta las copias de seguridad.</p>
            <Spacer y={2}/>
            <Grid xs={12} md={10} css={{margin:'0 auto'}}>
                <Image
                    src        = '../assets/copoe/copoe-14.png'
                    objetFit   = 'container'
                    alt        = 'buyer persona de COPOE'
                    css        = {{ bg: 'transparent' }}
                />
            </Grid>
            <Spacer y={2}/>

            <h4>Bootstrap</h4>
            <p>Para facilitar un diseño y comportamiento receptivo adecuado hice uso de <a href="https://getbootstrap.com/" target="_blank" rel="noreferrer" className='inline-link'>Bootstrap</a>, al ser un framework que ofrece un amplio abanico de herramientas y funciones para el frontend.</p>

            <h3>¿Qué se ha trabajado?</h3>
            <h4>Backend</h4>
            <ul className='list list-lg'>
                <li>Inicio y cierre de sesión.</li>
                <li>Conexión con la Base de Datos.</li>
                <li>Posibilidad de <em>crear, ver, editar y eliminar</em> registros.</li>
                <li>Relacionar tablar en <em>phpMyAdmin</em></li>
                <li>Relacionar la parte del Admin con la del Frontend.</li>
                <li>Buscador de contenido.</li>
                <li>Capturar elementos del DOM (JavaScript)</li>
                <li>Subida de ficheros (imágenes).</li>
            </ul>
            
            <h4>Frontend</h4>
            <ul className='list list-lg'>
                <li>Inicio (login) y cierre de sesión.</li>
                <li>Registro de usuarios, para acceder al área privada, con la posibilidad de seleccionar el tipo de cuenta.</li>
                <li>Obtener los datos del usuario que inicia sesión.</li>
                <li>Contenido personalizado, visible o no en función de si el usuario está o no logueado.</li>
                <li>JavaScript: capturar elementos del DOM, trabajar con API y AJAX (fetch), añadir y recoger datos del localStorage.</li>
                <li>Buscador de artículos en el blog.</li>
                <li>Paginación.</li>
                <li>Simulación de tienda online.</li>
                <li>Formulario de contato, validando el envío.</li>
                <li>Enlaces de contacto.</li>
                <li>Posibilidad de inscripbirse a un curso.</li>
                <li>Utilización de <b>Bootstrap</b>.</li>
            </ul>
            <Spacer y={2}/>
            <blockquote><em>Puedes ver más detalles del proyecto en mi archivo de <a href={ project.buttons[0][1] } target="_blank" rel="noreferrer" className='inline-link'>Figma</a></em></blockquote>
        </>   
    )
}
