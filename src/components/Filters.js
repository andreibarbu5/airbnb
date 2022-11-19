import React from "react";
import { GiFishingBoat, GiMineExplosion } from "react-icons/gi";
import { ImKey } from "react-icons/im";
import { RiAliensFill } from "react-icons/ri";
import { BsFillTreeFill } from "react-icons/bs";
import Filter from "./Filter";

const Filters = () => {
  const sorting = [
    { title: "Boat", icon: <GiFishingBoat /> },
    { title: "New", icon: <GiMineExplosion /> },
    { title: "Unique", icon: <RiAliensFill /> },
    { title: "Private", icon: <ImKey /> },
    { title: "Forest", icon: <BsFillTreeFill /> },
  ];
  return (
    <div className="   ">
      <div className="flex justify-start  gap-3 sm:gap-4  mt-4  ">
        {sorting.map((obj) => (
          <Filter title={obj.title} icon={obj.icon} />
        ))}
      </div>
    </div>
  );
};

export default Filters;
