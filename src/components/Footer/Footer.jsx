import React from "react";
import { Github, LinkedinIcon, Twitter, Instagram } from "lucide-react";
import { Container } from "../index";
import SocialLinkBtn from "../SocialLinkBtn";

const Footer = () => {
  const navItems = [
    {
      icon: Github,
      url: "https://github.com/Ans-hamad",
    },
    {
      icon: LinkedinIcon,
      url: "https://www.linkedin.com/in/muhammad-anss-hamad/",
    },
    {
      icon: Twitter,
      url: "https://twitter.com/Ansi_21",
    },
    {
      icon: Instagram,
      url: "https://www.instagram.com/ansi_21/?next=%2F",
    },
  ];
  return (
    <footer className="py-4 bg-[#d3d9d4]">
      <Container>
        <div>
          <ul className="flex flex-wrap justify-center items-center gap-6 ">
            {navItems.map((item, index) => (
              <li key={index}>
                <SocialLinkBtn url={item.url}>
                  <item.icon />
                </SocialLinkBtn>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
