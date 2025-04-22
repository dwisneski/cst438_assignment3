import React from "react";
import { Outlet, Link } from "react-router-dom";
import UsersView from "./UsersView";
import CoursesView from "./CoursesView";
import SectionsView from "./SectionsView";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export const AdminRouter = (props) => {
  const changeType = (e) => {
    props.setUserType(e.target.name);
  };

  return (
    <div className="App">
      <div>
        Change user type for testing: &nbsp;
        <button onClick={changeType} name="STUDENT">
          STUDENT
        </button>
        <button onClick={changeType} name="INSTRUCTOR">
          INSTRUCTOR
        </button>
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AdminLayout />}>
            <Route index element={<AdminHome />} />
            <Route path="users" element={<UsersView />} />
            <Route path="courses" element={<CoursesView />} />
            <Route path="sections" element={<SectionsView />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export const AdminHome = () => {
  return (
    <div>
      <h1>Admin Home</h1>
      Manage users, courses and sections.
    </div>
  );
};

export const AdminLayout = () => {
  return (
    <>
      <nav>
        <Link to="/">Home</Link> &nbsp;|&nbsp;
        <Link to="/users">Users</Link>&nbsp;|&nbsp;
        <Link to="/courses">Courses</Link>&nbsp;|&nbsp;
        <Link to="/sections" id="sections">
          Sections
        </Link>
      </nav>

      <Outlet />
    </>
  );
};
