import { render } from "@testing-library/react"
import React from "react"
import { Layout } from "../components"

describe('Tests in <Layout />', () => { 

  const title = 'Este es el titulo'

  test('match with snapshot', () => {
    const { container } = render( <Layout title = { title } /> )
    expect( container ).toMatchSnapshot()
  })

})

