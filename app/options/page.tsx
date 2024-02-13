import React from "react";
import SideBar from "../sidebar/SideBar";

export default function Option1() {
  return (
    <div className="flex gap-[200px]">
      <SideBar />
      <div className="flex rounded-xl flex-col justifiy-center mt-[30px] w-[300px] border-black border-[2px] h-[300px] p-[20px]">
        <h1 className="text-[40px] text-center mb-[20px]">Option-1</h1>
        <p className="text-center">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem
          sapiente quo fugit, molestias animi itaque magnam hic at dolore
          necessitatibus iste, laboriosam optio unde perspiciatis illum modi
          aspernatur nulla est?
        </p>
      </div>
    </div>
  );
}
