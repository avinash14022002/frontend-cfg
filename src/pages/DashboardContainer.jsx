import React from "react";
import { Routes, Route } from "react-router-dom";
import SideBar from "../components/dashboard/Sidebar";
import AllJobs from "./AllJobs";
import Chats from "./Chats";
import MyTests from "./MyTests";
import Profile from "./Profile";

const DashboardContainer = () => {
  return (
    <>
      <div className="flex flex-row">
        <div className="h-screen sticky top-0 left-0 hidden lg:flex">
          <SideBar />
        </div>
        <Routes>
          <Route path="alljobs" element={<AllJobs />} />
          <Route path="profile" element={<Profile />} />
          <Route path="mytests" element={<MyTests />} />
          <Route path="chats" element={<Chats />} />
          {/* <Route
            path="*"
            element={<Error404 tabTitle="404 Page Not Found" />}
          /> */}
        </Routes>
      </div>
    </>
  );
};

export default DashboardContainer;
