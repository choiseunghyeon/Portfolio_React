import React from "react";
import { DeveloperInfo } from "../../../config/Type";
import profilePicture from "../../../asset/images/profilePicture.jpg";
import { FaInstagram, FaGithub, FaBloggerB } from "react-icons/fa";
export const developerInfoStub: DeveloperInfo = {
  title: "Front End Developer",
  subtitle: "최승현",
  content: "",
  imageSrc: profilePicture,
  icons: [
    {
      href: "https://github.com/choiseunghyeon/",
      icon: <FaGithub />,
    },
    {
      href: "https://webigotr.tistory.com/",
      icon: <FaBloggerB />,
    },
    {
      href: "https://www.instagram.com/chshyeon_0_0/?hl=ko",
      icon: <FaInstagram />,
    },
  ],
};
