import Link from "next/link";
import Router from "next/router";
import { useContext, useState } from "react";
import { AuthContext } from "../Controller/AuthContext";
import Image from "next/image";
import { Popover } from "@headlessui/react";
import { usePopper } from "react-popper";

function NavigationRow() {
  let [referenceElement, setReferenceElement] = useState();
  let [popperElement, setPopperElement] = useState();
  let { styles, attributes } = usePopper(referenceElement, popperElement);
  // eslint-disable-next-line no-undef
  let backend = process.env.NEXT_PUBLIC_BACKEND;

  const logoutHandler = (e) => {
    e.preventDefault();
    fetch(backend + "/user/logout", {
      method: "POST",
      mode: "cors",
      credentials: "include",
      headers: {
        "Content-Type": "text/plain",
      },
      body: "",
    })
      .then((res) => res.json())
      .then((res) => {
        Auth.removeRole();
      })
      .catch((err) => {
        console.log(err);
      });
    Router.push("/");
  };

  const Auth = useContext(AuthContext);
  const pages = [
    {
      path: "/berita",
      label: "Berita",
    },
  ];

  let profile = [];

  if (Auth.role == "User") {
    profile.push(
      {
        path: "/dashboard",
        label: "Dashboard",
      },
      {
        path: "/logout",
        label: "Logout",
      }
    );
  } else if (Auth.role == "Admin") {
    profile.push(
      {
        path: "/admin/berita",
        label: "Dashboard",
      },
      {
        path: "/logout",
        label: "Logout",
      }
    );
  } else {
    profile.push(
      {
        path: "/registration",
        label: "Registrasi",
      },
      {
        path: "/login",
        label: "Login",
      }
    );
  }

  const items = pages.map((page) => {
    return (
      <Link href={page.path} key={page.path}>
        <button className="py-3 px-3 text-text text-l font-bold focus:outline-none p-4">
          {page.label}
        </button>
      </Link>
    );
  });
  const hamburgerItems = pages.map((page) => {
    return (
      <Link href={page.path} key={page.path}>
        <div className='w-5/6 flex justify-center'>
          <button className="py-3 px-3 text-primary text-l focus:outline-none font-bold p-4">
            {page.label}
          </button>
        </div>
      </Link>
    );
  });

  const profileItems = profile.map((page) => {
    if (page.path == "/logout") {
      return (
        <button
          onClick={logoutHandler}
          className="py-2 px-3 text-primary text-l focus:outline-none font-bold p-4"
        >
          Logout
        </button>
      );
    } else {
      return (
        <Link href={page.path} key={page.path}>
          <button className="py-2 px-3 text-primary focus:outline-none text-l font-bold p-4">
            {page.label}
          </button>
        </Link>
      );
    }
  });
  return (
    <nav className="fixed bg-primary h-16 w-screen px-3 flex items-center justify-end ">
      <div className="flex-1">
        <Link href="/" key="/">
          <button className="mt-1 focus:outline-none">
            <Image
              src="/img/logo640x640.png"
              layout="fixed"
              width={40}
              height={40}
            />
          </button>
        </Link>
      </div>

      {/* Desktop button */}
      <div className="hidden md:block">{items}</div>

      <Popover.Group className="overflow-hidden flex">
        {/* Mobile button */}
        <Popover className="md:hidden">
          <Popover.Button
            ref={setReferenceElement}
            className="text-text focus:outline-none"
          >
            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
              <path
                fillRule="evenodd"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
              ></path>
            </svg>
          </Popover.Button>

          <Popover.Panel
            ref={setPopperElement}
            style={styles.popper}
            {...attributes.popper}
          >
            <div className="w-screen flex justify-center">
              <div className="flex flex-col items-center mt-2 rounded-lg bg-secondary w-5/6">
                {hamburgerItems}
              </div>
            </div>
          </Popover.Panel>
        </Popover>

        {/* Profile icon */}
        <Popover className="">
          <Popover.Button
            ref={setReferenceElement}
            className="mx-4 text-secondary focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="bi bi-person-circle"
              viewBox="0 0 16 16"
            >
              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
              <path
                fillRule="evenodd"
                d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
              />
            </svg>
          </Popover.Button>

          <Popover.Panel
            ref={setPopperElement}
            style={styles.popper}
            {...attributes.popper}
          >
            <div className="flex flex-col items-center mr-4 mt-2 rounded-lg bg-secondary ">
              {profileItems}
            </div>
          </Popover.Panel>
        </Popover>
      </Popover.Group>
    </nav>
  );
}

export default NavigationRow;
