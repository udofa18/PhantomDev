import {
  Navbar,
  Typography,
  IconButton,
  Button,
  Input,
} from "@material-tailwind/react";
import { BellIcon, Cog6ToothIcon } from "@heroicons/react/24/solid";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

function Navigaiton() {

  return (
    <>
      <div
        // variant="gradient"
        color="blue-gray"
        className=" nav backdrop-blur-2xl backdrop-saturate-100 px-4 py-3 border-b border-yellow-400 fixed w-full z-20 "
      >
        <div className="flex flex-wrap sm:flex-col items-center justify-between gap-y-4 text-white  ">
          <NavLink to="/">
            <Typography
              variant="h6"
              className="mr-4 ml-2 cursor-pointer py-1.5 text-black text-xl text-shadow"
            >
              PhantomDev {" "}
              <span className="text-white">{'< >'}</span>
            </Typography></NavLink>
          <div className="ml-auto flex md:mr-4 text-lime-400 gap-4 sm:m-auto">
            <a href="https://docs.google.com/document/d/1hoLnzDZPdZEWKbhwY_tv9fino-1nSOUq" target="_blank" className="m-auto cursor-pointer btn">
              <FontAwesomeIcon icon={faDownload}></FontAwesomeIcon> CV
            </a>
            <NavLink to="publications" className="m-auto cursor-pointer btn">
              Publications
            </NavLink>
            <NavLink to="projects" className="m-auto cursor-pointer btn">
              Projects
            </NavLink>
            <NavLink to="experience" className="m-auto cursor-pointer btn">
              Experience
            </NavLink>

          </div>

        </div>
      </div>

    </>
  )
}

export default Navigaiton
