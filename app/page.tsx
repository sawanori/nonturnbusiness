import Image from 'next/image'
import variables from './styles/variables.module.scss'
import Masthead from './components/masthead'
import Mansonry from './components/masonry'
import { Concept } from './components/concept'
import { Works } from './components/works'
import { TrustedBy } from './components/trustedby'
import { MovieList } from './components/movie-list'
import { ContactForm } from './components/contactform'
import { ContactUs } from './components/contact-us'
export default function Home() {
  return (
      <>
       <Masthead/> 
       <Concept/>
       <Works/>
       <Mansonry/>
       <MovieList/>
       <TrustedBy/>
       <ContactForm/>
      </>

  )
}
