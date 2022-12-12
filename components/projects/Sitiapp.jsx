import Link from "next/link";
import { projects } from '../../data'
import { Grid, Image, Spacer } from "@nextui-org/react";

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
            <blockquote>Mejoras la comunicación con los compañeros y te obliga a argumentar y expresar mejor tus ideas.</blockquote>
            
        </>
  )
}
