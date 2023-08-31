import React from "react";
import Avt1 from "../assets/img/avt1.png";
import Avt2 from "../assets/img/avt2.png";
import Avt3 from "../assets/img/avt3.png";
import Avt4 from "../assets/img/avt4.png";
import {BsFillCircleFill} from 'react-icons/bs'

const Users = () => {
  return (
    <div className="flex flex-col justify-center items-center md:flex-row gap-7 md:justify-start">
      <div className="flex -space-x-4 rounded-full">
        <div>
          <img  className="w-12 h-12 rounded-full" src={Avt1} alt="" />
        </div>
        <div>
          <img className="w-12 h-12 rounded-full"  src={Avt2} alt="" />
        </div>
        <div>
          <img className="w-12 h-12 rounded-full"  src={Avt3} alt="" />
        </div>
        <div>
          <img className="w-12 h-12 rounded-full"  src={Avt4} alt="" />
        </div>
      </div>
      <div className="flex items-center gap-2 justify-center font-medium">
      <BsFillCircleFill className="text-green-500 text-xs animate-pulse"/>
      <div>440k people online </div>
      </div>
    </div>
  );
};

export default Users