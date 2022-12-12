import { Grid, Image, Spacer } from '@nextui-org/react'
import { projects } from '../../data'

export const ViajeAmarte = () => {

    const project = projects[4]

    return (
      <>
          <h3>Origen - ¿De dónde venimos?</h3>
          <p>Este proyecto web surge de un proyecto real bautizado con el nombre &apos;Viaje aMarte&apos;. Desde cero, se crea tanto su imagen de marca como su nuevo espacio web. &apos;Viaje aMarte&apos; nace de la pasión de dos amigas por la fotografía.</p>
          <p>Ainhoa y Cristina, nuestras fotógrafas trabajaron juntas anteriormente bajo la marca “La monería” (un estudio de fotografía de Murcia que finalmente tuvo que cerrar).</p>
          <p>Desde el principio, su mayor motivación siempre ha sido trabajar con parejas y gran parte de su trabajo es acompañarlas, sobre todo, en el “viaje” de su boda, de principio a fin.</p>
          <p>De su deseo por crear una nueva imagen de marca y ocupar un espacio en internet, surge la idea de trabajar una página web basada en su trabajo.</p>

          <h3>Enfoque del proyecto</h3>
          <h5>¿Qué se quiere conseguir?</h5>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
          <h5>¿A quién va dirigida la web?</h5>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>



          <h3>Investigación</h3>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
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
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
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
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
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
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

          <h3>Estructura y contenido</h3>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
    
        </>
      
  )
}

