import PropTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider } from "styled-components";
import { Nav, Footer } from '.';
import { GlobalStyle, theme } from '../styles';

export const Layout = ({ children, title, image, description, keywords }) => {

  const origin = (typeof window === 'undefined') ? '' : window.location.origin;

  return (
    <>
      <Head>
        <title>{ title }</title>
        <meta name = "description"              content = { description } />
        <meta name = "image"                    content = { image } />
        <meta name = "keywords"                 content = { keywords } />

        <meta property = "og:type"              content = "website" />
        <meta property = "og:title"             content = { title } />
        <meta property = "og:description"       content = { description } />
        <meta property = "og:site_name"         content = { title } />
        <meta property = "og:image"             content = { `${ origin }/assets/cover-portfolio-rociobenitez.png` } />

        <meta property = "twitter:card"         content = "summary" />
        <meta property = "twitter:title"        content = { title } />
        <meta property = "twitter:description"  content = { description } />

        <link rel="icon" href="/assets/ilustracion-rocio.png" />
      </Head>
      <ThemeProvider theme = { theme }>
        <GlobalStyle />
          <Nav />
          <main>
              { children }
          </main>
          <Footer />
      </ThemeProvider>
    </> 
  )
}

Layout.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  description: PropTypes.string,
  keywords: PropTypes.string,
  image: PropTypes.string,
};

Layout.defaultProps = {
  title: 'Rocío Benítez',
  description: 'Este es el portfolio de Rocío Benítez',
  keywords: 'portfolio, react, nextjs, frontend, developer, frontend developer, javascript, projects',
  image: null,
};
