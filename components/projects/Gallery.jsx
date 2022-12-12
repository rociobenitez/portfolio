import { Grid, Image, Spacer } from '@nextui-org/react'
import PropTypes from 'prop-types';


export const Gallery = ({ images }) => {
    return (
        <Grid.Container gap = {1} justify = "center">
            {
                images.map((item, index) => (
                    <Grid xs={12} key={ index }>
                        <Image
                            src        = { "/assets/" + item[0] }
                            alt        = { item[1] }
                            width      = '100%'
                            objectFit  = 'contain'
                            css        = {{ bg: 'transparent' }}
                        />
                    </Grid>
                ))
            }
            <Spacer y = {2}/>
        </Grid.Container>
    )
}

Gallery.propTypes = {
    images : PropTypes.array.isRequired,
}