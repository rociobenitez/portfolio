import Link from 'next/link'
import PropTypes from 'prop-types';

export const SmallButton = ({ href, text, target }) => {
  return (
    <>
      <Link href={ href } target= { target } className="smallButton">{ text }</Link>
    </>  
  )
}

SmallButton.propTypes = {
  href:   PropTypes.string.isRequired,
  text:  PropTypes.string.isRequired,
  target: PropTypes.string,
}

SmallButton.defaultProps = {
  target: '_blank',
}