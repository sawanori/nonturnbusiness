"use client"

import { FC } from 'react'
import v from '../styles/verticalLine.module.scss'

export const VerticalLine: FC = () => {
    return (
        <>
            <span className={`${v.line}`}></span>
        </>
    )
}
