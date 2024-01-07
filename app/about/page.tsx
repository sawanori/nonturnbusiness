"use client"
import {FC} from "react"
import Mansonry from "../components/masonry"
import { Concept } from "../components/concept"
import AboutTop from "../components/abouttop"
import { AboutConcept } from "../components/aboutconcept"

const About:FC = () => {
  return (
    <>
    <AboutTop/>
    <AboutConcept/>
    </>
  )
}

export default About
