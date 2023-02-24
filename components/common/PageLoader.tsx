import { Router } from 'next/router'
import React, { ReactNode, useEffect, useState } from 'react'

const PageLoader = ({ children }: { children: ReactNode }) => {
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const start = () => {
            setLoading(true)
        }
        const end = () => {
            setLoading(false)
        }
        Router.events.on("routeChangeStart", start)
        Router.events.on("routeChangeComplete", end)
        Router.events.on("routeChangeError", end)
        return () => {
            Router.events.off("routeChangeStart", start)
            Router.events.off("routeChangeComplete", end)
            Router.events.off("routeChangeError", end)
        }
    }, [])
    return (
        <div className='relative'>
            <div className={`absolute top-0 left-0 bg-white w-full h-full z-10 opacity-90 transition-all duration-200 ${!loading ? 'invisible opacity-0' : ''}`}></div>
            {children}
        </div>
    )
}

export default PageLoader