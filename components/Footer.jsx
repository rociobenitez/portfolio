import React from 'react'
import Link from 'next/link';
import styled from 'styled-components'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { linkedin, github } from '../data';

const StyledFooter = styled.footer`
  witdh: 100%;  
  height: 10vh;
  text-align: center;
  display: flex;
  align-items: center;
  padding: 1em;
`
const StyledCredit = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  color: var(--light-slate);
  font-family: var(--font-mono);
  font-size: var(--fz-xxs);
`
const DivIcons = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1em;
  a {
    margin: 0 .5em;
  }
`

export const Footer = () => {
  return (
    <StyledFooter>
      <StyledCredit>
          <div>Designed &amp; Built by Rocío</div>
          <DivIcons>
            <Link href = { linkedin } >
              <AiFillLinkedin size="2em"/>
            </Link>
            <Link href = { github } >
              <AiFillGithub size="2em"/>
            </Link>
          </DivIcons>
      </StyledCredit>
    </StyledFooter>
  )
}
