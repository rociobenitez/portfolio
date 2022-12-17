import { render, screen } from "@testing-library/react";
import { CardProject } from "../../components";
import { projects } from "../../data";

describe('Tests in <CardProject />', () => { 

    const project = projects[0]
    const id = 1

    test('match with snapshot', () => {
        const { container } = render( <CardProject project={project} id={id} /> )
        expect( container ).toMatchSnapshot()
    })

    // test('return an object project', () => {
    //     render( <CardProject project = {project} id = {id} /> )
    //     expect( project ).toEqual({
    //         id: expect.any( Number ),
    //         title: expect.any( String ),
    //         subtitle: expect.any( String ),
    //         nameComponent: expect.any( String ),
    //         src: expect.any( String ),
    //         alt: expect.any( String ),
    //         buttons: expect.any( Array ),
    //         skills: expect.any( Array ),
    //         rol: expect.any( String ),
    //         img: expect.any( Array ),
    //         intro: expect.any( String ),
    //     })
    // })

    // test('show the image with the src', () => {
    //     render( <CardProject project = {project} id = {id} /> )
    //     const { src, alt } = screen.getByRole('img')
    //     expect( src ).toBe( src )
    //     expect( alt ).toBe( alt )
    // })

    // test('show the texts in the card', () => {
    //     render( <CardProject project = {project} id = {id} /> )
    //     expect( screen.getByText(project.title)).toBeTruthy()
    //     expect( screen.getByText(project.subtitle)).toBeTruthy()
    // })
})