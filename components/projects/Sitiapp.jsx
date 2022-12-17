import { projects } from '../../data'
import { Spacer } from "@nextui-org/react";

export const Sitiapp = () => {

    const project = projects[5]

    return (
        <>
            <h3>Objetivos</h3>
            <p>El objetivo <b>principal</b> de este proyecto era crear un producto (una app) que ayudara a las personas que viven o viajan a Madrid a hacer uso del transporte público.</p>
            <em className="enfasis">¿Cómo lo conseguiríamos?</em>
            <Spacer y={1} />
            <p>Poniendo el foco en el <em className="white">usuario</em>, <em>&apos;siendo&apos; ese usuario, pensando como él, actuándo como el, empatizando con él.</em></p>
            <em className="enfasis">¿Qué queríamos incluir en la app?</em>
            <Spacer y={1} />
            <p>Era muy importante el tema de la seguridad frente al Covid-19 y tener muy presente el tema de la <b>accesibilidad</b> tanto para personas discapacitadas como mayores. Queríamos además, incluir nuevos transportes urbanos como bisis o coches eléctricos (más sostenibles) y que convivieran en la misma app transportes públicos y privados. Por último, un aspecto fundamental era agilizar procesos y facilitar el uso de transporte público <em>(a la hora de adquirir billetes, consultar el saldo de la tardeja, pago rápido y cómodo, conocer el estado y el tiempo de cada trayecto...)</em></p>

            <h3>Rol</h3>
            <p><em>&apos;Sitiapp&apos;</em> fue un proyecto de diseño de UX en equipo (formado por 6 personas) donde se empleó la metodología de <em className="white">Design Thinking</em>. Este tipo de trabajo fue un reto y un aprendizaje para mi, ya que no había estado anteriormente como diseñadora UXUI en grupos con este número de personas.</p>
            <p>Trabajar con más compañeros me ayudó a poder plantear ideas o funcionalidades interesantes para la app que seguramente sola no las hubiera tenido en cuenta.</p>
            <Spacer y={1} />
            <blockquote><em>&apos;Mejoras la comunicación con los compañeros y te obliga a argumentar y expresar mejor tus ideas.&apos;</em></blockquote>

            <h3>Desarrollo</h3>
            <p>Hicimos uso de <a href='https://miro.com/es/' target='_blank' rel='noreferrer'>Miro</a> <em>(pizarra online)</em>, esta herramienta nos permitió al equipo poder trabajar en remoto y estar conectados.</p>
            <p><em className="enfasis">Brainstorming.</em> La primera fase del proyecto fue una lluvia de ideas que continuó con una búsqueda en medios <span>(Desk Research y Netnografía)</span>. Con la ayuda de notas adhesivas fuimos construyendo un modelo o idea inicial de nuestra app.</p>
            <p><em className="enfasis">Encuestas</em>. Utilizamos <a href='https://infogram.com/untitled-chart-1hd12yxe1r3qw6k' target='_blank' rel='noreferrer'>Infogram</a> para representar los resultados. <em>¿Quieres verlos? clica en el anterior enlace.</em></p>
            <p><em className="enfasis">Idear y diseñar.</em> Puedes ver al detalle estas dos fases en mi archivo de <a href={project.buttons[0][1]} target='_blank' rel='noreferrer'>Figma</a> o en este <a href='https://rociobenitez.gitbook.io/design-thinking-rocio/observar/preguntas' target='_blank' rel='noreferrer'>Gitbook</a>.</p>
            <Spacer y={3} />  
        </>
  )
}
