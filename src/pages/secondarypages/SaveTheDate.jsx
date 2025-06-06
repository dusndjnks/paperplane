import { NavLink } from 'react-router-dom'
import Layout from '../../components/Layout'
import main from "../../images/main photo.webp"

const SaveTheDate = () => {
  return (
    <Layout>
        <div className="relative h-screen w-full">
  {/* Background Image */}
  <img
    src={main}
    alt="Hero"
    className="absolute inset-0 w-full h-full object-cover"
  />

  {/* Overlay (optional, for better text readability) */}
  <div className="absolute inset-0 bg-black/40" />

  {/* Content */}
  <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
    <h1 className="text-white font-cormorant leading-tight
                   text-[42px] sm:text-[60px] md:text-[80px] lg:text-[100px]">
      Save The Date
    </h1>
      <NavLink to="/gallery" className="mt-6 font-cormorant text-black text-xl sm:text-2xl px-6 py-2 bg-white border border-white opacity-70 hover:opacity-100 transition duration-300 rounded-lg">
      Explore All
    </NavLink>
  </div>
</div>

    </Layout>
  )
}

export default SaveTheDate