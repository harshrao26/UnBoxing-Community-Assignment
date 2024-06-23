import React from "react";
import Button from "./components/Button";
import TopNav from "./components/TopNav";
import SideNav from "./components/SideNav";
import TopBar from "./components/TopBar";
import SideBar from "./components/SideBar";
function App() {
  return (
    <>
      <div className="bg-[#0d0d0d] flex">
        <div className="left w-[5%]">
          <SideNav />
        </div>
        <div className="right w-[95%] mx-4">
          <div className="">
            <TopNav />
          </div>
          <div className=" mt-2">
            <TopBar />
          </div>
          <div className="mt-2">
            <SideBar />
          </div>

        </div>
      </div>
    </>
  );
}

export default App;
