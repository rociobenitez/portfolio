import Link from 'next/link'
import PropTypes from 'prop-types';

export const Button = ({ href, texto, target }) => {
  return (
    <>
      <Link href={ href } target= { target } className="bigButton"> { texto }</Link>
    </>  
  )
}

Button.propTypes = {
  href:   PropTypes.string.isRequired,
  texto:  PropTypes.string.isRequired,
  target: PropTypes.string,
}

Button.defaultProps = {
  target: '_blank',
}