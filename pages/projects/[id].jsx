import React from 'react'
import { Grid } from "@nextui-org/react";
import styled from 'styled-components'
import { Layout, Aside, HeroProject, Gallery, ClinicaBenitez, CrmMedical, Copoe, Runapp, ViajeAmarte, Sitiapp } from "../../components";
import { projects } from '../../data';

const StyledContainer = styled.div`
    margin-top: 1em;
    h3 {
        font-family: var(--font-mono);
        font-size: 1.4em;
        color: var(--primary-color);
        padding: 2em 0 .5em;
    }
    h4 {
        padding: 1em 0 .3em;
        font-size: 1.2em;
    }
    h5 {
        padding: 1em 0 .3em;
        font-size: 1.1em;
        font-family: var(--font-mono);
    }
    p {
        color: var(--light-slate);
    }
`

const ProjectPage = ({ project }) => {

    return (
        <Layout
            title = { project.title }
            main = "fillHeight"
        >
            <>
                <Grid.Container gap={1} justify="center" css={{ marginTop:'7em' }}>
                    <Grid xs={12} sm={3}>
                        <Aside 
                            skills = { project.skills } 
                            rol = { project.rol }
                        />
                    </Grid>
                    <Grid xs={12} sm={9} direction='column'>
                        <HeroProject
                            title    = { project.title }
                            intro    = { project.intro }
                            buttons  = { project.buttons }
                            src      = { project.src }
                            alt      = { project.alt }
                        />
                        <StyledContainer>
                            
                            { (() => {
                                switch( project.nameComponent ) {
                                    case 'ClinicaBenitez':
                                        return <ClinicaBenitez /> 
                                    case 'CrmMedical':
                                        return <CrmMedical />
                                    case 'Copoe':
                                        return <Copoe />
                                    case 'Runapp':
                                        return <Runapp />
                                    case 'ViajeAmarte':
                                        return <ViajeAmarte />
                                    case 'Sitiapp':
                                        return <Sitiapp />
                                    default:
                                        return null
                                }
                            })() }

                            <Gallery images = { project.img }/>   

                        </StyledContainer>
                    </Grid>
                </Grid.Container>
            </>
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

