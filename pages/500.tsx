import MotionContainer from '@/components/common/MotionContainer'
import { Button } from '@mui/material'
import Link from 'next/link'
import React from 'react'

const ErrorPage = () => {
    return (
        <MotionContainer>
            <section className="flex items-center h-full p-16">
                <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
                    <div className="max-w-md text-center">
                        <h2 className="mb-8 font-extrabold text-9xl dark:text-gray-600">
                            <span className="sr-only">Error</span>500
                        </h2>
                        <p className="text-2xl font-semibold md:text-3xl">500 - Server-side error occurred</p>
                        <Link href='/'>
                            <Button variant='outlined' color='primary'>Back to homepage</Button>
                        </Link>
                    </div>
                </div>
            </section>
        </MotionContainer>
    )
}

export default ErrorPage