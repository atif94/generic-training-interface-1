import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarDataInstructor = [
  {
    title: "Home",
    path: "/dashboard",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Uploaded Courses",
    path: "/uploaded",
    icon: <IoIcons.IoIosPaper />,
    cName: "nav-text",
  },
  {
    title: "Published Courses",
    path: "/published",
    icon: <FaIcons.FaCartPlus />,
    cName: "nav-text",
  },
  {
    title: "Unpublished Courses",
    path: "/unpublished",
    icon: <IoIcons.IoMdPeople />,
    cName: "nav-text",
  },
{
  title: "Scenes",
  path: "/createlesson",
  icon: <IoIcons.IoIosPaper />,
  cName: "nav-text",
},
{
    title: "Gradebook",
    path: "#",
    icon: <IoIcons.IoIosPaper />,
    cName: "nav-text",
  },
];
