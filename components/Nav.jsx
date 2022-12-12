import styled from 'styled-components'
import Link from 'next/link'
import { Avatar, Navbar } from '@nextui-org/react'
import { menuItems } from '../data'
import { SmallButton, ActiveLink } from '.'

const StyledHeader = styled.header`
    ${({ theme }) => theme.mixins.flexBetween};
    position: fixed;
    top: 0;
    z-index: 11;
    padding: 0px 50px;
    width: 100%;
    height: var(--nav-height);
    background-color: rgba(10, 25, 47, 0.85);
    filter: none !important;
    pointer-events: auto !important;
    user-select: auto !important;
    backdrop-filter: blur(10px);
    transition: var(--transition);
    @media (max-width: 1080px) {
        padding: 0 40px;
    }
    @media (max-width: 768px) {
        padding: 0 25px;
    }
`
const StyledNav = styled.nav` 
    ${({ theme }) => theme.mixins.flexBetween};
    position: relative;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
`
const StyledLinks = styled.div`
    display: flex;
    align-items: center;
    ul {
        display: flex;
        list-style: none; 
        align-items: center;
    }
    li {
        margin: 0 1em;
        font-size: var(--fz-md);
        font-weight: 600; 
        list-style: none;  
    }
    div {
        padding-left: 1em;
    }
`

export const Nav = () => {
    const Logo = (
        <Navbar.Brand className='logo'>
            <Link href="/" aria-label="home">
                <Avatar
                    size='lg'
                    src="/assets/ilustracion-rocio.png"
                    zoomed
                />
            </Link>
        </Navbar.Brand>
    );

    return (
        <StyledHeader>
            <StyledNav>
                { Logo }
                <StyledLinks>
                    <ul>
                        {
                            menuItems.map( ({ text, href }) => (
                                <li key= { href }>
                                    <ActiveLink  text={ text } href= { href } />
                                </li>
                            ))
                        }
                        <li><SmallButton href='../assets/cv-RocioBenitezGarcia.pdf' text='CV'/></li>
                    </ul>
                </StyledLinks>
            </StyledNav>
        </StyledHeader>
    )
}