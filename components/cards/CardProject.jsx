import PropTypes from 'prop-types';
import { useRouter } from 'next/router'
import { Card, Col, Text } from '@nextui-org/react'

export const CardProject = ({ project, id }) => {
    const router = useRouter();
    const onClick = () => router.push(`/projects/${ id }`)

    return (
        <Card 
            isPressable
            isHoverable
            onClick = { onClick }
            variant = "flat"
            css={{
                bg: "transparent",
                w: "100%",
                '&:hover': {
                    'img': {
                        opacity: '.9',
                        transform: 'scale(1.1)',
                        transition: 'transform 500ms ease-out',
                    },
                    'div p': { opacity: '0' },
                    'div h4' : { opacity: '0' }
                }
            }}>
            <Card.Header
                css={{
                    position: "absolute",
                    zIndex: 1,
                    top: 5,
                    left: 5
                }}>
                <Col>
                    <Text 
                        size = {14} 
                        weight = "bold"
                        color = 'var(--primary-color)'
                        css = {{
                            fontFamily: 'var(--font-mono)',
                            padding: ".5em 0",  
                        }}>
                    { project.subtitle }
                    </Text>
                    <Text
                        h4
                        color = 'var(--white)'
                        css = {{
                            fontFamily: 'var(--font-sans)'
                        }}>
                    { project.title }
                    </Text>
                </Col>
            </Card.Header>
            <Card.Image
                src       = { project.src }
                objectFit = 'cover'
                width     = '100%'
                height    = { 340 }
                alt       = { project.alt }
                css = {{
                    opacity: '.3',
                    transition: 'opacity 300ms ease'
                }}
            />
        </Card>
    )
}

CardProject.propTypes = {
    project : PropTypes.object.isRequired,
    id : PropTypes.number.isRequired,
}