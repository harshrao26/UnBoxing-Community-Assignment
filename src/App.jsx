import React from "react";
import Button from "./components/Button";
import TopNav from "./components/TopNav";
import SideNav from "./components/SideNav";
function App() {
  return (
    <>
      <div className="relative">
        <div className="">
          <SideNav className="" />

        </div>
        <div>
        <TopNav />

        </div>
      </div>
    </>
  );
}

export default App;
