import {
    Navbar,
    Typography,
    IconButton,
    Button,
    Input,
  } from "@material-tailwind/react";
  import { BellIcon, Cog6ToothIcon } from "@heroicons/react/24/solid";
import { NavLink } from "react-router-dom";

  function Navigaiton() {

    return (
      <>
      <div
      variant="gradient"
      color="blue-gray"
      className="  from-blue-gray-900 to-blue-gray-800 px-4 py-3 border-b-2 border-yellow-400  "
    >
      <div className="flex flex-wrap items-center justify-between gap-y-4 text-white">
      <NavLink to="/"> 
        <Typography
          variant="h6"
          className="mr-4 ml-2 cursor-pointer py-1.5 text-lime-400 text-xl"
        >
         PhantomDev {" "}
         <span className="text-white">{'< >'}</span>
        </Typography></NavLink> 
        <div className="ml-auto flex gap-1 md:mr-4 text-lime-400 gap-4 ">
         <a className="m-auto cursor-pointer btn"> 
           CV
         </a>
         <NavLink to="publications" className="m-auto cursor-pointer btn"> 
          Publications
         </NavLink>
         <NavLink to="projects" className="m-auto cursor-pointer btn"> 
          Projects
         </NavLink>
          <IconButton variant="text" color="white">
            <BellIcon className="h-4 w-4" />
          </IconButton>
        </div>
       
      </div>
    </div>
       
      </>
    )
  }
  
  export default Navigaiton
  