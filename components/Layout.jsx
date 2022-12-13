import PropTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider } from "styled-components";
import { Nav, Footer } from '.';
import { GlobalStyle, theme } from '../styles';

export const Layout = ({ children, title, siteTitle, image, description, keywords, main }) => {

  return (
    <>
      <Head>
        <title>{`${title}` || `${siteTitle}`}</title>
        <meta name = "description"              content = { description } />
        <meta name = "image"                    content = { image } />
        <meta name = "keywords"                 content = { keywords } />

        <meta property = "og:type"              content = "website" />
        <meta property = "og:title"             content = { title } />
        <meta property = "og:description"       content = { description } />
        <meta property = "og:site_name"         content = { siteTitle } />
        <meta property = "og:image"             content = { image } />

        <meta property = "twitter:card"         content = "summary" />
        <meta property = "twitter:title"        content = { title } />
        <meta property = "twitter:description"  content = { description } />

        <link rel="icon" href="/assets/ilustracion-rocio.png" />
      </Head>
      
      <div id="root">
        <ThemeProvider theme = { theme }>
          <GlobalStyle />
          {/* <div> */}
            <Nav />
            <main className = { main }>
                { children }
            </main>
            <Footer />
          {/* </div> */}
        </ThemeProvider>
      </div>
    </> 
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  siteTitle: PropTypes.string,
  description: PropTypes.string,
  keywords: PropTypes.string,
  image: PropTypes.string,
  main: PropTypes.string,
};

Layout.defaultProps = {
  title: 'Rocío Benítez',
  siteTitle: 'Rocío Benítez',
  description: 'Este es el portfolio de Rocío Benítez',
  keywords: 'portfolio, react, nextjs, frontend, developer, frontend developer, javascript, projects',
  image: null,
  main: '',
};
