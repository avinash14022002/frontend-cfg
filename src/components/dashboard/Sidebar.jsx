import { Fragment, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import { Dialog, Transition } from "@headlessui/react";
// import Logo from "../../assets/images/logo.svg";
import {
  MenuAlt2Icon,
  ViewListIcon,
  DocumentSearchIcon,
  ClipboardCheckIcon,
  UserCircleIcon,
} from "@heroicons/react/outline";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function StudentSidebar() {
  const [navigation, setNavigation] = useState([
    {
      name: "All Jobs",
      pathname: "/dashboard/alljobs",
      selected: false,
      icon: DocumentSearchIcon,
    },
    {
      name: "Profile",
      pathname: "/dashboard/profile",
      selected: false,
      icon: ViewListIcon,
    },
    {
      name: "My Tests",
      pathname: "/dashboard/mytests",
      selected: false,
      icon: ClipboardCheckIcon,
    },
    {
      name: "Chats",
      pathname: "/dashboard/chats",
      selected: false,
      icon: UserCircleIcon,
    },
  ]);

  const navigate = useNavigate();

  const handleNavigation = (pathname) => {
    setNavigation((previousState) => {
      return previousState.map((tab) => {
        if (tab.pathname === pathname) {
          tab.selected = true;
        } else {
          tab.selected = false;
        }

        return tab;
      });
    });

    navigate(pathname);
  };

  useEffect(() => {
    handleNavigation(window.location.pathname);
  }, []);

  return (
    <>
      <div className="flex">
        {/* Narrow sidebar */}
        <div className="hidden w-28 bg-[#88CA95] overflow-y-auto sm:block">
          <div className="w-full py-6 flex flex-col items-center">
            <button
              onClick={() => handleNavigation(navigation[0].pathname)}
              className="flex items-center flex-shrink-0"
            >
              {/* <img className="h-auto w-20 ml-3" src={Logo} alt="Workflow" /> */}
            </button>
            <div className="flex-1 mt-6 w-full px-2 space-y-1 text-center">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  type="button"
                  onClick={() => handleNavigation(item.pathname)}
                  className={classNames(
                    item.selected
                      ? "bg-black text-white"
                      : "text-black hover:bg-black hover:text-white",
                    "group w-full p-3 rounded-md flex flex-col items-center text-xs font-medium"
                  )}
                >
                  <item.icon
                    className={classNames(
                      item.selected
                        ? "text-white"
                        : "text-black group-hover:text-white",
                      "h-6 w-6"
                    )}
                    aria-hidden="true"
                  />
                  <span className="mt-2">{item.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
        {/* Mobile menu */}

        {/* Content area */}
      </div>
    </>
  );
}

export default StudentSidebar;
