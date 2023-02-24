import MotionContainer from '@/components/common/MotionContainer'
import PageLoader from '@/components/common/PageLoader'
import React, { Fragment, ReactNode } from 'react'
import Footer from './Footer'
import Header from './Header'

interface pageProps {
    children: ReactNode
}

const ClientLayout = ({ children }: pageProps) => {
    return (
        <Fragment>
            <Header />
            <PageLoader>
                <main className='min-h-[calc(100vh-152px)] flex flex-col justify-center'>
                    <MotionContainer>
                        {children}
                    </MotionContainer>
                </main>
                <Footer />
            </PageLoader>
        </Fragment>
    )
}

export default ClientLayout