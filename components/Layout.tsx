import Header from './Header'

const Layout = ({ children }) => {
    return (
        <div>
            <Header />
            <div className="container mx-auto mt-16">
                {children}
            </div>
        </div>
    )
}

export default Layout