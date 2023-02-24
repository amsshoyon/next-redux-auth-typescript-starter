import React, { Fragment, ReactNode } from 'react'

interface pageProps {
    children: ReactNode
}

const AdminLayout = ({ children }: pageProps) => {
    return (
        <Fragment>
            {children}
        </Fragment>
    )
}

export default AdminLayout