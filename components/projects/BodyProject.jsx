import React from 'react'
import { Gallery, ClinicaBenitez, CrmMedical, Copoe, Runapp, ViajeAmarte, Sitiapp } from "../../components";
import styles from './BodyProject.module.css'

export const BodyProject = ({ project }) => {
  return (
    <div className={styles.containerProject}>
        
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

    </div>
  )
}
