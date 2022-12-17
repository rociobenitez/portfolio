import React from 'react'
import Link from 'next/link';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { linkedin, github } from '../data';
import styles from './Footer.module.css'

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
          <div>Designed &amp; Built by Rocío</div>
          <div className={styles.divIcons}>
            <a href = { linkedin } target='_blank' rel='noreferrer'>
              <AiFillLinkedin size="2em"/>
            </a>
            <a href = { github } target='_blank' rel='noreferrer'>
              <AiFillGithub size="2em"/>
            </a>
          </div>
      </div>
    </footer>
  )
}
