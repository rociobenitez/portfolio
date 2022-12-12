import PropTypes from 'prop-types';
import { Card, Text } from '@nextui-org/react'

export const CardAbout = ({ title, intro, path1, path2, tools }) => {
    return (
        <Card 
        variant = "bordered" isHoverable  
        css={{
                bg: "transparent",
                border: "1px solid var(--secondary-color)",
                w: "100%",
                p: "1.5em .5em"
            }}>
            <Card.Header css ={{ d: 'block' }}>
                <div className="icon"> 
                    <svg
                        viewBox="0 0 120 40"
                        color="var(--green)"
                        xmlns="http://www.w3.org/2000/svg">
                        <g>
                            <path fill="none" d={ path1 }></path>
                            <path d={ path2 } width="90%"></path>
                        </g>
                    </svg>
                </div>
                <Text
                    h3
                    size = {26} 
                    color = 'var(--white)'
                    css = {{
                        fontFamily: 'var(--font-mono)'
                    }}>
                    { title }
                </Text>
            </Card.Header>
            <Card.Body>
                <Text 
                    size = {19} 
                    color = 'var(--light-slate)'>
                    { intro }
                </Text>
            </Card.Body>
            <Card.Footer css ={{ d: 'block'}}>
                <Text b
                    size = {20} 
                    color = 'var(--green)'
                    css = {{
                        p: '2em 0 0',
                        fontFamily: 'var(--font-mono)'
                    }}
                >
                   Tools: 
                </Text>
                <Text
                    size = {16}
                    color = 'var(--light-slate)'
                    css = {{
                        p: '1em 0 0',
                        fontFamily: 'var(--font-mono)'
                    }}
                >
                   { tools }
                </Text>
            </Card.Footer>
        </Card>
    )
}

CardAbout.propTypes = {
    title: PropTypes.string.isRequired,
    intro: PropTypes.string.isRequired,
    path1: PropTypes.string.isRequired,
    path2: PropTypes.string.isRequired,
    tools: PropTypes.string.isRequired,
}