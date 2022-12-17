import React from 'react'
import { Grid } from "@nextui-org/react";
import { HeroProject, BodyProject } from "..";

export const SectionProject = ({ project }) => {
  return (
    <Grid xs={12} sm={9} direction='column'>
        <HeroProject
            title    = { project.title }
            intro    = { project.intro }
            buttons  = { project.buttons }
            src      = { project.src }
            alt      = { project.alt }
        />
        <BodyProject project = { project } />
    </Grid>
  )
}
