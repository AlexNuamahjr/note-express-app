const HomePage = () => {
  return (
    <div className="content-page">
      <div className="container-fluid note-details">
        <div className="desktop-header">
          <div className="card card-block topnav-left">
            <div className="card-body write-card">
              <div className="d-flex align-items-center justify-content-between">
                <div className="iq-note-callapse-menu">
                  <a
                    className="iq-note-callapse-btn show-note-button"
                    data-toggle="collapse"
                    href="#collapseMenu"
                    role="button"
                    data-extra-toggle="toggle"
                    data-extra-class-show=".hide-note-button"
                    data-extra-class-hide=".show-note-button"
                    aria-expanded="false"
                  >
                    <i className="las la-pencil-alt pr-2"></i>Write Your Note
                  </a>
                  <span className="hide-note-button d-none">
                    <i className="las la-folder pr-2"></i>Folder
                  </span>
                </div>
                
              </div>
            </div>
          </div>
          <div className="card topnav-right">
            <div className="card-body card-content-right">
              <ul className="list-inline m-0 p-0 d-flex align-items-center justify-content-around">
                <li className="nav-item nav-icon dropdown">
                  <a
                    href="#"
                    className="search-toggle dropdown-toggle nav-icon-1"
                    id="dropdownMenuButton2"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i className="">
                      <svg
                        width="20"
                        className="svg-icon"
                        id="main-n-01"
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
                    aria-labelledby="dropdownMenuButton2"
                  >
                    <div className="card shadow-none m-0">
                      <div className="card-body p-0">
                        <div className="p-3">
                          <a href="#" className="iq-sub-card">
                            <div className="media align-items-center cust-card pb-3 border-bottom">
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
                            <div className="media align-items-center cust-card pt-3">
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
                <li className="nav-item nav-icon dropdown pl-3">
                  <a
                    href="#"
                    className="search-toggle dropdown-toggle nav-icon-1"
                    id="dropdownMenuButton002"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i className="">
                      <svg
                        width="20"
                        className="svg-icon"
                        id="main-n-02"
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
                    aria-labelledby="dropdownMenuButton002"
                  >
                    <div className="card shadow-none m-0">
                      <div className="card-body p-0">
                        <div className="p-3">
                          <a href="#" className="iq-sub-card">
                            <div className="media align-items-center cust-card pb-3 border-bottom">
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
                            <div className="media align-items-center cust-card pt-3">
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
              </ul>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="collapse" id="collapseMenu">
              <div className="card card-block card-stretch">
                <div className="card-body write-card">
                  <div className="container-fluid collapse-fluid">
                    <div className="row">
                      <div className="col-md-12 col-lg-12 p-0">
                        <div className="card card-transparent card-block card-stretch event-note">
                          <div className="card-body px-0 bukmark">
                            <div className="d-flex align-items-center justify-content-between pb-2 mb-3 border-bottom">
                              <div className="quill-tool"></div>
                              <div className="iq-full-screen">
                                <a href="#" className="" id="btnFullscreen">
                                  <i className="las la-expand-arrows-alt font-size-18"></i>
                                </a>
                              </div>
                            </div>
                            <div id="quill-toolbar">
                              <h1 className="mb-3">Birthday Bash</h1>
                              <p>
                                Hosting friend's birthday party and purchasing
                                items.
                              </p>
                              <ul>
                                <li>Cake</li>
                                <li>Balloons</li>
                                <li>Cold Drinks</li>
                              </ul>
                              <img
                                src="../assets/images/event-note/01.png"
                                className="img-fluid image-1"
                                alt="image"
                              />
                              <img
                                src="../assets/images/event-note/02.png"
                                className="img-fluid image-2"
                                alt="image"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12 p-0 d-flex justify-content-end">
                        <button
                          class="btn btn-outline-primary"
                          data-extra-toggle="toggle"
                          data-extra-class-show=".show-note-button"
                          data-extra-class-hide=".hide-note-button"
                        >
                          Close
                        </button>
                        <button
                          className="btn btn-primary ml-2"
                          data-extra-toggle="toggle"
                          data-extra-class-show=".show-note-button"
                          data-extra-class-hide=".hide-note-button"
                        >
                          Save
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="card card-block card-stretch">
              <div className="card-body custom-notes-space">
                <h3 className="">Your Notes</h3>
                <div className="iq-tab-content">
                  <div className="d-flex flex-wrap align-items-top justify-content-between">
                    <ul
                      className="d-flex nav nav-pills text-center note-tab mb-3"
                      id="note-pills-tab"
                      role="tablist"
                    >
                      <li className="nav-item">
                        <a
                          className="nav-link home active show"
                          data-toggle="pill"
                          data-init="note"
                          href="#note1"
                          role="tab"
                          aria-selected="false"
                        >
                          All
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link home"
                          data-toggle="pill"
                          data-init="shared-note"
                          href="#note2"
                          role="tab"
                          aria-selected="true"
                        >
                          Shared Notes
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link home"
                          data-toggle="pill"
                          data-init="pin-note"
                          href="#note3"
                          role="tab"
                          aria-selected="false"
                        >
                          Pin Notes
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link home"
                          data-toggle="pill"
                          data-init="fav-note"
                          href="#note4"
                          role="tab"
                          aria-selected="false"
                        >
                          Favourite Notes
                        </a>
                      </li>
                    </ul>
                    <div className="media align-items-top iq-grid">
                      <div className="view-btn rounded body-bg btn-dropdown filter-btn mr-3">
                        <div className="dropdown">
                          <span
                            className="dropdown-toggle cursor-pointer"
                            id="dropdownMenuButton003"
                            data-toggle="dropdown"
                          >
                            <i className="las la-filter font-size-20"></i>
                          </span>
                          <div
                            className="dropdown-menu dropdown-menu-right border-none"
                            aria-labelledby="dropdownMenuButton003"
                          >
                            <div className="dropdown-item mb-3">
                              <div className="d-flex align-items-center justify-content-between">
                                <h6 className="mr-4">
                                  <i className="las la-book mr-3"></i>Located In
                                </h6>
                                <div className="form-group mb-0">
                                  <select
                                    name="type"
                                    className="basic-select form-control dropdown-toggle"
                                    data-style="py-0"
                                  >
                                    <option value="1">Project Plans</option>
                                    <option value="2">Routine Notes</option>
                                    <option value="3">Planning</option>
                                  </select>
                                </div>
                              </div>
                            </div>
                            <div className="dropdown-item mb-3">
                              <div className="d-flex align-items-center justify-content-between">
                                <h6 className="mr-4">
                                  <i className="las la-paste mr-3"></i>Contains
                                </h6>
                                <div className="form-group mb-0">
                                  <select
                                    name="type"
                                    className="basic-select form-control dropdown-toggle"
                                    data-style="py-0"
                                  >
                                    <option value="1">Address</option>
                                    <option value="2">Archive Files</option>
                                    <option value="3">Code Blocks</option>
                                  </select>
                                </div>
                              </div>
                            </div>
                            <div className="dropdown-item mb-2">
                              <div className="d-flex align-items-center justify-content-between">
                                <h6 className="mr-4">
                                  <i className="las la-calendar mr-3"></i>
                                  Created
                                </h6>
                                <div className="form-group mb-0">
                                  <select
                                    id="date-select"
                                    name="type"
                                    className="basic-select form-control dropdown-toggle"
                                    data-style="py-0"
                                  >
                                    <option value="today">Today</option>
                                    <option value="yest">Yesterday</option>
                                    <option value="last-week">Last Week</option>
                                    <option value="last-month">
                                      Last Month
                                    </option>
                                  </select>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="list-grid-toggle cursor-pointer">
                        <span className="icon active i-grid rounded">
                          <i className="ri-layout-grid-line font-size-20"></i>
                        </span>
                        <span className="icon active i-list rounded">
                          <i className="ri-list-check font-size-20"></i>
                        </span>
                        <span className="label label-list">List</span>
                      </div>
                    </div>
                  </div>
                  <div className="note-content tab-content">
                    <div id="note1" className="tab-pane fade active show">
                      <div className="icon active animate__animated animate__fadeIn i-grid">
                        <div className="row">
                          <div className="col-lg-4 col-md-6">
                            <div className="card card-block card-stretch card-height card-bottom-border-info note-detail">
                              <div className="card-header d-flex justify-content-between pb-1">
                                <div className="icon iq-icon-box-2 icon-border-info rounded">
                                  <svg
                                    width="23"
                                    height="23"
                                    className="svg-icon"
                                    id="iq-main-01"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
                                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                    />
                                  </svg>
                                </div>
                                <div className="card-header-toolbar d-flex align-items-center">
                                  <div className="dropdown">
                                    <span
                                      className="dropdown-toggle dropdown-bg"
                                      id="note-dropdownMenuButton4"
                                      data-toggle="dropdown"
                                      aria-expanded="false"
                                      role="button"
                                    >
                                      <i className="ri-more-fill"></i>
                                    </span>
                                    <div
                                      className="dropdown-menu dropdown-menu-right"
                                      aria-labelledby="note-dropdownMenuButton4"
                                    >
                                      <a
                                        href="#"
                                        className="dropdown-item new-note1"
                                        data-toggle="modal"
                                        data-target="#new-note1"
                                      >
                                        <i className="las la-eye mr-3"></i>View
                                      </a>
                                      <a
                                        href="#"
                                        className="dropdown-item edit-note1"
                                        data-toggle="modal"
                                        data-target="#edit-note1"
                                      >
                                        <i className="las la-pen mr-3"></i>Edit
                                      </a>
                                      <a
                                        className="dropdown-item"
                                        data-extra-toggle="delete"
                                        data-closest-elem=".card"
                                        href="#"
                                      >
                                        <i className="las la-trash-alt mr-3"></i>
                                        Delete
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="card-body rounded">
                                <h4 className="card-title">Weekly Planner</h4>
                                <p className="mb-3 card-description short">
                                  Virtual Digital Marketing Course every week on
                                  Monday, Wednesday and Saturday.Virtual Digital
                                  Marketing Course every week on Monday
                                </p>
                              </div>
                              <div className="card-footer">
                                <div className="d-flex align-items-center justify-content-between note-text note-text-info">
                                  <a href="#" className="">
                                    <i className="las la-user-friends mr-2 font-size-20"></i>
                                    03 share
                                  </a>
                                  <a href="#" className="">
                                    <i className="las la-calendar mr-2 font-size-20"></i>
                                    12 Jan 2021
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-6">
                            <div className="card card-block card-stretch card-height card-bottom-border-purple note-detail">
                              <div className="card-header d-flex justify-content-between pb-1">
                                <div className="icon iq-icon-box-2 icon-border-purple rounded">
                                  <svg
                                    width="23"
                                    height="23"
                                    className="svg-icon"
                                    id="iq-main-02"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
                                      d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z"
                                    />
                                  </svg>
                                </div>
                                <div className="card-header-toolbar d-flex align-items-center">
                                  <a
                                    href="#"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    className="show-tab"
                                    data-show-tab="[href='#note3']"
                                    title=""
                                    data-original-title="pin content"
                                  >
                                    <i className="las la-thumbtack mr-2"></i>
                                  </a>
                                  <div className="card-header-toolbar d-flex align-items-center">
                                    <div className="dropdown">
                                      <span
                                        className="dropdown-toggle dropdown-bg"
                                        id="note-dropdownMenuButton5"
                                        data-toggle="dropdown"
                                        aria-expanded="false"
                                        role="button"
                                      >
                                        <i className="ri-more-fill"></i>
                                      </span>
                                      <div
                                        className="dropdown-menu dropdown-menu-right"
                                        aria-labelledby="note-dropdownMenuButton5"
                                      >
                                        <a
                                          href="#"
                                          className="dropdown-item new-note2"
                                          data-toggle="modal"
                                          data-target="#new-note2"
                                        >
                                          <i className="las la-eye mr-3"></i>
                                          View
                                        </a>
                                        <a
                                          href="#"
                                          className="dropdown-item edit-note1"
                                          data-toggle="modal"
                                          data-target="#edit-note1"
                                        >
                                          <i className="las la-pen mr-3"></i>
                                          Edit
                                        </a>
                                        <a
                                          className="dropdown-item"
                                          data-extra-toggle="delete"
                                          data-closest-elem=".card"
                                          href="#"
                                        >
                                          <i className="las la-trash-alt mr-3"></i>
                                          Delete
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="card-body rounded">
                                <h4 className="card-title">
                                  Birthday Celebration
                                </h4>
                                <p className="mb-3 card-description short">
                                  You can easily share via message, WhatsApp,
                                  emails etc. You can also save your notes and
                                  edit it later or can easily delete the note.
                                </p>
                              </div>
                              <div className="card-footer">
                                <div className="d-flex align-items-center justify-content-between note-text note-text-purple">
                                  <a href="#" className="">
                                    <i className="las la-user mr-2 font-size-20"></i>
                                    Only You
                                  </a>
                                  <a href="#" className="">
                                    <i className="las la-calendar mr-2 font-size-20"></i>
                                    10 Jan 2021
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-6">
                            <div className="card card-block card-stretch card-height card-bottom-border-warning note-detail">
                              <div className="card-header d-flex justify-content-between pb-1">
                                <div className="icon iq-icon-box-2 icon-border-warning rounded">
                                  <svg
                                    width="23"
                                    height="23"
                                    className="svg-icon"
                                    id="iq-main-03"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
                                      d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                                    />
                                  </svg>
                                </div>
                                <div className="card-header-toolbar d-flex align-items-center">
                                  <a
                                    href="#"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title=""
                                    className="show-tab"
                                    data-show-tab="[href='#note4']"
                                    data-original-title="favorite"
                                  >
                                    <i className="lar la-heart mr-2"></i>
                                  </a>
                                  <div className="card-header-toolbar d-flex align-items-center">
                                    <div className="dropdown">
                                      <span
                                        className="dropdown-toggle dropdown-bg"
                                        id="note-dropdownMenuButton6"
                                        data-toggle="dropdown"
                                        aria-expanded="false"
                                        role="button"
                                      >
                                        <i className="ri-more-fill"></i>
                                      </span>
                                      <div
                                        className="dropdown-menu dropdown-menu-right"
                                        aria-labelledby="note-dropdownMenuButton6"
                                      >
                                        <a
                                          href="#"
                                          className="dropdown-item new-note3"
                                          data-toggle="modal"
                                          data-target="#new-note3"
                                        >
                                          <i className="las la-eye mr-3"></i>
                                          View
                                        </a>
                                        <a
                                          href="#"
                                          className="dropdown-item edit-note1"
                                          data-toggle="modal"
                                          data-target="#edit-note1"
                                        >
                                          <i className="las la-pen mr-3"></i>
                                          Edit
                                        </a>
                                        <a
                                          className="dropdown-item"
                                          data-extra-toggle="delete"
                                          data-closest-elem=".card"
                                          href="#"
                                        >
                                          <i className="las la-trash-alt mr-3"></i>
                                          Delete
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="card-body rounded">
                                <h4 className="card-title">Essay Outline</h4>
                                <ul className="pl-3 mb-0">
                                  <li className="note-list mb-2">
                                    Content should be of topic.
                                  </li>
                                  <li className="note-list mb-2">
                                    300 Words only.
                                  </li>
                                  <li className="note-list">
                                    Make presentation.
                                  </li>
                                </ul>
                              </div>
                              <div className="card-footer">
                                <div className="d-flex align-items-center justify-content-between note-text note-text-warning">
                                  <a href="#" className="">
                                    <i className="las la-user mr-2 font-size-20"></i>
                                    Only You
                                  </a>
                                  <a href="#" className="">
                                    <i className="las la-calendar mr-2 font-size-20"></i>
                                    09 Jan 2021
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="icon active animate__animated animate__fadeIn i-list">
                        <div className="row">
                          <div className="col-lg-12">
                            <div className="table-responsive">
                              <table className="table tbl-server-info">
                                <thead>
                                  <tr className="ligth">
                                    <th className="w-50" scope="col">
                                      Title
                                    </th>
                                    <th scope="col">Permission</th>
                                    <th scope="col">Created At</th>
                                    <th scope="col">Action</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>
                                      <h4 className="mb-2">Weekly Planner</h4>
                                      <span>
                                        Virtual Digital Marketing Course every
                                        week on Monday, Wednesday and Saturday
                                      </span>
                                    </td>
                                    <td>
                                      <i className="las la-user-friends mr-2 font-size-20"></i>
                                      03 share
                                    </td>
                                    <td>Dec 20</td>
                                    <td>
                                      <div>
                                        <a
                                          href="#"
                                          className="badge badge-success mr-3"
                                          data-toggle="modal"
                                          data-target="#edit-note1"
                                        >
                                          <i className="las la-pen mr-0"></i>
                                        </a>
                                        <a
                                          href="#"
                                          className="badge badge-danger"
                                          data-extra-toggle="delete"
                                          data-closest-elem="tr"
                                        >
                                          <i className="las la-trash-alt mr-0"></i>
                                        </a>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <h4 className="mb-2">
                                        Birthday Celebration
                                        <i
                                          className="las la-thumbtack ml-2 show-tab"
                                          data-show-tab="[href='#note3']"
                                        ></i>
                                      </h4>
                                      <span>
                                        You can easily share via message,
                                        WhatsApp, emails etc.
                                      </span>
                                    </td>
                                    <td>
                                      <i className="las la-lock mr-2 font-size-20"></i>
                                      Only You
                                    </td>
                                    <td>Dec 20</td>
                                    <td>
                                      <div>
                                        <a
                                          href="#"
                                          className="badge badge-success mr-3"
                                          data-toggle="modal"
                                          data-target="#edit-note1"
                                        >
                                          <i className="las la-pen mr-0"></i>
                                        </a>
                                        <a
                                          href="#"
                                          className="badge badge-danger"
                                          data-extra-toggle="delete"
                                          data-closest-elem="tr"
                                        >
                                          <i className="las la-trash-alt mr-0"></i>
                                        </a>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <h4 className="mb-2">
                                        Essay Outline
                                        <i
                                          className="lar la-heart ml-2 show-tab"
                                          data-show-tab="[href='#note4']"
                                        ></i>
                                      </h4>
                                      <span>
                                        Donec rutrum congue leo eget malesuada.
                                      </span>
                                    </td>
                                    <td>
                                      <i className="las la-lock mr-2 font-size-20"></i>
                                      Only You
                                    </td>
                                    <td>Dec 20</td>
                                    <td>
                                      <div>
                                        <a
                                          href="#"
                                          className="badge badge-success mr-3"
                                          data-toggle="modal"
                                          data-target="#edit-note1"
                                        >
                                          <i className="las la-pen mr-0"></i>
                                        </a>
                                        <a
                                          href="#"
                                          className="badge badge-danger"
                                          data-extra-toggle="delete"
                                          data-closest-elem="tr"
                                        >
                                          <i className="las la-trash-alt mr-0"></i>
                                        </a>
                                      </div>
                                    </td>
                                  </tr>                                  
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomePage;
