import { Grid, Image, Spacer } from "@nextui-org/react";
import PropTypes from 'prop-types';
import { SmallButton } from '../../components';
import styles from './HeroProject.module.css'

export const HeroProject = ({ title, intro, buttons, src, alt }) => {
  return (
    <div className={styles.heroProject}>
        <h1>{ title }</h1>
        <p>{ intro }</p>
        <Spacer y={1}/>
        <Grid.Container gap={1}>
            { buttons && buttons.map((button, i) => (
                <Grid key = { i }>
                    <SmallButton
                        text   = { button[0] } 
                        href   = { button[1] }
                    >
                    { button }
                    </SmallButton>
                </Grid>
            )) }
        </Grid.Container>
        <Spacer y={2}/>
        <Image 
            width      = '100%'
            height     = { 400 }
            src        = { src }
            alt        = { alt }
            objectFit  = 'contain'
            css        = {{ bg: 'var(--white)'}}
        />
    </div>
  )
}

HeroProject.propTypes = {
    title    : PropTypes.string.isRequired,
    intro    : PropTypes.string.isRequired,
    buttons  : PropTypes.array.isRequired,
    src      : PropTypes.string.isRequired,
    alt      : PropTypes.string.isRequired,
}