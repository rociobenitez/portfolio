import { Grid } from "@nextui-org/react";
import { Layout, CardProject } from '../../components'
import { projects } from '../../data'

const ProjectsPage = ({ projects }) => {
  return (
      <Layout title = "Portfolio">
        <div className="gridPortfolio">
          <Grid.Container gap={1} justify="center">
            {
              projects.map(( project, index ) => (  
                <Grid xs={12} sm={4} key = { (index + 1) }>
                  <CardProject
                    project = { project }
                    id = { (index + 1) }
                  />
                </Grid>
              ))
            }
          </Grid.Container>
        </div>
      </Layout>
  )
}

export const getStaticProps = async () => {
  return {
    props: {
      projects
    }
  }
}

export default ProjectsPage;
