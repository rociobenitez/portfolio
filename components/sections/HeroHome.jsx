import { Grid } from '@nextui-org/react';
import { infoBtn } from '../../data';
import { Button } from '../buttons';
import styles from './HeroHome.module.css'

export const HeroHome = () => {
  return (
    <section className={styles.container}>
        <div className={styles.divHome}>
            <h6>Hola, soy</h6>
            <h1>Rocío Benítez</h1>
            <h2>Frontend Developer</h2>
            <Grid.Container gap={2} justify="center">
              {
                infoBtn.map( ({ text, url }) => (
                  <Grid key = { url }>
                    <Button
                      key = { url }
                      text = { text }
                      href = { url }
                    />
                  </Grid>
                ))
              }
            </Grid.Container>
        </div>
    </section>
  )
}
