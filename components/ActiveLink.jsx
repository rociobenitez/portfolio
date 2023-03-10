import PropTypes from 'prop-types';
import { useRouter } from 'next/router'
import Link from 'next/link'

const style = { color: 'var(--green)' }

export const ActiveLink = ({ text, href }) => { 
    const { asPath } = useRouter();
    return (
        <Link href = { href } style = { asPath === href ? style : null }>
            { text }
        </Link>
    )
}

ActiveLink.propTypes = {
    text : PropTypes.string.isRequired,
    href : PropTypes.string.isRequired,
}