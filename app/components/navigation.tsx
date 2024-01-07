"use client";
import {FC, useState, useEffect,} from 'react'
import {usePathname} from "next/navigation"
import Link from 'next/link'
import n from '../styles/navigation.module.scss'

export const Navigation: FC = () => {
  const [isOpen, setIsOpen] = useState(false)

  const pathname = usePathname()
  
  useEffect(() => {
      window.scrollTo(0, 0)
    }, [pathname])
    

  const toggleNavigation = () => {
    setIsOpen(!isOpen)
  }

  const closeNavigation = () => {
    setIsOpen(false)
  }

    return (
        <>
            <div className={`${n.navigation}`}>
                <input type="checkbox" className={`${n.navigation__checkbox}`} id="navi-toggle" checked={isOpen} onChange={toggleNavigation}></input>
                <label htmlFor="navi-toggle" className={`${n.navigation__button}`} >
                    <span className={`${n.navigation__icon}`}>&nbsp;</span>
                </label>
                <div className={`${n.navigation__background}`}>&nbsp;</div>
                <nav className={`${n.navigation__nav}`}>
                    <ul className={`${n.navigation__list}`}>
                        <li className={`${n.navigation__item}`} onClick={closeNavigation}><Link  className={`${n.navigation__link}`} href="/"><span>01</span>top page</Link></li>
                        <li className={`${n.navigation__item}`} onClick={closeNavigation}><Link  className={`${n.navigation__link}`} href="/about"><span>02</span>About</Link></li>
                        <li className={`${n.navigation__item}`} onClick={closeNavigation}><Link  className={`${n.navigation__link}`} href="/movie"><span>03</span>Movie</Link></li>
                        <li className={`${n.navigation__item}`} onClick={closeNavigation}><Link  className={`${n.navigation__link}`} href="/photo"><span>04</span>photo</Link></li>
                    </ul> 
                </nav>
            </div>
        </>
    )
}
