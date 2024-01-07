"use client"
import { useState, useEffect, useCallback, createContext, FC, ReactNode } from 'react'

interface ScrollValue {
    scrollY: number
}

interface Props {
    children: ReactNode
}

export const ScrollContext = createContext<ScrollValue>({
    scrollY: 0
})

const ScrollObserver: FC<Props> = ({ children }) => {
    const [scrollY, setScrollY] = useState(0)
    const handleScroll = useCallback(() => {
        setScrollY(window.scrollY)
    }, [])
    useEffect(() => {
        document.addEventListener('scroll', handleScroll, { passive: true })
        return () => document.removeEventListener('scroll', handleScroll)
    }, [handleScroll])
    return (
        <ScrollContext.Provider value={{ scrollY }}>
            {children}
        </ScrollContext.Provider>
    )
}

export default ScrollObserver
