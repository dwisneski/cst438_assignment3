import React from "react";
import { Outlet, Link } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import InstructorHome from "./InstructorHome";
import AssignmentsView from "./AssignmentsView";
import EnrollmentsView from "./EnrollmentsView";
import InstructorSectionsView from "./InstructorSectionsView";

export const InstructorRouter = (props) => {
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
        <button onClick={changeType} name="ADMIN">
          ADMIN
        </button>
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<InstructorLayout />}>
            <Route index element={<InstructorHome />} />
            <Route path="assignments" element={<AssignmentsView />} />
            <Route path="enrollments" element={<EnrollmentsView />} />
            <Route path="sections" element={<InstructorSectionsView />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

const InstructorLayout = () => {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
      </nav>
      <h1>Instructor Home</h1>
      Manage assignments and grades.
      <Outlet />
    </>
  );
};

export default InstructorLayout;
