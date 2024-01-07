"use client"
import { useCallback, useEffect, useState, createContext, FC, ReactNode } from 'react'

interface ScrollValue {
    innerWidth: number
}

interface ObserverProps {
    children: ReactNode
}


export const SizeContext = createContext<ScrollValue>({
    innerWidth: 0
})

export const SizeObserver: FC<ObserverProps> = ({ children }) => {
    const [innerWidth, setInnerWidth] = useState(0)
    const handleResize = useCallback(() => {
        setInnerWidth(window.innerWidth)
    }, [])
    useEffect(() => {
        handleResize()
        window.addEventListener('resize', handleResize, { passive: true })
        return () => window.removeEventListener('resize', handleResize)
    }, [handleResize])
    return (
        <SizeContext.Provider value={{ innerWidth }}>
            {children}
        </SizeContext.Provider>
    )
}
