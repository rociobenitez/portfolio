import { Grid, Image, Spacer } from "@nextui-org/react";
import PropTypes from 'prop-types';
import styled from 'styled-components'
import { SmallButton } from '../../components';

const StyledHeroSection = styled.section`  
    padding: 1em 0;
    h1 {
        font-size: 2.5em;
        font-weight: bold;
    }
    p {
        color: var(--light-slate);
    }
`

export const HeroProject = ({ title, intro, buttons, src, alt }) => {
  return (
    <StyledHeroSection>
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
            css = {{
                bg: 'var(--white)'
            }}
        />
    </StyledHeroSection>
  )
}

HeroProject.propTypes = {
    title    : PropTypes.string.isRequired,
    intro    : PropTypes.string.isRequired,
    buttons  : PropTypes.array.isRequired,
    src      : PropTypes.string.isRequired,
    alt      : PropTypes.string.isRequired,
}