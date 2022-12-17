import React from 'react'
import { Grid } from "@nextui-org/react";
import { Layout, Aside, SectionProject } from "../../components";
import { projects } from '../../data';

const ProjectPage = ({ project }) => {

    return (
        <Layout
            title = { project.title }
        >
            <div className='fillHeight'>
                <Grid.Container gap={1} justify="center" css={{ marginTop:'7em' }}>
                    <Grid xs={12} sm={3}>
                        <Aside 
                            skills = { project.skills } 
                            rol = { project.rol }
                        />
                    </Grid>
                    <SectionProject project = { project } />
                </Grid.Container>
            </div>
        </Layout>                  
    )
}

export const getStaticPaths = async (ctx) => {
    const projectsList = [...Array(projects.length)].map(( value, index ) => `${ index + 1 }`);
    console.log(projectsList)
    return {
      paths: projectsList.map( id => ({
        params: { id }
      })),
      fallback: false
    }
  }

  export const getStaticProps = async ({ params }) => {
    const { id } = params 
    return {
      props: {
        project: projects[(id - 1)]
      }
    }
  }

export default ProjectPage;

