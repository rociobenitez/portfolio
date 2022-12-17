import { render, screen } from "@testing-library/react"
import { ActiveLink } from "../components"

describe('Puebas en <ActiveLink />', () => { 

    const href = '/'
    const text = 'text button'

    test('match with snapshot', () => {
        const { container } = render( <ActiveLink href={href} text={text} /> )
        expect( container ).toMatchSnapshot();
    })

    test('show the text in a link', () => {
        render( <ActiveLink href={href} text={text}/> )
        expect( screen.getByRole('link').innerHTML ).toContain( text );
        // screen.debug();
    })
})