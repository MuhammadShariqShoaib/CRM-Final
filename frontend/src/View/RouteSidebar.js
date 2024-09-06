import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from '../Dashboard/Dashboard';
import Data from '../EmployeeManagement/Data';
import Client from '../ClientManagment/ClientData';
import ConnectionData from '../ConnectionManagment.js/ConnectionData';

function RouteSidebar() {
  return (
    <div>
      <Routes>
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/EmployeeManagement" element={<Data />} />
        <Route path="/ClientsManagement" element={<Client />} />
        <Route path="/ConnectionManagement" element={<ConnectionData />} />
      </Routes>
    </div>
  );
}

export default RouteSidebar;
