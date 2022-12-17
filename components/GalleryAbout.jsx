import { Card, Grid, Spacer } from '@nextui-org/react'
import { images } from '../data'

export const GalleryAbout = () => {
    return (
        <Grid.Container gap = {1} justify = "center">
            {
                images.map((item, index) => (
                    <Grid xs={3} sm={6} key={ index }>
                        <Card
                            isHoverable 
                            css={{
                                bg: "transparent",
                                w: "100%",
                                borderRadius: "var(--border-radius)",
                                '&:hover': {
                                    'img': {
                                        opacity: '.9',
                                        transform: 'scale(1.1)',
                                        transition: 'transform 500ms ease-out',
                                    },
                                    'div p': { opacity: '0' },
                                    'div h4' : { opacity: '0' }
                                }
                            }}
                        >
                        <Card.Image
                            src        = { '/assets/' + item.src }
                            alt        = { item.alt }
                            width      = '100%'
                            height     = { 100 }
                            objectFit  = 'cover'
                            css = {{
                                opacity: '.3' ,
                                transition: 'opacity 300ms ease'
                             }}  
                        />
                        </Card>
                    </Grid>
                ))
            }
            <Spacer y = {2}/>
        </Grid.Container>
    )
}
