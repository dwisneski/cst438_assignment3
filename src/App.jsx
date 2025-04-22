import './App.css';
import React, { useState } from 'react';
import {AdminRouter} from './components/admin/AdminLayout';
import {StudentRouter} from './components/student/StudentLayout';
import {InstructorRouter} from './components/instructor/InstructorLayout';


function App() {

  // change to INSTRUCTOR or STUDENT for testing.  
  // when login is implemented, the user type will come from the logged in user's ROLE.

  const [userType, setUserType] = useState('ADMIN'); // change to INSTRUCTOR or STUDENT for testing.  
  

  if (userType==='ADMIN') {
        return  (<AdminRouter setUserType={setUserType}/>);

  } else if (userType==='STUDENT') {
        return  (<StudentRouter setUserType={setUserType}/>);

  } else if (userType==='INSTRUCTOR') {
        return (<InstructorRouter setUserType={setUserType} />);

  } else {
        return (<h1>Unknown user type {userType}</h1>);
  }
 
}

export default App;
