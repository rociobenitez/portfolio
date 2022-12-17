import { Grid } from '@nextui-org/react'
import { Layout, SectionAbout } from '../components';

const AboutPage = () => {
  return (
    <Layout
      title    = "Sobre mi"
      keywords = "about, sobre mi"
    >
      <Grid.Container gap={2} direction = 'column' justify="center" css={{maxWidth: '1000px', m:'auto'}}>
        <SectionAbout />
      </Grid.Container>
    </Layout> 
  )
}

export default AboutPage;
