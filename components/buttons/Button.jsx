import PropTypes from 'prop-types';

export const Button = ({ href, text, target }) => {
  return (
 <a href={ href } target= { target } rel='noreferrer noopener' className="bigButton">{ text }</a>
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
