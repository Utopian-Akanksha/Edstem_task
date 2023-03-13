import React from 'react'
import { NavLink } from 'react-router-dom'

const nav=[
    {
        path:"/",
        ele:"Home"
    },
    {
        path:"/list",
        ele:"List"
    },
]

const Navbar = () => {
  return (
    <div>
        {
           nav.map((item)=>(
            <NavLink
              to={item.path}
              style={({ isActive, isPending }) => {
                return {
                  fontWeight: isActive ? "bold" : "",
                  color: isPending ? "red" : "black",
                };
              }}>
             {item.ele}
             </NavLink>
           ))
        }
        </div>
  )
}

export default Navbar