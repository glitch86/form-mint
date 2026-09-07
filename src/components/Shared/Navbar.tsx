import React from "react";
import { Separator } from "../ui/separator";

export default function Navbar() {
  return (
    <div className=" flex gap-4">
      {/* logo */}
      <div className="bg-red-400 w-15 h-15 rounded-full"></div>

      {/* path  */}
      <div className=" flex gap-2 items-center">
        <p>Path</p>
        <Separator
          orientation="vertical"
          className={"bg-zinc-600 data-vertical:w-0.5"}
        ></Separator>
        <p>Path</p>
        <Separator
          orientation="vertical"
          className={"bg-zinc-600 data-vertical:w-0.5"}
        ></Separator>
        <p>Path</p>
      </div>

      {/* avatar */}
      <div className="bg-red-400 w-15 h-15 rounded-full"></div>
    </div>
  );
}
