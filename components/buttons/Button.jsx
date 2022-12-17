import Link from 'next/link'
import PropTypes from 'prop-types';

export const Button = ({ href, text, target }) => {
  return (
    <>
      <Link href={ href } target= { target } className="bigButton">{ text }</Link>
    </>  
  )
}

Button.propTypes = {
  href:   PropTypes.string.isRequired,
  text:  PropTypes.string.isRequired,
  target: PropTypes.string,
}

Button.defaultProps = {
  target: '_blank',
}