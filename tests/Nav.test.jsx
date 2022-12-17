import { render } from "@testing-library/react"
import { Nav } from "../components"
import { menuItems } from "../data"

describe('Tests in <Nav />', () => { 
    test('match with snapshot', () => { 
        const { container } = render( <Nav /> ); 
        expect( container ).toMatchSnapshot();
    })

    test('return array items', () => {
        const items = menuItems;
        expect( menuItems.length ).toBeGreaterThan(0);
        expect( menuItems[0] ).toEqual({
            text: expect.any( String ),
            href: expect.any( String ),
        })
    })
})