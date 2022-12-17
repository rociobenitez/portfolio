import { render } from "@testing-library/react"
import { SmallButton } from "../../components"

describe('Tests in <SmallButton />', () => {
    const href = '/'
    const text = 'text small button'

    test('math in snapshot', () => {
        const { container } = render( <SmallButton href={ href } text={ text } />)
        expect( container ).toMatchSnapshot()
    })
})