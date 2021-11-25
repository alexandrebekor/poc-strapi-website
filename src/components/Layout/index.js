import React from 'react'
import Footer from '../Footer'
import Header from '../Header'


const Layout = ({ children }) => {
    return (
        <div className="flex flex-col px-2 lg:px-32 gap-2 min-h-screen">
            <Header />
            <main className="flex-grow">
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default Layout