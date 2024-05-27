import React from "react";

export default function B5() {
  return (
    <div>
      B5
      <div className="relative bg-[#b7e8fd] border-[20px] border-[#d7f2fe] w-[300px] h-[200px] px-[25px] py-[30px] ">
        Relative parent
        <div className="absolute top-[115px] left-0 text-white font-medium bg-[#0ea5e9] px-[15px] py-[10px] rounded-[10px]">
          Abslote child
        </div>
      </div>
    </div>
  );
}