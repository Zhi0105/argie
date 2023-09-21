import { useEffect, FC } from "react";
import { useRouteStore } from '@_src/assets/Store/RouteStore'
import { motion } from "framer-motion";
import { Initial } from "@_src/Components/Lazy/LazyImage";
import { Links } from "./Links";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faHammer, faBriefcase, faPhoneVolume } from '@fortawesome/free-solid-svg-icons'
import _ from "lodash";

interface NavIconInterface {
  name: string
}

export const Navbar = () => {
  const { route, activeRoute, setActiveRoute } = useRouteStore((state) => ({ //ROUTE STORE
    route: state.route,
    activeRoute: state.activeRoute,
    setActiveRoute: state.setActiveRoute
}))

useEffect(() => {  
  route.pathname !== '/' && route.pathname && setActiveRoute(route.pathname.slice(1))  // HANDLE ACTIVE ROUTES WHEN CLICK BACK BUTTON OF BROWSER
}, [setActiveRoute, route.pathname])


const NavIcons: FC<NavIconInterface> = ({ name }) => {
  if(name === 'about'){
      return(
          <FontAwesomeIcon icon={faUser} fontSize={18} />
      )
  }
  if(name === 'skill'){
      return(
          <FontAwesomeIcon icon={faHammer} fontSize={18} />
      )
  }
  if(name === 'work'){
      return(
          <FontAwesomeIcon icon={faBriefcase} fontSize={18} />
      )
  }
  if(name === 'contact'){
      return(
          <FontAwesomeIcon icon={faPhoneVolume} fontSize={18} />
      )
  }
}

return (
  <>
    {/* DESKTOP */}
    <div className='navbar_menu bg-[#1D1D1D] xs:hidden sm:hidden md:hidden lg:flex xl:flex 2xl:flex justify-between items-center text-sm p-4 border-b-2'>
        <div>
        <Link to="/">
            <Initial width={50} height={50} />
        </Link>
        </div>
        <div className='menu_item flex flex-row gap-8 text-[#08FFD4] text-lg pr-4'>
        {Links.map((link, index) => {
            return (
                <motion.div
                    onClick={() => setActiveRoute(link.title)}
                    key={index}
                    whileHover={{ scale: 1.5, color: "#FAC334" }}
                    whileTap={{ scale: 0.9 }}
                >
                <Link to={`/${link.title}`} className={`capitalize ${activeRoute === link.title && 'text-[#FAC334]'}`}>
                    {link.title}
                </Link>
            </motion.div>
            )
        })}
        </div>
    </div>  
    {/* DESKTOP */}
      {/* MOBILE */}
      <div className='mobile_navbar_wrapper w-screen xs:flex sm:flex md:flex lg:hidden xl:hidden bg-gray-300 text-black fixed bottom-0'>
          <div className='mobile_navbar_items w-full text-sm flex justify-evenly py-4 px-4'>
              {Links.map((link, index) => {
                  return (
                  <Link
                      className={`font-bold flex flex-col text-center capitalize ${activeRoute === link.title && 'text-[#d97706]'}`}
                      onClick={() => setActiveRoute(link.title)}
                      to={`/${link.title}`}
                      key={index}
                  >
                      <NavIcons 
                          name={link.title} 
                      />
                      <label>{link.title}</label>
                  </Link>
                  )
              })}
          </div>
      </div>
      {/* MOBILE */}
  </>
)
}