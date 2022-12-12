import { Spacer } from '@nextui-org/react';
import PropTypes from 'prop-types';
import styled from 'styled-components'

const StyledAside = styled.section`
    display: flex;
    justify-content: left;
    align-items: top;
    flex-direction: column;
    padding: 1em 0;
    margin: 0;
    h4 {
        font-weight: bold;
        margin-bottom: .8em;
    }
`

export const Aside = ({ skills, rol }) => {
  return (
    <StyledAside>
      <h4>Rol</h4>
      <ul className="list">
        <li>{ rol }</li>
      </ul>
      <Spacer y={1} />
      <h4>Skills</h4>
      <ul className="list">
          { skills && skills.map((skill, i) => <li key={i}>{skill}</li>) }
      </ul>
    </StyledAside> 
  )
}

Aside.propTypes = {
  skills : PropTypes.array.isRequired,
  rol    : PropTypes.string.isRequired,
}
