  /* Header welcoming users to the site (by their first and last name if logged in) */
  /* Logged-in: 1. Should have a link to → My Pets Page 
      2. Has access to navigate to profile settings  */
  /* Logged-out: Login/Signup button */
  /* Text explaining what the service is. */
  /* Search button (can either be a link to search page or open modal of search component)*/

import {useState} from 'react'
import {LoginModal} from 'pages/Login'
import {SignupModal} from 'pages/SignUp'
import {SignModal} from 'pages/Sign/SignModal'
import {Section} from 'components/layouts'
import {HomeHero, HomeAbout, HomePets} from './sections'
import {ModalProvider as ModelRouter, useModal} from 'pages/Sign/ModalProvider'

export default function HomeContainer() {
  const [open, setOpen] = useState(false)

  const handleOpenModal = () => {
    setOpen(true)
  }

  const handleCloseModal = () => {
    setOpen(false)
  }

    return (
      <>
        <Section>
          <HomeHero userName={null} LoginModal={true} onLogin={handleOpenModal} />
        </Section>
        <Section overlay="#ebe7e9">
          <HomeAbout />
        </Section>
        <Section>
          <HomePets />
        </Section>
        <SignModal open={open} onClose={handleCloseModal} />
      </>
    )
  }
