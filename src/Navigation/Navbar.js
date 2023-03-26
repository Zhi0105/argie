import React from 'react'
import { Link } from 'react-router-dom'
import RouteStore from '../Store/RouteStore'
import { motion } from 'framer-motion'
import _ from 'lodash'

export const Navbar = () => {

    const { route } = RouteStore(); // ROUTE STORE
    let routeDebounce = _.debounce(() => { return ;}, 500) // NAVIGATION HIDE within 0.5 sec if route === /

    if(route.pathname === '/') {
        return routeDebounce()
    }

  return (
    <div className='navbar_menu flex justify-between text-sm md:hidden sm:hidden p-4 shadow-sm'>
        <div>
        <Link to="/">
            Argie
        </Link>
        </div>
        <div className='menu_item flex flex-row gap-6'>
            <motion.div
                whileHover={{ scale: 1.5 }}
                whileTap={{ scale: 0.9 }}

            >
                <Link to="/about">
                    About
                </Link>
            </motion.div>
            <motion.div
                whileHover={{ scale: 1.5 }}
                whileTap={{ scale: 0.9 }}

            >
                <Link to="/skills">
                    Skills
                </Link>
            </motion.div>
            <motion.div
                whileHover={{ scale: 1.5 }}
                whileTap={{ scale: 0.9 }}

            >
                <Link to="/projects">
                    Projects
                </Link>
            </motion.div>
            <motion.div
                whileHover={{ scale: 1.5 }}
                whileTap={{ scale: 0.9 }}

            >
                <Link to="/contacts">
                    Contact
                </Link>
            </motion.div>
        </div>
    </div>  
  )
}
