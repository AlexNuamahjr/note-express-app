import React from "react";
import SideBar from "./SideBar";

const Header = () => {
  return (
    <>
      <div className="iq-top-navbar">
        <div className="iq-navbar-custom">
          <nav className="navbar navbar-expand-lg navbar-light p-0">
            <div className="iq-navbar-logo d-flex align-items-center justify-content-between">
              <i className="ri-menu-line wrapper-menu"></i>
              <a href="../backend/index.html" className="header-logo">
                <img
                  src="../assets/images/logo.png"
                  className="img-fluid rounded-normal light-logo"
                  alt="logo"
                />
              </a>
            </div>
            <div className="d-flex align-items-center">
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-label="Toggle navigation"
              >
                <i className="ri-menu-3-line"></i>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav ml-auto navbar-list align-items-center">
                  <li className="nav-item nav-icon search-content">
                    <a
                      href="#"
                      className="search-toggle rounded"
                      id="h1-dropdownSearch"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i className="ri-search-line"></i>
                    </a>
                    <div
                      className="iq-search-bar iq-sub-dropdown dropdown-menu"
                      aria-labelledby="h1-dropdownSearch"
                    >
                      <form action="#" className="searchbox p-2">
                        <div className="form-group mb-0 position-relative">
                          <input
                            type="text"
                            className="text search-input font-size-12"
                            placeholder="type here to search..."
                          />
                          <a href="#" className="search-link">
                            <i className="las la-search"></i>
                          </a>
                        </div>
                      </form>
                    </div>
                  </li>
                  <li className="nav-item nav-icon dropdown mail-content">
                    <a
                      href="#"
                      className="search-toggle dropdown-toggle nav-icon-1"
                      id="h1-dropdownMenuButton2"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i className="">
                        <svg
                          width="20"
                          className="svg-icon"
                          id="main-n-010"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                      </i>
                      <span className="badge badge-primary count-mail mail rounded-circle">
                        2
                      </span>
                      <span className="bg-primary"></span>
                    </a>
                    <div
                      className="iq-sub-dropdown dropdown-menu"
                      aria-labelledby="h1-dropdownMenuButton2"
                    >
                      <div className="card shadow-none m-0">
                        <div className="card-body p-0">
                          <div className="px-3 pt-0 pb-0">
                            <a href="#" className="iq-sub-card">
                              <div className="media align-items-center cust-card py-3 border-bottom">
                                <div className="">
                                  <img
                                    className="avatar-50 rounded-small"
                                    src="../assets/images/user/01.jpg"
                                    alt="01"
                                  />
                                </div>
                                <div className="media-body ml-3">
                                  <div className="d-flex align-items-center justify-content-between">
                                    <h5 className="mb-0">Emma Watson</h5>
                                    <small className="text-dark">
                                      <b>12 : 47 pm</b>
                                    </small>
                                  </div>
                                  <small className="mb-0">
                                    Lorem ipsum dolor sit amet
                                  </small>
                                </div>
                              </div>
                            </a>
                            <a href="#" className="iq-sub-card">
                              <div className="media align-items-center cust-card py-3 border-bottom">
                                <div className="">
                                  <img
                                    className="avatar-50 rounded-small"
                                    src="../assets/images/user/02.jpg"
                                    alt="02"
                                  />
                                </div>
                                <div className="media-body ml-3">
                                  <div className="d-flex align-items-center justify-content-between">
                                    <h5 className="mb-0">Ashlynn Franci</h5>
                                    <small className="text-dark">
                                      <b>11 : 30 pm</b>
                                    </small>
                                  </div>
                                  <small className="mb-0">
                                    Lorem ipsum dolor sit amet
                                  </small>
                                </div>
                              </div>
                            </a>
                            <a href="#" className="iq-sub-card">
                              <div className="media align-items-center cust-card py-3">
                                <div className="">
                                  <img
                                    className="avatar-50 rounded-small"
                                    src="../assets/images/user/03.jpg"
                                    alt="03"
                                  />
                                </div>
                                <div className="media-body ml-3">
                                  <div className="d-flex align-items-center justify-content-between">
                                    <h5 className="mb-0">Kianna Carder</h5>
                                    <small className="text-dark">
                                      <b>11 : 21 pm</b>
                                    </small>
                                  </div>
                                  <small className="mb-0">
                                    Lorem ipsum dolor sit amet
                                  </small>
                                </div>
                              </div>
                            </a>
                          </div>
                          <a
                            className="btn btn-block btn-primary position-relative text-center"
                            href="#"
                            role="button"
                          >
                            View All
                          </a>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="nav-item nav-icon dropdown mail-content">
                    <a
                      href="#"
                      className="search-toggle dropdown-toggle nav-icon-1"
                      id="h1-dropdownMenuButton004"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i className="">
                        <svg
                          width="20"
                          className="svg-icon"
                          id="main-n-020"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                          />
                        </svg>
                      </i>
                      <span className="badge badge-primary count-mail rounded-circle">
                        2
                      </span>
                      <span className="bg-primary"></span>
                    </a>
                    <div
                      className="iq-sub-dropdown dropdown-menu"
                      aria-labelledby="h1-dropdownMenuButton004"
                    >
                      <div className="card shadow-none m-0">
                        <div className="card-body p-0">
                          <div className="px-3 pt-0 pb-0">
                            <a href="#" className="iq-sub-card">
                              <div className="media align-items-center cust-card py-3 border-bottom">
                                <div className="">
                                  <img
                                    className="avatar-50 rounded-small"
                                    src="../assets/images/user/01.jpg"
                                    alt="01"
                                  />
                                </div>
                                <div className="media-body ml-3">
                                  <div className="d-flex align-items-center justify-content-between">
                                    <h5 className="mb-0">Emma Watson</h5>
                                    <small className="text-dark">
                                      <b>12 : 47 pm</b>
                                    </small>
                                  </div>
                                  <small className="mb-0">
                                    Lorem ipsum dolor sit amet
                                  </small>
                                </div>
                              </div>
                            </a>
                            <a href="#" className="iq-sub-card">
                              <div className="media align-items-center cust-card py-3 border-bottom">
                                <div className="">
                                  <img
                                    className="avatar-50 rounded-small"
                                    src="../assets/images/user/02.jpg"
                                    alt="02"
                                  />
                                </div>
                                <div className="media-body ml-3">
                                  <div className="d-flex align-items-center justify-content-between">
                                    <h5 className="mb-0">Ashlynn Franci</h5>
                                    <small className="text-dark">
                                      <b>11 : 30 pm</b>
                                    </small>
                                  </div>
                                  <small className="mb-0">
                                    Lorem ipsum dolor sit amet
                                  </small>
                                </div>
                              </div>
                            </a>
                            <a href="#" className="iq-sub-card">
                              <div className="media align-items-center cust-card py-3">
                                <div className="">
                                  <img
                                    className="avatar-50 rounded-small"
                                    src="../assets/images/user/03.jpg"
                                    alt="03"
                                  />
                                </div>
                                <div className="media-body ml-3">
                                  <div className="d-flex align-items-center justify-content-between">
                                    <h5 className="mb-0">Kianna Carder</h5>
                                    <small className="text-dark">
                                      <b>11 : 21 pm</b>
                                    </small>
                                  </div>
                                  <small className="mb-0">
                                    Lorem ipsum dolor sit amet
                                  </small>
                                </div>
                              </div>
                            </a>
                          </div>
                          <a
                            className="btn btn-block btn-primary position-relative text-center"
                            href="#"
                            role="button"
                          >
                            View All
                          </a>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="caption-content">
                    <a
                      href="#"
                      className="iq-user-toggle d-flex align-items-center justify-content-between"
                      id="h-dropdownMenuButton001"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <img
                        src="../assets/images/user/1.jpg"
                        className="img-fluid rounded avatar-50"
                        alt="user"
                      />
                    </a>
                    <div
                      className="dropdown-menu dropdown-menu-right w-100 border-0 py-2"
                      aria-labelledby="h-dropdownMenuButton001"
                    >
                      <a
                        className="dropdown-item mb-2"
                        href="../app/user-profile.html"
                      >
                        <i className="lar la-user-circle font-size-20 mr-1"></i>
                        <span className="mt-2">My Profile</span>
                      </a>
                      <a
                        className="dropdown-item mb-2"
                        href="../app/user-profile-edit.html"
                      >
                        <i className="las la-user-edit font-size-20 mr-1"></i>
                        <span>Edit Profile</span>
                      </a>
                      <a
                        className="dropdown-item mb-2"
                        href="../app/user-account-setting.html"
                      >
                        <i className="las la-user-cog font-size-20 mr-1"></i>
                        <span>Account Settings</span>
                      </a>
                      <a
                        className="dropdown-item"
                        href="../app/user-privacy-setting.html"
                      >
                        <i className="las la-user-shield font-size-20 mr-1"></i>
                        <span>Privacy Settings</span>
                      </a>
                      <hr className="my-1" />
                      <a className="dropdown-item" href="../backend/index.html">
                        <i className="las la-sign-out-alt font-size-20 mr-1"></i>
                        <span>Logout</span>
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
      <SideBar />
      {/* <div className="iq-sidebar sidebar-default">
        <div className="iq-sidebar-logo d-flex align-items-center justify-content-between">
          <a href="../backend/index.html" className="header-logo">
            <img
              src="../assets/images/logo.png"
              className="img-fluid rounded-normal light-logo"
              alt="logo"
            />
            <h4 className="logo-title ml-3">NotePlus</h4>
          </a>
          <div className="iq-menu-bt-sidebar">
            <i className="las la-times wrapper-menu"></i>
          </div>
        </div>
        <div className="sidebar-caption dropdown">
          <a
            href="#"
            className="iq-user-toggle d-flex align-items-center justify-content-between"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <img
              src="../assets/images/user/1.jpg"
              className="img-fluid rounded avatar-50 mr-3"
              alt="user"
            />
            <div className="caption">
              <h6 className="mb-0 line-height">Bud Wiser</h6>
            </div>
            <i className="las la-angle-down"></i>
          </a>
          <div
            className="dropdown-menu w-100 border-0 my-2"
            aria-labelledby="dropdownMenuButton"
          >
            <a className="dropdown-item mb-2" href="../app/user-profile.html">
              <i className="lar la-user-circle font-size-20 mr-1"></i>
              <span className="mt-2">My Profile</span>
            </a>
            <a className="dropdown-item mb-2" href="../app/user-profile-edit.html">
              <i className="las la-user-edit font-size-20 mr-1"></i>
              <span>Edit Profile</span>
            </a>
            <a
              className="dropdown-item mb-2"
              href="../app/user-account-setting.html"
            >
              <i className="las la-user-cog font-size-20 mr-1"></i>
              <span>Account Settings</span>
            </a>
            <a
              className="dropdown-item mb-3"
              href="../app/user-privacy-setting.html"
            >
              <i className="las la-user-shield font-size-20 mr-1"></i>
              <span>Privacy Settings</span>
            </a>
            <hr className="my-2" />
            <a className="dropdown-item" href="../backend/auth-sign-in.html">
              <i className="las la-sign-out-alt font-size-20 mr-1"></i>
              <span>Logout</span>
            </a>
          </div>
        </div>
        <div className="data-scrollbar" data-scroll="1">
          <div className="iq-search-bar device-search mb-3">
            <form action="#" className="searchbox">
              <a className="search-link" href="#">
                <i className="ri-search-line"></i>
              </a>
              <input
                type="text"
                className="text search-input"
                placeholder="Search"
              />
            </form>
          </div>
          <nav className="iq-sidebar-menu">
            <ul id="iq-sidebar-toggle" className="iq-menu">
              <li className="active">
                <a href="../backend/index.html" className="svg-icon">
                  <i>
                    <svg
                      className="svg-icon"
                      id="iq-main-1"
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                      />
                    </svg>
                  </i>
                  <span>Your Notes</span>
                </a>
                <ul
                  id="index"
                  className="iq-submenu collapse"
                  data-parent="#iq-sidebar-toggle"
                ></ul>
              </li>
              <li className="">
                <a
                  href="#notebooks"
                  className="collapsed svg-icon"
                  data-toggle="collapse"
                  aria-expanded="false"
                >
                  <i>
                    <svg
                      width="20"
                      className="svg-icon"
                      id="iq-main-2"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 19a2 2 0 01-2-2V7a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1M5 19h14a2 2 0 002-2v-5a2 2 0 00-2-2H9a2 2 0 00-2 2v5a2 2 0 01-2 2z"
                      />
                    </svg>
                  </i>
                  <span>Notebooks</span>
                  <i className="las la-angle-right iq-arrow-right arrow-active"></i>
                  <i className="las la-angle-down iq-arrow-right arrow-hover"></i>
                </a>
                <ul
                  id="notebooks"
                  className="iq-submenu collapse"
                  data-parent="#iq-sidebar-toggle"
                >
                  <li className="">
                    <a
                      href="../backend/page-project-plans.html"
                      className="svg-icon"
                    >
                      <i>
                        <svg
                          width="20"
                          className="svg-icon"
                          id="iq-main-3"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                          />
                        </svg>
                      </i>
                      <span>Project Plans</span>
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="../backend/page-routinenotes.html"
                      className="svg-icon"
                    >
                      <i>
                        <svg
                          width="20"
                          className="svg-icon"
                          id="iq-main-4"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                          />
                        </svg>
                      </i>
                      <span>Routine Notes</span>
                    </a>
                  </li>
                  <li className="">
                    <a href="../backend/page-planning.html" className="svg-icon">
                      <i>
                        <svg
                          width="20"
                          className="svg-icon"
                          id="iq-main-5"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                          />
                        </svg>
                      </i>
                      <span>Planning</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="">
                <a
                  href="#otherpage"
                  className="collapsed svg-icon"
                  data-toggle="collapse"
                  aria-expanded="false"
                >
                  <i>
                    <svg
                      width="20"
                      className="svg-icon"
                      id="iq-main-9"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14"
                      />
                    </svg>
                  </i>
                  <span>other page</span>
                  <i className="las la-angle-right iq-arrow-right arrow-active"></i>
                  <i className="las la-angle-down iq-arrow-right arrow-hover"></i>
                </a>
                <ul
                  id="otherpage"
                  className="iq-submenu collapse"
                  data-parent="#iq-sidebar-toggle"
                >
                  <li className="">
                    <a
                      href="#user"
                      className="collapsed svg-icon"
                      data-toggle="collapse"
                      aria-expanded="false"
                    >
                      <i className="">
                        <svg
                          className="svg-icon"
                          id="iq-user-1"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                          />
                        </svg>
                      </i>
                      <span>User Details</span>
                      <i className="las la-angle-right iq-arrow-right arrow-active"></i>
                      <i className="las la-angle-down iq-arrow-right arrow-hover"></i>
                    </a>
                    <ul
                      id="user"
                      className="iq-submenu collapse"
                      data-parent="#otherpage"
                    >
                      <li className="">
                        <a href="../app/user-profile.html" className="svg-icon">
                          <i className="">
                            <svg
                              className="svg-icon"
                              id="iq-user-1-1"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>{" "}
                          </i>
                          <span className="">User Profile</span>
                        </a>
                      </li>
                      <li className="">
                        <a href="../app/user-add.html" className="svg-icon">
                          <i className="">
                            <svg
                              className="svg-icon"
                              id="iq-user-1-2"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                              />
                            </svg>{" "}
                          </i>
                          <span className="">User Add</span>
                        </a>
                      </li>
                      <li className="">
                        <a href="../app/user-list.html" className="svg-icon">
                          <i className="">
                            <svg
                              className="svg-icon"
                              id="iq-user-1-3"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                              />
                            </svg>{" "}
                          </i>
                          <span className="">User List</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="">
                    <a
                      href="#ui"
                      className="collapsed svg-icon"
                      data-toggle="collapse"
                      aria-expanded="false"
                    >
                      <i className="">
                        <svg
                          className="svg-icon"
                          id="iq-ui-1"
                          width="20"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                          />
                        </svg>
                      </i>
                      <span>UI Elements</span>
                      <i className="las la-angle-right iq-arrow-right arrow-active"></i>
                      <i className="las la-angle-down iq-arrow-right arrow-hover"></i>
                    </a>
                    <ul
                      id="ui"
                      className="iq-submenu collapse"
                      data-parent="#otherpage"
                    >
                      <li className="">
                        <a href="../backend/ui-avatars.html" className="svg-icon">
                          <i className="">
                            <svg
                              className="svg-icon"
                              id="iq-ui-1-0"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>{" "}
                          </i>
                          <span className="">Avatars</span>
                        </a>
                      </li>
                      <li className="">
                        <a href="../backend/ui-alerts.html" className="svg-icon">
                          <i className="">
                            <svg
                              className="svg-icon"
                              id="iq-ui-1-1"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                              />
                            </svg>{" "}
                          </i>
                          <span className="">Alerts</span>
                        </a>
                      </li>
                      <li className="">
                        <a href="../backend/ui-badges.html" className="svg-icon">
                          <i className="">
                            <svg
                              className="svg-icon"
                              id="iq-ui-1-2"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                              />
                            </svg>{" "}
                          </i>
                          <span className="">Badges</span>
                        </a>
                      </li>
                      <li className="">
                        <a
                          href="../backend/ui-breadcrumb.html"
                          className="svg-icon"
                        >
                          <i className="">
                            <svg
                              className="svg-icon"
                              id="iq-ui-1-3"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M4 6h16M4 12h16M4 18h16"
                              />
                            </svg>{" "}
                          </i>
                          <span className="">Breadcrumb</span>
                        </a>
                      </li>
                      <li className="">
                        <a href="../backend/ui-buttons.html" className="svg-icon">
                          <i className="">
                            <svg
                              className="svg-icon"
                              id="iq-ui-1-4"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"
                              />
                            </svg>{" "}
                          </i>
                          <span className="">Buttons</span>
                        </a>
                      </li>
                      <li className="">
                        <a
                          href="../backend/ui-buttons-group.html"
                          className="svg-icon"
                        >
                          <i className="">
                            <svg
                              className="svg-icon"
                              id="iq-ui-1-5"
                              width="20"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                              />
                            </svg>{" "}
                          </i>
                          <span className="">Buttons Group</span>
                        </a>
                      </li>
                      <li className="">
                        <a href="../backend/ui-boxshadow.html" className="svg-icon">
                          <i className="">
                            <svg
                              className="svg-icon"
                              id="iq-ui-1-6"
                              width="20"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                              />
                            </svg>{" "}
                          </i>
                          <span className="">Box Shadow</span>
                        </a>
                      </li>
                      <li className="">
                        <a href="../backend/ui-colors.html" className="svg-icon">
                          <i className="">
                            <svg
                              className="svg-icon"
                              id="iq-ui-1-7"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                              />
                            </svg>{" "}
                          </i>
                          <span className="">Colors</span>
                        </a>
                      </li>
                      <li className="">
                        <a href="../backend/ui-cards.html" className="svg-icon">
                          <i className="">
                            <svg
                              className="svg-icon"
                              id="iq-ui-1-8"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                              />
                            </svg>{" "}
                          </i>
                          <span className="">Cards</span>
                        </a>
                      </li>
                      <li className="">
                        <a href="../backend/ui-carousel.html" className="svg-icon">
                          <i className="">
                            <svg
                              className="svg-icon"
                              id="iq-ui-1-9"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"
                              />
                            </svg>{" "}
                          </i>
                          <span className="">Carousel</span>
                        </a>
                      </li>
                      <li className="">
                        <a href="../backend/ui-grid.html" className="svg-icon">
                          <i className="">
                            <svg
                              className="svg-icon"
                              id="iq-ui-1-10"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                              />
                            </svg>{" "}
                          </i>
                          <span className="">Grid</span>
                        </a>
                      </li>
                      <li className="">
                        <a
                          href="../backend/ui-helper-classNamees.html"
                          className="svg-icon"
                        >
                          <i className="">
                            <svg
                              className="svg-icon"
                              id="iq-ui-1-11"
                              width="20"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                              />
                            </svg>{" "}
                          </i>
                          <span className="">Helper classNamees</span>
                        </a>
                      </li>
                      <li className="">
                        <a href="../backend/ui-images.html" className="svg-icon">
                          <i className="">
                            <svg
                              className="svg-icon"
                              id="iq-ui-1-12"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                              />
                            </svg>{" "}
                          </i>
                          <span className="">Images</span>
                        </a>
                      </li>
                      <li className="">
                        <a
                          href="../backend/ui-list-group.html"
                          className="svg-icon"
                        >
                          <i className="">
                            <svg
                              className="svg-icon feather feather-list"
                              id="iq-ui-1-13"
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            >
                              <line x1="8" y1="6" x2="21" y2="6"></line>
                              <line x1="8" y1="12" x2="21" y2="12"></line>
                              <line x1="8" y1="18" x2="21" y2="18"></line>
                              <line x1="3" y1="6" x2="3.01" y2="6"></line>
                              <line x1="3" y1="12" x2="3.01" y2="12"></line>
                              <line x1="3" y1="18" x2="3.01" y2="18"></line>
                            </svg>{" "}
                          </i>
                          <span className="">list Group</span>
                        </a>
                      </li>
                      <li className="">
                        <a
                          href="../backend/ui-media-object.html"
                          className="svg-icon"
                        >
                          <i className="">
                            <svg
                              className="svg-icon"
                              id="iq-ui-1-14"
                              width="20"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                              />
                            </svg>{" "}
                          </i>
                          <span className="">Media</span>
                        </a>
                      </li>
                      <li className="">
                        <a href="../backend/ui-modal.html" className="svg-icon">
                          <i className="">
                            <svg
                              className="svg-icon feather feather-columns"
                              id="iq-ui-1-15"
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            >
                              <path d="M12 3h7a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-7m0-18H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7m0-18v18"></path>
                            </svg>{" "}
                          </i>
                          <span className="">Modal</span>
                        </a>
                      </li>
                      <li className="">
                        <a
                          href="../backend/ui-notifications.html"
                          className="svg-icon"
                        >
                          <i className="">
                            <svg
                              className="svg-icon"
                              id="iq-ui-1-16"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                              />
                            </svg>{" "}
                          </i>
                          <span className="">Notifications</span>
                        </a>
                      </li>
                      <li className="">
                        <a
                          href="../backend/ui-pagination.html"
                          className="svg-icon"
                        >
                          <i className="">
                            <svg
                              className="svg-icon"
                              id="iq-ui-1-17"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                              />
                            </svg>{" "}
                          </i>
                          <span className="">Pagination</span>
                        </a>
                      </li>
                      <li className="">
                        <a href="../backend/ui-popovers.html" className="svg-icon">
                          <i className="">
                            <svg
                              className="svg-icon"
                              id="iq-ui-1-18"
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              viewBox="0 0 24 24"
                              stroke-width="1.5"
                              stroke="#2c3e50"
                              fill="none"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            >
                              <path
                                stroke="none"
                                d="M0 0h24v24H0z"
                                fill="none"
                              />
                              <line x1="7.5" y1="4.21" x2="7.5" y2="4.22" />
                              <line x1="4.21" y1="7.5" x2="4.21" y2="7.51" />
                              <line x1="3" y1="12" x2="3" y2="12.01" />
                              <line x1="4.21" y1="16.5" x2="4.21" y2="16.51" />
                              <line x1="7.5" y1="19.79" x2="7.5" y2="19.8" />
                              <line x1="12" y1="21" x2="12" y2="21.01" />
                              <line x1="16.5" y1="19.79" x2="16.5" y2="19.8" />
                              <line
                                x1="19.79"
                                y1="16.5"
                                x2="19.79"
                                y2="16.51"
                              />
                              <line x1="21" y1="12" x2="21" y2="12.01" />
                              <line x1="19.79" y1="7.5" x2="19.79" y2="7.51" />
                              <line x1="16.5" y1="4.21" x2="16.5" y2="4.22" />
                              <line x1="12" y1="3" x2="12" y2="3.01" />
                            </svg>{" "}
                          </i>
                          <span className="">Popovers</span>
                        </a>
                      </li>
                      <li className="">
                        <a
                          href="../backend/ui-progressbars.html"
                          className="svg-icon"
                        >
                          <i className="">
                            <svg
                              className="svg-icon feather feather-hard-drive"
                              id="iq-ui-1-19"
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            >
                              <line x1="22" y1="12" x2="2" y2="12"></line>
                              <path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path>
                              <line x1="6" y1="16" x2="6.01" y2="16"></line>
                              <line x1="10" y1="16" x2="10.01" y2="16"></line>
                            </svg>{" "}
                          </i>
                          <span className="">Progressbars</span>
                        </a>
                      </li>
                      <li className="">
                        <a
                          href="../backend/ui-typography.html"
                          className="svg-icon"
                        >
                          <i className="">
                            <svg
                              className="svg-icon"
                              id="iq-ui-1-20"
                              width="20"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z"
                              />
                            </svg>
                          </i>
                          <span className="">Typography</span>
                        </a>
                      </li>
                      <li className="">
                        <a href="../backend/ui-tabs.html" className="svg-icon">
                          <i className="">
                            <svg
                              className="svg-icon"
                              id="iq-ui-1-21"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
                              />
                            </svg>
                          </i>
                          <span className="">Tabs</span>
                        </a>
                      </li>
                      <li className="">
                        <a href="../backend/ui-tooltips.html" className="svg-icon">
                          <i className="">
                            <svg
                              className="svg-icon"
                              id="iq-ui-1-22"
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              viewBox="0 0 24 24"
                              stroke-width="1.5"
                              stroke="#2c3e50"
                              fill="none"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            >
                              <path
                                stroke="none"
                                d="M0 0h24v24H0z"
                                fill="none"
                              />
                              <path d="M4 13v-8a2 2 0 0 1 2 -2h1a2 2 0 0 1 2 2v8a2 2 0 0 0 6 0v-8a2 2 0 0 1 2 -2h1a2 2 0 0 1 2 2v8a8 8 0 0 1 -16 0" />
                              <line x1="4" y1="8" x2="9" y2="8" />
                              <line x1="15" y1="8" x2="19" y2="8" />
                            </svg>
                          </i>
                          <span className="">Tooltips</span>
                        </a>
                      </li>
                      <li className="">
                        <a
                          href="../backend/ui-embed-video.html"
                          className="svg-icon"
                        >
                          <i className="">
                            <svg
                              className="svg-icon"
                              id="iq-ui-1-23"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                              />
                            </svg>
                          </i>
                          <span className="">Video</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="">
                    <a
                      href="#auth"
                      className="collapsed svg-icon"
                      data-toggle="collapse"
                      aria-expanded="false"
                    >
                      <i>
                        <svg
                          className="svg-icon"
                          id="iq-auth-1"
                          width="20"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                          />
                        </svg>
                      </i>
                      <span>Authentication</span>
                      <i className="las la-angle-right iq-arrow-right arrow-active"></i>
                      <i className="las la-angle-down iq-arrow-right arrow-hover"></i>
                    </a>
                    <ul
                      id="auth"
                      className="iq-submenu collapse"
                      data-parent="#otherpage"
                    >
                      <li className="">
                        <a href="../backend/auth-sign-in.html" className="svg-icon">
                          <i className="">
                            <svg
                              className="svg-icon"
                              id="iq-auth-1-1"
                              width="20"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                              />
                            </svg>
                          </i>
                          <span className="">Login</span>
                        </a>
                      </li>
                      <li className="">
                        <a href="../backend/auth-sign-up.html" className="svg-icon">
                          <i className="">
                            <svg
                              className="svg-icon"
                              id="iq-auth-1-2"
                              width="20"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                              />
                            </svg>
                          </i>
                          <span className="">Register</span>
                        </a>
                      </li>
                      <li className="">
                        <a
                          href="../backend/auth-recoverpw.html"
                          className="svg-icon"
                        >
                          <i className="">
                            <svg
                              className="svg-icon"
                              id="iq-auth-1-3"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"
                              />
                            </svg>
                          </i>
                          <span className="">Recover Password</span>
                        </a>
                      </li>
                      <li className="">
                        <a
                          href="../backend/auth-confirm-mail.html"
                          className="svg-icon"
                        >
                          <i className="">
                            <svg
                              className="svg-icon"
                              id="iq-auth-1-4"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76"
                              />
                            </svg>
                          </i>
                          <span className="">Confirm Mail</span>
                        </a>
                      </li>
                      <li className="">
                        <a
                          href="../backend/auth-lock-screen.html"
                          className="svg-icon"
                        >
                          <i className="">
                            <svg
                              className="svg-icon feather feather-lock"
                              id="iq-auth-1-5"
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            >
                              <rect
                                x="3"
                                y="11"
                                width="18"
                                height="11"
                                rx="2"
                                ry="2"
                              ></rect>
                              <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                            </svg>
                          </i>
                          <span className="">Lock Screen</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="">
                    <a
                      href="#pricing"
                      className="collapsed svg-icon"
                      data-toggle="collapse"
                      aria-expanded="false"
                    >
                      <i>
                        <svg
                          className="svg-icon"
                          id="iq-extra-1-3"
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="#2c3e50"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path d="M10 13l2.5 0c2.5 0 5 -2.5 5 -5c0 -3 -1.9 -5 -5 -5h-5.5c-.5 0 -1 .5 -1 1l-2 14c0 .5 .5 1 1 1h2.8l1.2 -5c.1 -.6 .4 -1 1 -1zm7.5 -5.8c1.7 1 2.5 2.8 2.5 4.8c0 2.5 -2.5 4.5 -5 4.5h-2.6l-.6 3.6a1 1 0 0 1 -1 .8l-2.7 0a0.5 .5 0 0 1 -.5 -.6l.2 -1.4" />
                        </svg>
                      </i>
                      <span>Pricing</span>
                      <i className="las la-angle-right iq-arrow-right arrow-active"></i>
                      <i className="las la-angle-down iq-arrow-right arrow-hover"></i>
                    </a>
                    <ul
                      id="pricing"
                      className="iq-submenu collapse"
                      data-parent="#otherpage"
                    >
                      <li className="">
                        <a href="../backend/pricing.html" className="svg-icon">
                          <i className="">
                            <svg
                              className="svg-icon"
                              id="iq-extra-1-3-1"
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              viewBox="0 0 24 24"
                              stroke-width="1.5"
                              stroke="#2c3e50"
                              fill="none"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            >
                              <path
                                stroke="none"
                                d="M0 0h24v24H0z"
                                fill="none"
                              />
                              <rect x="4" y="4" width="16" height="16" rx="2" />
                            </svg>
                          </i>
                          <span className="">Pricing 1</span>
                        </a>
                      </li>
                      <li className="">
                        <a href="../backend/pricing-1.html" className="svg-icon">
                          <i className="">
                            <svg
                              className="svg-icon"
                              id="iq-extra-1-3-2"
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              viewBox="0 0 24 24"
                              stroke-width="1.5"
                              stroke="#2c3e50"
                              fill="none"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            >
                              <path
                                stroke="none"
                                d="M0 0h24v24H0z"
                                fill="none"
                              />
                              <line x1="12" y1="17" x2="12" y2="3" />
                              <path d="M15 6l-3 -3l-3 3" />
                              <circle cx="12" cy="19" r="2" />
                            </svg>
                          </i>
                          <span className="">Pricing 2</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="">
                    <a
                      href="#pages-error"
                      className="collapsed svg-icon"
                      data-toggle="collapse"
                      aria-expanded="false"
                    >
                      <i className="">
                        <svg
                          className="svg-icon feather feather-alert-triangle"
                          id="iq-extra-1-4"
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                          <line x1="12" y1="9" x2="12" y2="13"></line>
                          <line x1="12" y1="17" x2="12.01" y2="17"></line>
                        </svg>
                      </i>
                      <span>Error</span>
                      <i className="las la-angle-right iq-arrow-right arrow-active"></i>
                      <i className="las la-angle-down iq-arrow-right arrow-hover"></i>
                    </a>
                    <ul
                      id="pages-error"
                      className="iq-submenu collapse"
                      data-parent="#otherpage"
                    >
                      <li className="">
                        <a href="../backend/pages-error.html" className="svg-icon">
                          <i className="">
                            <svg
                              className="svg-icon feather feather-alert-circle"
                              id="iq-extra-1-4-1"
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            >
                              <circle cx="12" cy="12" r="10"></circle>
                              <line x1="12" y1="8" x2="12" y2="12"></line>
                              <line x1="12" y1="16" x2="12.01" y2="16"></line>
                            </svg>
                          </i>
                          <span className="">Error 404</span>
                        </a>
                      </li>
                      <li className="">
                        <a
                          href="../backend/pages-error-500.html"
                          className="svg-icon"
                        >
                          <i className="">
                            <svg
                              className="svg-icon"
                              id="iq-extra-1-4-2"
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              viewBox="0 0 24 24"
                              stroke-width="1.5"
                              stroke="#2c3e50"
                              fill="none"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            >
                              <path
                                stroke="none"
                                d="M0 0h24v24H0z"
                                fill="none"
                              />
                              <path d="M9 9v-1a3 3 0 0 1 6 0v1" />
                              <path d="M8 9h8a6 6 0 0 1 1 3v3a5 5 0 0 1 -10 0v-3a6 6 0 0 1 1 -3" />
                              <line x1="3" y1="13" x2="7" y2="13" />
                              <line x1="17" y1="13" x2="21" y2="13" />
                              <line x1="12" y1="20" x2="12" y2="14" />
                              <line x1="4" y1="19" x2="7.35" y2="17" />
                              <line x1="20" y1="19" x2="16.65" y2="17" />
                              <line x1="4" y1="7" x2="7.75" y2="9.4" />
                              <line x1="20" y1="7" x2="16.25" y2="9.4" />
                            </svg>
                          </i>
                          <span className="">Error 500</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="">
                    <a href="../backend/pages-blank-page.html" className="svg-icon">
                      <i className="">
                        <svg
                          className="svg-icon"
                          id="iq-extra-1-8"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M5 19a2 2 0 01-2-2V7a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1M5 19h14a2 2 0 002-2v-5a2 2 0 00-2-2H9a2 2 0 00-2 2v5a2 2 0 01-2 2z"
                          />
                        </svg>
                      </i>
                      <span>Blank Page</span>
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="../backend/pages-maintenance.html"
                      className="svg-icon"
                    >
                      <i className="">
                        <svg
                          className="svg-icon"
                          id="iq-extra-1-9"
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="#2c3e50"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <circle cx="12" cy="7" r="3" />
                          <circle cx="17" cy="16" r="3" />
                          <circle cx="7" cy="16" r="3" />
                        </svg>
                      </i>
                      <span>Maintenance</span>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>          
          <div className="p-3"></div>
        </div>
      </div> */}
    </>
  );
};
export default Header;
