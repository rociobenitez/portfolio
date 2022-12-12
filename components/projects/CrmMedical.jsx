import Link from "next/link";
import { projects } from '../../data'
import { SmallButton } from "../../components";
import { Grid, Image, Spacer } from "@nextui-org/react";

export const CrmMedical = () => {

    const project = projects[0]

    return (
        <>
            <p>Su propuesta de valor reside en desarrollar un sistema de gestión <em className="white">a medida del cliente</em>, adaptando el proceso de diseño y producción del producto a sus necesidades.</p>
            <p>En la práctica clínica diaria nos encontramos con CRM médicos que están muy enfocados en la labor de contabilidad y fiscalidad de la empresa y no tanto en establecer una <em className="white">mejor comunicación profesional-paciente.</em></p>
            <p>Es en este punto, donde se decide crear <b>&apos;CRM medical&apos;</b>, una herramienta que ahorre tiempo, obtenga datos de consulta útiles para investigación y seguimiento de pacientes, facilite el trabajo clínico y presente una curva de aprendizaje baja.</p>

            <h3>Filosofía</h3>
            <h4>Misión</h4>
            <p>Queremos ser el software que mejore la asistencia diaria, potencie el desarrollo profesional del sanitario y facilite la realización de estudios de investigación con los datos obtenidos en consulta.</p>
            <h4>Visión</h4>
            <p>Ser una <em className="enfasis">herramienta indispensable y deseada</em> para gestionar los datos (especialmente los relacionados con el paciente) de cualquier clínica privada o centro médico de habla hispana.</p>
            <h4>Valores</h4>
            <p>Calidad, actualización y <em className="enfasis">mejora continua,</em> orientados al paciente, enfocados en simplificar y automatizar tareas cotidianas, creación de contenido basado en la evidencia científica.</p>

            <h3>Rol</h3>
            <p>Mi papel en este proyecto era <b>desarrollar una guía de estilo digital integral y diseñar la experiencia visual del software médico.</b> Como sanitaria y propietaria de una clínica privada, <em className="enfasis">conozco bien las necesidades</em> del día a día en consulta. Además, el haber trabajado con diferentes CRMs médicos de calidad me permitió valorar e implementar en &apos;CRM medical&apos; nuevas características que hicieran mejorar el producto.</p>

            <h3>Investigación</h3>
            <p>En el apartado <em className="white">&apos;💭 Briefing - Research&apos;</em> del archivo de <Link href={ project.buttons[0][1] } target="_blank">Figma</Link> se puedes ver el resultado final del proceso de investigación previa del proyecto <em>(moodboard, buyer persona, DAFO, propuesta de valor, Desk-Research, análisis de la competencia, modelo Canvas, mensajes prioritarios, planificación, presupuesto...)</em></p>
            <p>Se analizaron <b>más de 30 sistemas de gestión</b> (no solo médicos) tanto del panorama nacional como internacional, para poder sacar una síntesis inicial antes de iniciar el proceso creativo.</p>

            <h3>Fase creativa</h3>
            <p>Esta fase está divida en dos partes, por un lado trabajé la creación de la <em className="white">Identidad Corporativa</em> y por otro, el <em className="white">diseño de la experiencia visual</em> de &apos;CRM medical&apos; y de su web corporativa</p>
            <p>La <b>Identidad Corporativa</b> de &apos;CRM medical&apos; queda recogida en su <span className="enfasis">Brandbook</span>. Puedes ver el manual completo en el siguiente enlace:</p>
            <SmallButton
                text = 'Brandbook'
                href = '../assets/crmmedical/Brandbook-crmmedical-pliegos.pdf'
            />
            <Grid xs={10} md={9} css={{margin:'0 auto'}}>
                <Image
                    src        = '../assets/crmmedical/brandbook-crmmedical.png'
                    objetFit   = 'container'
                    alt        = 'buyer persona de COPOE'
                    css        = {{ bg: 'transparent' }}
                />
            </Grid>
            
            <h3>Desarrollo</h3>
            <p>En cuanto a la <b>Experiencia visual,</b> comencé diseñando una guía de estilo digital integral y una biblioteca de componentes reutilizables, que asegurara la consistencia y los tiempos de construcción más rápidos.</p>
            <p>Antes de hacer el cambio de prototipos de baja a alta fidelidad, fueron estos valorados y comentados con otros compañeros del sector para asegurarme de que lo que se iba construyendo era útil y significativo.</p>
            <Spacer y={2}/>
            <blockquote><em>Establecer bases sólidas y aplicar patrones de diseño que reduzcan la curva de aprendizaje del usuario</em></blockquote>
            <Spacer y={2}/>
            <p>Aunque se tuvo siempre en cuenta el <em>diseño responsive,</em> &apos;CRM medical&apos; está pensado para visualizarse en ordenadores y tablets, herramientas utilizadas en los centros de trabajo. Se descartó la idea de desarrollar una app para dispositivos móviles en fases iniciales.</p>
            <p>Durante toda esta fase, hubo una <em className="enfasis">comunicación</em> con el equipo de desarrolladores del software médico.</p>
        </>
    )
}
