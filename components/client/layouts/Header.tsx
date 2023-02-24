import { Button } from '@mui/material'
import { signOut, useSession } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'

const Header = () => {
    const { status } = useSession()
    const isAuthenticated = status === 'authenticated'

    return (
        <header className='w-full sticky top-0 shadow-sm border-b py-4'>
            <nav className="flex items-center justify-center lg:justify-between flex-wrap container">
                <div className="flex items-center">
                    <Link href="/" className="text-indigo-500 font-bold text-lg">
                        Logo
                    </Link>
                </div>
                <div className="w-full flex-grow lg:flex lg:items-center lg:w-auto text-center hidden">
                    <div className="pt-6 lg:pt-0 lg:flex justify-end flex-1 items-center [&>*]:ml-4">
                        <Link href="/about"> About</Link>

                        {isAuthenticated ?
                            <Button variant='outlined' onClick={()=>signOut()}>Logout</Button>
                            :
                            <Link href="/auth/login">
                                <Button variant='outlined' color='primary'>Login</Button>
                            </Link>
                        }
                    </div>
                </div>
            </nav>
        </header>

    )
}

export default Header