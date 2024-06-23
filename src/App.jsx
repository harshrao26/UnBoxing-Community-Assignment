import React from "react";
import Button from "./components/Button";
import TopNav from "./components/TopNav";
import SideNav from "./components/SideNav";
import TopBar from "./components/TopBar";
import SideBar from "./components/SideBar";
import Query from "./components/Query";
import DottedButton from "./components/DottedButton";
import QuerBoxContainer from "./components/QueryBoxContainer";
function App() {
  return (
    <>
      <div className="bg-[#0d0d0d] flex">
        <div className="left w-[5%]">
          <SideNav />
        </div>
        <div className="right w-[95%] mx-4 ">
          <div className="">
            <TopNav />
          </div>
          <div className=" mt-2">
            <TopBar />
          </div>
          <div className="mt-2 flex  bg-[#141416] rounded-lg border-[#6f6f6f]  border-[1px] ">
            <SideBar />
            <div className=" w-[75%] mx-8  ">
              <Query />
              <div className="mx-10">
                {/* <QuerBoxContainer /> */}
              </div>
              <DottedButton />
              <div className="flex justify-end mt-8 mr-10">
              <Button name={"Add Asset"} />

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
