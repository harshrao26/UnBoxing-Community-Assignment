import React from "react";
import Button from "./components/Button";
import TopNav from "./components/TopNav";
import SideNav from "./components/SideNav";
import TopBar from "./components/TopBar";
function App() {
  return (
    <>
      <div className="relative bg-[#0D0D0D]">
        <div className="flex">
          <SideNav className="" />
        <TopBar />

        </div>
        <div>
        <TopNav />

        </div>
      </div>
    </>
  );
}

export default App;
