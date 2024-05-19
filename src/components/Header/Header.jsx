import React from "react";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { Container, Logo, LogoutBtn, Button } from "../index";

const Header = () => {
  const { status } = useSelector((state) => state.auth);

  const navItems = [
    {
      name: "My Post",
      slug: "/",
      active: status,
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: status,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: status,
    },
  ];

  return (
    <header className="bg-[#d3d9d4]">
      <Container>
        <nav className=" flex gap-2 flex-wrap justify-between items-center  p-2">
          <div>
            <Link to="/">
              <Logo />
            </Link>
          </div>

          <ul className="hidden sm:flex gap-8 items-center font-semibold">
            {navItems.map((item) =>
              item.active ? (
                <li key={item.name}>
                  <Button className="px-2 py-1">
                    <NavLink
                      to={item.slug}
                      className={({ isActive }) =>
                        isActive ? "underline" : ""
                      }
                    >
                      {item.name}
                    </NavLink>
                  </Button>
                </li>
              ) : null
            )}
          </ul>

          <ul className="flex gap-2">
            {!status ? (
              <li className="flex gap-2">
                <Link to="/signup">
                  <Button>Sign Up</Button>
                </Link>
                <Link to="/login">
                  <Button className="">Login</Button>
                </Link>
              </li>
            ) : (
              <>
                <li>
                  <LogoutBtn />
                </li>
              </>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  );
};

export default Header;
