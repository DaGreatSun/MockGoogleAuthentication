import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import doctorRoutes from "routes/doctorRoutes";
import { useRouter } from "next/router";
import { Collapse } from "react-daisyui";
import { BiSubdirectoryRight } from "react-icons/bi";
import Head from "next/head";
import { AiOutlineMenuUnfold, AiOutlineMenuFold } from "react-icons/ai";
import { IoMdArrowDropright } from "react-icons/io";

function DoctorSidebar() {
  /***************************************************************************************/
  //States
  /***************************************************************************************/
  const [selectedPage, setSelectedPage] = useState("");
  const [currentPage, setCurrentPage] = useState("");
  const [availableRoutes, setAvailableRoutes] = useState([]);
  const [state, setState] = useState({});

  const [isOpen, setIsOpen] = useState(false);

  /***************************************************************************************/
  //Var
  /***************************************************************************************/
  const router = useRouter();
  const section = [
    {
      path: ["dashboard"],
      name: "Dashboard",
    },
    {
      path: ["stripe"],
      name: "Stripe",
    },
    {
      path: ["market"],
      name: "Market",
    },
  ];
  /***************************************************************************************/
  //Callbacks
  /***************************************************************************************/
  useEffect(() => {
    var userObject = JSON.parse(localStorage.getItem("userObject"));
    var routes = doctorRoutes;

    let path = "";

    routes.map((route) => {
      let viewArr = [];
      route.views.map((view) => {
        if ("functions" in view && view.functions.length) {
          // Uncomment this for roles to work
          // let found = view.functions.every((api) =>
          //   userObject.api.includes(api),
          // );
          // if (found) {
          //   viewArr.push(view);
          // }
        } else {
          viewArr.push(view);
        }
      });

      route.views = viewArr;
    });

    const pathArr = router.pathname.split("/");
    let currentPath = "";
    let found = false;
    for (let x = pathArr.length - 1; x >= 0; x--) {
      currentPath = pathArr[x];
      if (!found) {
        for (let i = 0; i < section.length; i++) {
          for (let j = 0; j < section[i].path.length; j++) {
            if (currentPath === section[i].path[j]) {
              setSelectedPage(section[i].name);
              setCurrentPage(section[i].name);
              found = true;
            }
          }
        }
      }
    }

    setAvailableRoutes(routes);
    setState(getCollapseStates(doctorRoutes));
  }, [router]);

  function getCollapseStates(routes) {
    let initialState = {};
    routes.map((prop, key) => {
      if (prop.collapse) {
        initialState = {
          [prop.state]: getCollapseInitialState(prop.views),
          ...getCollapseStates(prop.views),
          ...initialState,
        };
      }
      return null;
    });
    return initialState;
  }

  function getCollapseInitialState(routes) {
    routes.map((route) => {
      if (route.collapse && getCollapseInitialState(route.views)) {
        return true;
      } else if (router.pathname.indexOf(route.path) !== -1) {
        return true;
      }
    });
    return false;
  }

  function createLinks(routes) {
    return routes.map((prop, key) => {
      if ("views" in prop && prop.views.length === 0) {
        return null;
      }
      if (prop.collapse) {
        var st = {};
        st[prop["state"]] = !state[prop.state];

        return (
          <div key={key} className="group">
            <Collapse
              key={key}
              icon={`${isOpen && "arrow"}`}
              checkbox={true}
              open={state[prop.state]}
              className={`mx-2 rounded-lg font-medium text-gray-500 transition-all duration-300 ${
                isOpen ? "w-[94%]" : "w-[75%]"
              } `}
              onClick={(e) => {
                handleLinkClick(e, st, prop, prop.views[0], false);
                if (!isOpen) toggleIsOpen();
              }}
            >
              <Collapse.Title
                className={`flex cursor-pointer items-center rounded-lg pl-3 text-sm ${
                  currentPage === prop.name && "bg-blue2"
                } ${currentPage === prop.name && "text-blue1"}`}
              >
                <span className="h-[18px] w-[18px]">{prop.icon}</span>
                <p className={`${isOpen ? "ml-4 w-28" : "hidden w-0"}`}>
                  {prop.name}
                </p>
                {!isOpen && <IoMdArrowDropright />}
              </Collapse.Title>
              <Collapse.Content>
                {/* {prop.views.map((view) => (
                  <div
                    key={view.name}
                    className={`flex font-medium items-center pl-3 rounded-lg mt-5 hover:text-blue1 cursor-pointer`}
                    onClick={(e) => {
                      handleLinkClick(e, st, prop, view, true);
                    }}
                  >
                    <BiSubdirectoryRight className="text-2xl ml-1" />
                    <span className="ml-2 text-xs">{view.name}</span>
                  </div>
                ))} */}

                <>
                  {prop.views.map((view, idx) => {
                    var stMod = {};
                    stMod[view["state"]] = !state[view.state];

                    return (
                      <>
                        {view.modules && view.modules.length > 0 ? (
                          <Collapse
                            key={idx}
                            checkbox={true}
                            open={true}
                            onClick={(e) => {
                              handleLinkClick(e, stMod, prop, view.path, false);
                            }}
                            className="my-0 pl-3 text-sm"
                          >
                            <Collapse.Title className="flex items-center pl-0 pr-0 font-bold">
                              <span className="ml-0">{view.name}</span>
                            </Collapse.Title>

                            <Collapse.Content className="pb-0 pl-0">
                              {view.modules.map((mod, i) => (
                                <div
                                  className={`  mb-3
                              ml-2 flex w-fit cursor-pointer items-center transition-all duration-300 hover:text-blue1 
                              `}
                                  key={`module-${i}`}
                                  onClick={(e) => {
                                    handleLinkClick(e, stMod, prop, mod, true);
                                  }}
                                >
                                  <IoMdArrowDropright />
                                  <span className="ml-0 font-normal">
                                    {mod.name}
                                  </span>
                                </div>
                              ))}
                            </Collapse.Content>
                          </Collapse>
                        ) : (
                          <Collapse className="items-center">
                            <Collapse.Title className="flex items-center font-semibold">
                              <IoMdArrowDropright />
                              <span className="ml-3">{view.name}</span>
                            </Collapse.Title>
                          </Collapse>
                        )}
                      </>
                    );
                  })}
                </>
              </Collapse.Content>
            </Collapse>

            {!isOpen && (
              <div
                key={prop.name}
                className="invisible fixed left-16 top-0 h-full w-80 -translate-x-3 border-r border-gray-200 bg-white pr-7 shadow-xl transition-all duration-100 group-hover:visible group-hover:translate-x-0 group-hover:opacity-100"
              >
                <h1 className="my-5 ml-6 text-lg font-bold">{prop.name}</h1>
                {prop.views.map((view, idx) => {
                  var stMod = {};
                  stMod[view["state"]] = !state[view.state];

                  return (
                    <>
                      {view.modules && view.modules.length > 0 ? (
                        <Collapse
                          key={idx}
                          icon="arrow"
                          checkbox={true}
                          open={state[view.state]}
                          onClick={(e) => {
                            handleLinkClick(e, stMod, prop, view.path, false);
                          }}
                          className="my-0 w-0 items-center group-hover:w-full"
                        >
                          <Collapse.Title className="flex items-center font-semibold">
                            <IoMdArrowDropright />
                            <span className="ml-3 text-base">{view.name}</span>
                          </Collapse.Title>

                          <Collapse.Content>
                            {view.modules.map((mod, idx) => (
                              <div
                                key={idx}
                                className="mb-3 ml-6 flex cursor-pointer items-center hover:text-blue1"
                                onClick={(e) => {
                                  handleLinkClick(e, stMod, prop, mod, true);
                                }}
                              >
                                <IoMdArrowDropright />
                                <span className="ml-3 text-sm">{mod.name}</span>
                              </div>
                            ))}
                          </Collapse.Content>
                        </Collapse>
                      ) : (
                        <Collapse
                          className="my-0 w-0 items-center group-hover:w-full"
                          key={idx}
                        >
                          <Collapse.Title className="flex items-center font-semibold">
                            <IoMdArrowDropright />
                            <span className="ml-3">{view.name}</span>
                          </Collapse.Title>
                        </Collapse>
                      )}
                    </>
                  );
                })}
              </div>
            )}
          </div>
        );
      } else {
        var st = {};
        st[prop["state"]] = !state[prop.state];
        return (
          <Collapse
            key={key}
            open={prop.collapse}
            className={`group relative mx-2 cursor-pointer overflow-visible rounded-lg font-medium text-gray-500 transition-all duration-300 hover:bg-blue2 ${
              isOpen ? "w-[94%]" : "w-[75%]"
            } ${currentPage === prop.name && "bg-blue2"}  ${
              currentPage === prop.name && "text-blue1"
            }`}
            onClick={(e) => {
              handleLinkClick(e, st, prop, prop.views[0], true);
            }}
          >
            <div className={`flex h-full items-center rounded-lg `}>
              <Collapse.Title
                className={`flex w-full items-center pl-3 pr-1 text-sm ${
                  selectedPage === prop.name && "font-semibold text-blue1"
                }`}
              >
                <span className="h-[18px] w-[18px]">{prop.icon}</span>
                <p className={`${isOpen ? "ml-4 w-fit" : "hidden w-0"}`}>
                  {prop.name}
                </p>
                {!isOpen && (
                  <p className="invisible absolute left-full ml-4 w-36 -translate-x-3 rounded-lg bg-blue1 px-3 py-2 text-center text-sm text-white opacity-20 transition-all group-hover:visible group-hover:translate-x-0 group-hover:opacity-100 ">
                    {prop.name}
                  </p>
                )}
              </Collapse.Title>
            </div>
          </Collapse>
        );
      }
    });
  }

  function handleLinkClick(e, st, prop, view, clickedLink) {
    e.preventDefault();
    setState(st);
    setSelectedPage(prop.name);
    if (clickedLink) {
      router.push(view.path);
      setCurrentPage(prop.name);
    }
  }

  function toggleIsOpen() {
    setIsOpen((curr) => !curr);
    if (state) setState(false);
  }

  return (
    <div
      className={`${
        isOpen ? "w-72" : "w-16"
      }  z-[999] h-screen border-r border-gray-200 transition-all duration-300 max-sm:hidden`}
    >
      <Head>
        <title>{currentPage}</title>
      </Head>
      <div
        className={`h-full bg-white py-1 ${
          isOpen && "overflow-x-hidden overflow-y-hidden"
        } `}
      >
        <div className="flex items-center">
          {isOpen ? (
            <div className="mx-auto my-5 flex items-center">
              {/* <Image
                src={"/logo.png"}
                width={200}
                height={52}
                alt="logo"
                className="h-[52px] w-44 cursor-pointer"
                onClick={() => router.push("/dashboard")}
              /> */}
              <div className="ml-2 mr-1 text-[17px] font-bold">
                <span>Grab</span>
                <span className="text-blue-600">Interview</span>
              </div>
              <AiOutlineMenuFold
                className={`ml-4 h-5 w-5 cursor-pointer`}
                onClick={toggleIsOpen}
                title="Close the sidebar"
              />
            </div>
          ) : (
            <AiOutlineMenuUnfold
              className={`m-auto my-3 mr-6 h-[18px] w-[18px] cursor-pointer`}
              onClick={toggleIsOpen}
              title="Open the sidebar"
            />
          )}
        </div>
        {createLinks(availableRoutes)}
      </div>
    </div>
  );
}

export default DoctorSidebar;
