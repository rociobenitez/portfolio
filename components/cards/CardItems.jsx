import PropTypes from 'prop-types';
import { Card, Text } from '@nextui-org/react'

export const CardItems = ({ name, description }) => {
  return (
        <Card
            variant = "bordered" isHoverable
            css={{
                bg: "transparent",
                border: "1px solid var(--secondary-color)",
                w: "100%",
                p: "1em .5em"
            }}
        >
          <Card.Header>
            <Text b
                size = {16}
                color = 'var(--primary-color)'
                css = {{
                    fontFamily: 'var(--font-mono)'
                }}
            >
                { name }
            </Text>
          </Card.Header>
          <Card.Body>
                
            <Text size = {17} color = 'var(--dark-slate)' >
              { description }
            </Text>
          </Card.Body>
        </Card>
  )
}

CardItems.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
}
