// import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components'
import { Grid } from '@nextui-org/react';
import { Layout, Button } from '../components'
import { infoBtn } from '../data';

const StyledHeroSection = styled.section`
  display: flex;
  justify-content: center;
  text-align: center;
  height: 90vh;
  margin: auto;
  @media (max-width: 768px) {
    padding: 0 50px;
  }

  .divHome {
    margin: auto;
  }

  h6 {
    font-family: var(--font-mono);
    font-size: 1em;
    font-weight: 800;
    color: var(--primary-color);
  }

  h1 {
    font-family: var(--font-sans);
    font-size: clamp(2.5em, 12vw, 4em);
    font-weight: 800;
  }

  h2 {
    font-family: var(--font-sans);
    font-size: clamp(1.2em, 5vw, 2em);
    font-weight: 800;
    color: var(--slate);
    margin-bottom: 1em;
  }
`

const HomePage = () => {
  return (
    <Layout
      title="Home">
      <StyledHeroSection>
        <div className='divHome'>
          <h6>Hola, soy</h6>
          <h1>Rocío Benítez</h1>
          <h2>Frontend Developer</h2>
          <Grid.Container gap={2} justify="center">
            {
              infoBtn.map( ({ text, url }) => (
                <Grid key = { url }>
                  <Button
                    key = { url }
                    texto = { text }
                    as = 'a'
                    href = { url }
                  />
                </Grid>
              ))
            }
          </Grid.Container>
        </div>
      </StyledHeroSection>
    </Layout> 
  )
}

export default HomePage;



