import Navbar from './Navbar'
import Footer from './Footer'

const Layout = ({children}) => {
  return (
    <div>
        <Navbar/>
        <main className='min-h-[70vh]'>{children}</main>
        <Footer/>
    </div>
  )
}

export default Layout